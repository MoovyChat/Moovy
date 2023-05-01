import React from "react";
import { StyledTinyUserCard } from "./tinyUserCard.styles";
import { NameObject } from "../../helpers/interfaces";
import { Profile } from "../../pages/content/components/moovy/commentInterface/commentInterface.styles";

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
