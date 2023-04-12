import React from 'react';
import { StyledText } from './normalText.styles';

interface Props {
    data:string;
}
const NormalText:React.FC<Props> = ({data}) => {
    return (
        <StyledText>
            {data}
        </StyledText>
    );
};

export default NormalText;