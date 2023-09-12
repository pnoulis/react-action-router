import * as React from "react";
import styled from "styled-components";
import { Svg } from "react_utils/svgs";
import { ReactComponent as ArrowIcon } from "agent_factory.shared/ui/icons/arrow_back.svg";

function WidgetBack({ onClick: handleClick, size, className, style }) {
  return (
    <StyledWidgetBack onClick={handleClick}>
      <Svg>
        <ArrowIcon />
      </Svg>
    </StyledWidgetBack>
  );
}

const StyledWidgetBack = styled.div`
  margin-left: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: 3px solid transparent;
  padding: 8px;
  border-radius: 50%;
  background-color: black;
  &:hover {
    opacity: 0.8;
  }
  svg {
    fill: white;
  }
`;

export { WidgetBack };
