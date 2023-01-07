import HtmlParser from 'react-html-parser';
import React from 'react';

interface Props {
  text: string;
}

const DetectLinks: React.FC<Props> = ({ text }) => {
  const parsedText = HtmlParser(text);
  return <div>{parsedText}</div>;
};

export default DetectLinks;
