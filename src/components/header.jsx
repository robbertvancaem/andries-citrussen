import styled from "vue-styled-components";

import Overlay from "./overlay";
import img from "../assets/backgrounds/office.jpg";

const HeaderWrapper = styled.header`
  background: url(${img});
  background-position: center center;
  background-size: cover;
  height: 520px;
  position: relative;
  z-index: 1;

  &:before,
  &:after {
    background: transparent;
    border-bottom: 200px solid #fff;
    bottom: -200px;
    content: "";
    height: 100px;
    position: absolute;
    z-index: 4;
    width: calc(50% + 200px);
  }

  &:before {
    border-radius: 0 0 0 100%;
    border-left: 200px solid #fff;
    left: -400px;
  }

  &:after {
    border-radius: 0 0 100% 0;
    border-right: 200px solid #fff;
    right: -400px;
  }
`;

const PageTitle = styled.h1`
  color: #fff;
  font-weight: 700;
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 2;
`;

const Header = {
  props: {
    title: {
      type: String,
      required: false
    }
  },
  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          {this.title && <PageTitle>{this.title}</PageTitle>}
        </HeaderContent>
        <Overlay background-color="rgba(59,22,17,0.6)" />
      </HeaderWrapper>
    );
  }
};

export default Header;
