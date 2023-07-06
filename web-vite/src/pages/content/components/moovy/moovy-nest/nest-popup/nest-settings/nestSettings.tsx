import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useContext,
  useState,
} from "react";
import { StyledNestSettings } from "./nestSettings.styles";
import { ClickAwayListener, Switch } from "@mui/base";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { NEST_TYPE } from "../../../../../../../helpers/enums";
import {
  CustomSwitch,
  StyledCreateNest,
  SyncButtonSwitch,
} from "../create-nest/createNest.styles";
import { MdSettings } from "react-icons/md";
import {
  StyledListUser,
  StyledListUsers,
} from "../list-users/listUsers.styles";
import { Root } from "../create-nest/createNest.styles";
import {
  sliceSetIsRoomPublic,
  sliceSetShowMetaData,
} from "../../../../../../redux/slices/socket/socketSlice";
import { SocketContext } from "../../../context/socketContextFile";
import { IoMdSync } from "react-icons/io";

const NestSettings = () => {
  const dispatch = useAppDispatch();
  const isPublic = useAppSelector((state) => state.socket.isPublic);
  const showMetaData = useAppSelector((state) => state.socket.showMetaData);
  const roomId = useAppSelector((state) => state.socket.roomId);
  const socket = useContext(SocketContext);
  const isNestAdmin = useAppSelector((state) => state.socket.isNestAdmin);
  const user = useAppSelector((state) => state.user);

  const closeHandler = () => {
    dispatch(sliceSetNestVisibility(false));
    dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
  };

  const switchChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetIsRoomPublic(e.target.checked));
    socket &&
      socket.emit("toggle-room-type", { isPublic: e.target.checked, roomId });
  };

  const switchMetaData: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetShowMetaData(e.target.checked));
  };

  const syncAllUsersHandler: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    const videoElement = document.querySelector("video");
    if (videoElement && socket) {
      const currentTime = videoElement.currentTime;
      socket.emit("sync-all-users", { roomId, adminUser: user, currentTime });
    }
  };

  const syncWithAdminHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    socket && socket.emit("sync-with-admin", { roomId, requestingUser: user });
  };

  return (
    <ClickAwayListener onClickAway={closeHandler}>
      <StyledCreateNest>
        <CustomSwitch>
          <MdSettings size={20} />
          <div>Nest Settings</div>
        </CustomSwitch>
        <StyledListUsers>
          <StyledListUser>
            <div className="usr">
              <div className="nickname">Show Metadata</div>
            </div>
            <div className="options">
              <CustomSwitch>
                <Switch
                  className="public"
                  slots={{
                    root: Root,
                  }}
                  defaultChecked={showMetaData}
                  onChange={switchMetaData}
                />
              </CustomSwitch>
            </div>
          </StyledListUser>
          {isNestAdmin && (
            <StyledListUser>
              <div className="usr">
                <div className="nickname">Public</div>
              </div>
              <div className="options">
                <CustomSwitch>
                  <Switch
                    className="public"
                    slots={{
                      root: Root,
                    }}
                    defaultChecked={isPublic}
                    onChange={switchChangeHandler}
                  />
                </CustomSwitch>
              </div>
            </StyledListUser>
          )}
          {isNestAdmin ? (
            <StyledListUser>
              <div className="usr">
                <div className="nickname">Sync All Users</div>
              </div>
              <div className="options">
                <SyncButtonSwitch onClick={syncAllUsersHandler}>
                  <IoMdSync size={30} />
                </SyncButtonSwitch>
              </div>
            </StyledListUser>
          ) : (
            <StyledListUser>
              <div className="usr">
                <div className="nickname">Sync with Admin</div>
              </div>
              <div className="options">
                <SyncButtonSwitch onClick={syncWithAdminHandler}>
                  <IoMdSync size={30} />
                </SyncButtonSwitch>
              </div>
            </StyledListUser>
          )}
        </StyledListUsers>
      </StyledCreateNest>
    </ClickAwayListener>
  );
};

export default NestSettings;
