import styled from "styled-components";

export const PageWrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 100%;
  min-height: 100vh;
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.bgColor || "#ffffff"};
`;

export const Row = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
`;
