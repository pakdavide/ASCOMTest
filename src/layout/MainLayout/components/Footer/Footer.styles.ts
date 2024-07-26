import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #1f1f1f;
  color: #9e9e9e;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  align-items: center;
  & div:first-child {
    margin-left: 15px;
  }
  & div:last-child {
    margin-right: 15px;
  }
`;
