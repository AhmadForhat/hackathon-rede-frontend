import React from "react";

import { Container } from "./styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hasPadding?: boolean;
  hasBoxShadow?: boolean;
  hasMarginBottom?: boolean;
}

const Card: React.FC<CardProps> = ({ hasPadding, hasBoxShadow, hasMarginBottom, ...props }) => {
  return (
    <Container
      hasPadding={hasPadding}
      hasBoxShadow={hasBoxShadow}
      hasMarginBottom={hasMarginBottom}
      {...props}
    />
  );
};

export default Card;
