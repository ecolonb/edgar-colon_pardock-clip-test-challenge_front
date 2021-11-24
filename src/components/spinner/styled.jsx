import styled from "styled-components";

export const ItemSpinner = styled.div`
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const SpinnerWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "auto"};
  position: relative;
`;

export const StyledSpinner = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  ${ItemSpinner}+:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: ${(props) => props.background || "#FFF"};
  }
  ${ItemSpinner}+:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  ${ItemSpinner}+:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  ${ItemSpinner}+:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  ${ItemSpinner}+:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  ${ItemSpinner}+:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  ${ItemSpinner}+:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  ${ItemSpinner}+:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  ${ItemSpinner}+:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  ${ItemSpinner}+:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  ${ItemSpinner}+:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  ${ItemSpinner}+:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  ${ItemSpinner}+:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
`;

export const Paragraph = styled.p`
  font-family: ${(props) => props.fontFamily || "unset"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "#E3E0F0"};
  text-align: ${(props) => props.align || "left"};
  margin: ${(props) => props.margin || 0};
  line-height: ${(props) => props.lineHeight || "inherit"};
  max-width: ${(props) => props.maxWidth || "unset"};
`;
