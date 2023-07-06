import React, { useState } from "react";
import { MdCheck, MdOutlineContentCopy } from "react-icons/md";
import styled from "styled-components";
import { openSnackBar } from "../nest-popup/snack-bar/snackBar";

interface Props {
  copied: boolean;
}
const Button = styled.button<Props>`
  background-color: ${(props) => (props.copied ? "green" : "#0000FF15")};
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

const Text = styled.span``;

const Wrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid;
  padding: 3px 10px;
  border-radius: 12px;
  cursor: pointer;
`;

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    openSnackBar("Invite code copied");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Wrapper onClick={handleCopy}>
      <Button copied={copied}>
        {!copied ? <MdOutlineContentCopy size={15} /> : <MdCheck size={15} />}
      </Button>
      <Text>Copy Invite code</Text>
    </Wrapper>
  );
};

export default CopyToClipboard;
