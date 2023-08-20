import React from 'react';
import { StyledListCard } from './listCard.styles';
import { MdLocalFireDepartment } from 'react-icons/md';
import { getFormattedNumber } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  children: React.ReactNode;
}
const ListCard: React.FC<Props> = ({ title, children }) => {
  return (
    <StyledListCard>
      <div className="heading">
        <MdLocalFireDepartment color="#fc0404" size={20} />
        <div className="sub">{title}</div>
      </div>
      <div className="content">{children}</div>
    </StyledListCard>
  );
};

export default ListCard;
