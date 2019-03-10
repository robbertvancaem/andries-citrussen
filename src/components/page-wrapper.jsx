import styled from "vue-styled-components";

import Menu from "./menu";
import Header from "./header";

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const PageWrapper = {
  props: ["title"],
  render() {
    return (
      <div>
        <Menu />
        <Header title={this.title} />
        <Content>{this.$slots.default}</Content>
      </div>
    );
  }
};

export default PageWrapper;
