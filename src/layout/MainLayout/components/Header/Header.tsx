import * as S from "./Header.styles";
import { AppRoutes } from "../../../../Routes.const";
import { useResolvedPath } from "react-router";

const Header = () => {
  const path = useResolvedPath("").pathname;
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src="https://fakeimg.pl/100x50/" alt="logo" />
      </S.LogoContainer>
      <S.NavContainer>
        <S.Navigation>
          <S.NavigationLink
            to={AppRoutes.Patients.home}
            isSelected={path === AppRoutes.Patients.home}
          >
            Patient
          </S.NavigationLink>
          <S.NavigationLink
            to={"#"}
          >
            Test
          </S.NavigationLink>
          <S.NavigationLink
            to={"#"}
          >
            Test2
          </S.NavigationLink>
        </S.Navigation>
      </S.NavContainer>
      <S.SearchContainer>
        <label htmlFor="site-search">Search the site:</label>
        <input type="search" id="site-search" name="q" />
        <button>Search</button>
      </S.SearchContainer>
    </S.HeaderContainer>
  );
};

export default Header;
