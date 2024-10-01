import styled from "styled-components";

export const ErrorPopupWrapper = styled.div`
  position: fixed;
  z-index: 99999999999999999999999999999999999999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
`;

export const ErrorPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  min-width: 200px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.75);
  cursor: auto;
`;

export const ErrorPopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fa8072;
  padding: 5px;
`;

export const ErrorPopupTitle = styled.h3`
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
`;

export const ErrorPopupCloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  background-color: #fa8072;
  color: #202020;
  cursor: pointer;
`;

export const ErrorPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  background-color: #181818;
`;

export const ErrorPopupSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #ddd;
`;

export const ErrorPopupMessage = styled.p`
  font-size: 16px;
  color: #aaa;
`;
