import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styled from "styled-components";

export const MainContainer = styled.div`
  padding:16px;
  width: calc(100% - 40px);
  flex:1;
  ;
`;

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
