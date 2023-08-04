import React, { useContext, useEffect } from "react";
import { GiNestBirds } from "react-icons/gi";
import { StyledNestButton } from "../nest-login/nestLogin.styles";
import { AvailableRoom } from "../../../../../../helpers/interfaces";
import { SocketContext } from "../../context/socketContextFile";
import { AvailableNest, NestIcon, NestInfo } from "./nestCard.styles";
import { useAppSelector } from "../../../../../redux/hooks";
import { SiNetflix } from "react-icons/si";
import { OTT } from "../../../../../../helpers/constants";
interface NestCardInterface {
  nest: AvailableRoom;
}
const NestCard: React.FC<NestCardInterface> = ({ nest }) => {
  const socket = useContext(SocketContext);
  const user = useAppSelector((state) => state.user);
  const joinRoomHandler = (roomId: string) => {
    socket && socket.emit("joinRoom", roomId, user);
  };

  return (
    <AvailableNest>
      <NestIcon>
        {nest.movie.thumbs ? (
          <img
            className="nest-thumbs"
            src={nest?.movie?.thumbs}
            alt={nest?.movie?.name}
          />
        ) : (
          <GiNestBirds size={20} />
        )}
      </NestIcon>
      <NestInfo>
        <div className="nest-detail">
          <div className="nest-detail-room">
            <GiNestBirds size={20} style={{ marginRight: "5px" }} />
            <span className="room-label">{nest?.roomName}</span>
          </div>
          <div className="nest-detail-show">
            <div className="nest-detail-icon">
              {nest?.movie?.platform === "aha" ? (
                <img src={OTT.AHA.imgUrl} alt="aha" width={20} height={20} />
              ) : nest?.movie?.platform === "disneyplus" ? (
                <img
                  src={OTT.DISNEY.imgUrl}
                  alt="disneyplus"
                  width={20}
                  height={20}
                />
              ) : nest?.movie?.platform === "hulu" ? (
                <img src={OTT.HULU.imgUrl} alt="hulu" width={20} height={20} />
              ) : nest?.movie?.platform === "hbomax" ? (
                <img
                  src={OTT.HBOMAX.imgUrl}
                  alt="hbomax"
                  width={20}
                  height={20}
                />
              ) : (
                <SiNetflix size={20} color="red" />
              )}
            </div>

            <div className="nest-movie-name">
              {nest?.movie?.parentTitleName} {nest?.movie?.name}
            </div>
          </div>
          <div className="nest-detail-users">
            {nest?.users &&
              nest.users.slice(0, 3).map(({ user }) => (
                <div className="user-chip">
                  <img
                    className="user-chip-img"
                    src={user.photoUrl}
                    alt={user.nickname}
                  />
                </div>
              ))}
            {nest?.users && nest.users.length > 3 && (
              <div className="more-users">+{nest.users.length - 3}</div>
            )}
          </div>
        </div>
        <StyledNestButton
          nestColor="#fb005c"
          nestHover="#bb0246"
          nestActive="#880233"
          size={10}
          height={30}
          onClick={() => joinRoomHandler(nest.roomId)}
        >
          <div>Join</div>
        </StyledNestButton>
      </NestInfo>
    </AvailableNest>
  );
};

export default NestCard;
