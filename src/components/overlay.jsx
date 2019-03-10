import styled from "vue-styled-components";

const overlayProps = {
  backgroundColor: {
    type: String,
    required: true
  }
};

const StyledOverlay = styled("div", overlayProps)`
  background-color: ${props => props.backgroundColor || "rgba(0,0,0,.5)"};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Overlay = {
  functional: true,
  props: overlayProps,
  render(_, { props }) {
    return <StyledOverlay backgroundColor={props.backgroundColor} />;
  }
};

export default Overlay;
