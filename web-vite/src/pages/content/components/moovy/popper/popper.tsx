import * as React from "react";
import Popper from "@mui/base/Popper";
import styled from "styled-components";

interface SimplePopperProps {
  className: string;
  tooltip: string;
  children?: React.ReactNode;
  onClick?: any;
}

const SimplePopper: React.FC<SimplePopperProps> = ({
  children,
  className,
  tooltip,
  onClick,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {React.cloneElement(children as React.ReactElement, {
        "aria-describedby": id,
      })}
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <StyledPopperDiv>{tooltip}</StyledPopperDiv>
      </Popper>
    </div>
  );
};

const StyledPopperDiv = styled("div")(
  ({ theme }: { theme }) => `
  padding: 10px;
  border-radius: 10px;
  background-color: ${theme.theme === "dark" ? "#EF476F" : "#06D6A0"};
  color: ${theme.theme === "dark" ? "#000" : "#fff"};
  box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.2);
  transform: skew(-10deg) rotate(-2deg);
  transition: all 0.3s ease;
  font-size: 10px;
  line-height: 1.2;
  margin: 0.5rem 0px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.theme === "dark" ? "#06D6A0" : "#EF476F"};
    z-index: -1;
    transform: skew(10deg) rotate(2deg);
  }
`
);

export default SimplePopper;
