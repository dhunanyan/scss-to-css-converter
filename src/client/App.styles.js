import styled from "styled-components";

export const AppWrapper = styled.main`
  background-color: #363636;
  height: 100vh;
`;
export const AppContainer = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    padding: 0 10px;
  }

  @media (max-width: 320px) {
    padding: 0 5px;
  }
`;

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  margin: 30px 0 0 0;
  max-width: 600px;
  text-align: center;

  @media (max-width: 450px) {
    margin: 10px 0 0 0;
  }

  @media (max-width: 320px) {
    margin: 5px 0 0 0;
  }
`;

export const AppTitle = styled.h1`
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #bbb;
    font-size: 60px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-of-type,
    &:last-of-type {
      font-size: 100px;
    }

    &:first-of-type {
      color: #cc6699;
      margin: 10px;
    }

    &:last-of-type {
      color: #569cd6;
    }
  }
`;

export const AppDescr = styled.p`
  margin: 10px 0 0 0;
  font-weight: 600;
  color: #bbb;
  line-height: 20px;
`;

export const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px 0;

  @media (max-width: 900px) {
    position: relative;
  }

  @media (max-width: 450px) {
    margin: 10px 0;
  }

  @media (max-width: 320px) {
    margin: 5px 0;
  }
`;

export const AppFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 450px;

  @media (max-width: 900px) {
    height: 900px;
    flex-direction: column;
  }
`;

export const AppTextarea = styled.textarea`
  width: calc(100% - 28px);
  height: calc(100% - 28px);
  resize: none;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4)
  );
  color: #292929;
  border-radius: 6px;
  padding: 14px;
  border: none;
  margin: 0 30px 0 0;
`;

export const AppButton = styled.button`
  width: 100%;
  height: 42px;
  padding: 7px 14px;
  margin: 20px 0 0 0;
  border-radius: 6px;
  background-color: #cc6699;
  color: #f1f1f1;
  font-weight: 500;
  font-size: 16px;
  transition: all 150ms ease-out;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    background-color: #569cd6;
    color: #1e1e1e;
  }

  @media (max-width: 900px) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
