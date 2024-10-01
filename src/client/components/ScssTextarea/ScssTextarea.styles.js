import styled from "styled-components";

export const ScssTextareaContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 20px 0 0;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.75);

  @media (max-width: 900px) {
    margin: 0 0 72px 0;
  }
`;

export const ScssTextareaHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cc6699;
  color: #f1f1f1;
  padding: 7px 14px;
  height: 28px;
`;

export const ScssTextareaHeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 2px;
`;
