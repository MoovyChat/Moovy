import { NameObject } from '../../Utils/interfaces';
import { Profile } from '../../contentScript/commentInterface/commentInterface.styles';
import React from 'react';
import { StyledTinyUserCard } from './tinyUserCard.styles';

type props = {
  name: NameObject;
};
const TinyUserCard: React.FC<props> = ({ name }) => {
  return (
    <StyledTinyUserCard id="text-focus">
      <Profile profilePic={name?.photoUrl} id="text-focus"></Profile>
      <div className="tuc-details" id="text-focus">
        <div id="text-focus">{name.fullname}</div>
        <div id="text-focus">@{name.name}</div>
      </div>
    </StyledTinyUserCard>
  );
};

export default TinyUserCard;
