import Nav from "../components/Nav";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  console.log("onRouteChangeError");
};

const Logo = styled.h1`
  font-size: 4rem;
  transform: skew(-7deg);
  a {
    color: blue;
    text-decoration: none;
    background: ${props => props.theme.red};
    padding: 0.5rem 1rem;
    color: white;
  }
  @media (max-width: 1100px) {
    margin: 0;
    text-align: center;
    a {
      background: blue;
    }
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid black;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-around;
    align-items: stretch;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr;
    border-bottom: 2px solid ${props => props.theme.lightGray};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">homewods</Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;
