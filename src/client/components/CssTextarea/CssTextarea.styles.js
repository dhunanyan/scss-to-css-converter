import styled from "styled-components";

export const CssTextareaContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  background-color: #1e1e1e;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.75);
`;

export const CssTextareaEditContainer = styled.div`
  overflow-y: auto;
  position: relative;
`;

export const CssTextareaMask = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 9999;
  right: 62px;
  bottom: 0;
  top: 0;
  left: 0;
`;

export const CssTextareaHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #569cd6;
  color: #1c1b1c;
  padding: 7px 14px;
  height: 28px;
`;

export const CssTextareaHeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 2px;
`;

export const CssTextareaHeaderButton = styled.button`
  color: #1c1b1c;
  background-color: #569cd6;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease-out;
  padding: 2px 4px;
  border-radius: 5px;

  &:hover {
    background-color: #1c1b1c;
    color: #569cd6;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-of-type {
      font-size: 18px;
      margin: 0 0 0 5px;
    }
  }
`;
