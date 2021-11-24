import {
  StyledSpinner,
  ItemSpinner,
  SpinnerWrapper,
  Paragraph
} from "./styled";

function Spinner({ message, color, heightSection: heightOfSection }) {
  return (
    <SpinnerWrapper height={heightOfSection}>
      <StyledSpinner background={color}>
        {[1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12].map((e, index) => (
          <ItemSpinner key={index} />
        ))}
      </StyledSpinner>
      <Paragraph color={color} align="center">
        {message}
      </Paragraph>
    </SpinnerWrapper>
  );
}

export default Spinner;
