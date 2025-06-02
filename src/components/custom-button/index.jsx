import React from "react";

// Styles
import * as Styles from "./styles";

const CustomButton = ({ children, startIcon, handleClick, ...rest }) => {
  return (
    <Styles.CustomButtonContainer {...rest} onClick={handleClick}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

      {children}
    </Styles.CustomButtonContainer>
  );
};

export default CustomButton;
