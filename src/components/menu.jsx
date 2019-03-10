import styled from "vue-styled-components";

import menuItems from "../data/menuItems";
import LogoAsset from "../assets/logo.svg";

const LogoWrapper = styled.div`
  width: 320px;
  a {
    display: block;
    height: 100%;
  }
`;

const Logo = styled(LogoAsset)`
  height: 100%;
  width: auto;

  .logo-new0 {
    fill: #e84e2b;
  }
  .logo-new1 {
    fill: #fff;
    transition: fill 0.2s ease 0.3s;
  }
`;

const MenuWrapper = styled.nav`
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;

  &:before {
    background: #fff;
    content: "";
    height: 0;
    left: -20px;
    top: -20px;
    transition: height 0.25s ease;
    transition-delay: 0.2s;
    position: absolute;
    width: calc(100% + 40px);
    z-index: -1;
  }

  &:hover:before {
    height: calc(100% + 40px);
    transition-delay: 0s;
  }
  &:hover svg .logo-new1 {
    fill: #383230;
    transition: fill 0.2s ease;
  }
  &:hover li a:before {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledMenuItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;

  a {
    color: #fff;
    display: flex;
    font-weight: 600;
    overflow: hidden;
    margin-left: 40px;
    position: relative;
    text-decoration: none;
  }
  a:hover:before {
    color: #e84e2b;
  }
  a span {
    color: #fff;
    display: block;
    transition: left 0.2s ease, color 0.2s ease;
  }
  a:before {
    color: #383230;
    content: attr(data-hover);
    left: 0;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    transition: all 0.5s ease;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  flex: 0 1 auto;
`;

const MenuItem = {
  functional: true,
  props: {
    url: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  render(_, { props }) {
    return (
      <StyledMenuItem>
        <router-link to={props.url} data-hover={props.label}>
          <span>{props.label}</span>
        </router-link>
      </StyledMenuItem>
    );
  }
};

const Menu = {
  data: () => ({
    menuItems
  }),
  render() {
    return (
      <MenuWrapper>
        <LogoWrapper>
          <router-link to="/">
            <Logo />
          </router-link>
        </LogoWrapper>
        <MenuItems>
          {menuItems.map(item => (
            <MenuItem url={item.url} label={item.label} />
          ))}
        </MenuItems>
      </MenuWrapper>
    );
  }
};

export default Menu;
