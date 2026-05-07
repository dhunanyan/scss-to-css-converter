'use client';
import * as React from 'react';
import Editor from '@monaco-editor/react';
import { siteContent } from '@data';

import './ScssBlock.scss';

export type ScssBlockPropsType = {
  code: string;
  onChange: (value: string | undefined) => void;
};

type ToastType = 'info' | 'success' | 'error';

type OverlayRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const DEFAULT_VALUE = `// HOW TO USE THE TOOL?
//
// - Drag & Drop your \`input.scss\` HERE
// - Copy & Paste your \`scss\` code
// - Write your \`scss\` code directly in this editor
//
// Click on the \`Convert\` button
// HAVE FUN!!`;

const isScssFile = (file: File): boolean => file.name.toLowerCase().endsWith('.scss');
const hasFiles = (e: DragEvent | React.DragEvent): boolean =>
  Array.from(e.dataTransfer?.types ?? []).includes('Files');

export const ScssBlock = ({ code, onChange }: ScssBlockPropsType) => {
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const [isGlobalDragActive, setIsGlobalDragActive] = React.useState(false);
  const [overlayRect, setOverlayRect] = React.useState<OverlayRect | null>(null);
  const [toast, setToast] = React.useState<{ message: string; type: ToastType } | null>(null);

  const pendingCodeRef = React.useRef<string | null>(null);
  const blockRef = React.useRef<HTMLDivElement>(null);
  const dragDepthRef = React.useRef(0);
  const toastTimerRef = React.useRef<number | null>(null);

  const showToast = React.useCallback((message: string, type: ToastType) => {
    setToast({ message, type });

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 2600);
  }, []);

  const updateOverlayRect = React.useCallback(() => {
    const el = blockRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    setOverlayRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
  }, []);

  const applyCode = (nextCode: string) => {
    if (!isEditorReady) {
      pendingCodeRef.current = nextCode;
      showToast(siteContent.blocks.dropPendingMessage, 'info');
      return;
    }

    onChange(nextCode);
    showToast(siteContent.blocks.dropSuccessMessage, 'success');
  };

  const handleEditorMount = () => {
    setIsEditorReady(true);

    if (pendingCodeRef.current !== null) {
      onChange(pendingCodeRef.current);
      pendingCodeRef.current = null;
      showToast(siteContent.blocks.dropSuccessMessage, 'success');
    }
  };

  React.useEffect(() => {
    const onDragEnter = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      dragDepthRef.current += 1;
      setIsGlobalDragActive(true);
      updateOverlayRect();
    };

    const onDragOver = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      if (!isGlobalDragActive) setIsGlobalDragActive(true);
      updateOverlayRect();
    };

    const onDragLeave = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
      if (dragDepthRef.current === 0) setIsGlobalDragActive(false);
    };

    const onDrop = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      dragDepthRef.current = 0;
      setIsGlobalDragActive(false);
    };

    window.addEventListener('dragenter', onDragEnter);
    window.addEventListener('dragover', onDragOver);
    window.addEventListener('dragleave', onDragLeave);
    window.addEventListener('drop', onDrop);
    window.addEventListener('resize', updateOverlayRect);
    window.addEventListener('scroll', updateOverlayRect, { passive: true });

    return () => {
      window.removeEventListener('dragenter', onDragEnter);
      window.removeEventListener('dragover', onDragOver);
      window.removeEventListener('dragleave', onDragLeave);
      window.removeEventListener('drop', onDrop);
      window.removeEventListener('resize', updateOverlayRect);
      window.removeEventListener('scroll', updateOverlayRect);
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, [isGlobalDragActive, showToast, updateOverlayRect]);

  const handleDropCapture = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dragDepthRef.current = 0;
    setIsGlobalDragActive(false);

    const files = e.dataTransfer?.files;
    const file = files && files.length > 0 ? files[0] : null;

    if (!file) {
      showToast(siteContent.blocks.dropNoFileMessage, 'error');
      return;
    }

    if (!isScssFile(file)) {
      showToast(siteContent.blocks.dropInvalidTypeMessage, 'error');
      return;
    }

    try {
      const fileContent = await file.text();
      applyCode(fileContent);
    } catch {
      showToast(siteContent.blocks.dropReadErrorMessage, 'error');
    }
  };

  return (
    <>
      {isGlobalDragActive && overlayRect ? (
        <div className="scss-block__global-overlay" aria-hidden="true">
          <div
            className="scss-block__global-target"
            style={{
              top: overlayRect.top,
              left: overlayRect.left,
              width: overlayRect.width,
              height: overlayRect.height,
            }}
          />
        </div>
      ) : null}

      {toast ? (
        <div className={`scss-block__toast scss-block__toast--${toast.type}`} role="status" aria-live="polite">
          {toast.message}
        </div>
      ) : null}

      <div className="scss-block" ref={blockRef} onDropCapture={handleDropCapture}>
        <div className="scss-block__header">
          <h3 className="scss-block__title">{siteContent.blocks.scssTitle}</h3>
        </div>
        <div className="scss-block__editor">
          <Editor
            height="400px"
            theme="vs-dark"
            path={siteContent.blocks.inputPath}
            defaultLanguage="scss"
            defaultValue={DEFAULT_VALUE}
            value={code}
            onChange={(value) => onChange(value)}
            onMount={handleEditorMount}
            loading
          />
        </div>
      </div>
    </>
  );
};
