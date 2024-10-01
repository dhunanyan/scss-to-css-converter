import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999999999999999999999999999999999999;
  width: 160px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 0 0 20px;
`;

export const SpinnerInner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 10px solid #569cd6;
  border-top: 10px solid #cc6699;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
`;
