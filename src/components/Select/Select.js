import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <SelectContainer value={value} onChange={onChange}>
        {children}
      </SelectContainer>
      <Placeholder>
        {displayedValue}
        <IconContainer>
          <Icon id="chevron-down" size={24} />
        </IconContainer>
      </Placeholder>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: max-content;
`;

const SelectContainer = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Placeholder = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  ${SelectContainer}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectContainer}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

export default Select;
