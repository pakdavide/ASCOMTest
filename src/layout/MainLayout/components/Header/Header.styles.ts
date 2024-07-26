import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  -webkit-backface-visibility: hidden;
  background-color: #525252;
  color: #ffffff;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const LogoContainer = styled.div`
  flex: 1;
  padding-left: 15px;
`;

export const NavContainer = styled.div`
  flex: 1;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 16px;
  align-item: center;
  justify-content: center;
`;
export const NavigationLink = styled(Link)<{ isSelected?: boolean }>`
  display: flex;
  color: #ffffff;
  gap: 16px;
  position: relative;
  cursor: pointer:

  &:hover {
    color: #ffffff !important;
  }

  &:hover::after {
    content: "";
    background-color: #D0D2FF;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    position: absolute;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &::after {
        content: "";
        background-color: #fff;
        bottom: -15px;
        left: 0;
        width: 100%;
        height: 4px;
        position: absolute;
      }
    `}
`;

export const SearchContainer = styled.div`
  flex: 1;
  display:flex;
  justify-content: flex-end;
  padding-right:15px;
`;
