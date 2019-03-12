import styled, { keyframes } from "vue-styled-components";

const Loader = {
  render() {
    return <div>Loading</div>;
  }
};

const StyledLoader = styled(Loader)`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

const loaderAnimation = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

/*
 * This is an ugly solution to a weird issue. If the loaderAnimation was declared first,
 * it would cause an error. Therefore it's important that first a styled component is
 * created, then the animation and then that animation is applied to the component.
 */
const LoaderWithAnimation = styled(StyledLoader)`
  animation: ${loaderAnimation} 2s ease-in-out;
`;
export default LoaderWithAnimation;
