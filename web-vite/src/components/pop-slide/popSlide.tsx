import { MdOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md";
import React, { useCallback, useEffect, useState } from "react";

import EmojiPicker from "../emoji-picker/emojiPicker";
import { IoMdCloseCircle } from "react-icons/io";
import LikesWindow from "../likes-window/likesWindow";
import { PopSlideParent } from "./popSlide.styles";
import ProfileWindow from "../profile-window/profileWindow";
import VideoStyles from "../../pages/content/components/moovy/videoStyles/videoStyles";
import { useAppDispatch, useAppSelector } from "../../pages/redux/hooks";
import { sliceResetPopUp } from "../../pages/redux/slices/settings/settingsSlice";

const PopSlide = () => {
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState<{
    title: string;
    subTitle?: string;
  }>({
    title: "Title",
  });
  const [openInFull, setOpenInFull] = useState<number>(0);
  const isPopSlideOpen = useAppSelector(
    (state) => state.settings.isPopSlideOpen
  );
  const PopSlideContentType = useAppSelector(
    (state) => state.settings.popSlideContentType
  );

  const closePopSlide: React.MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceResetPopUp());
  };

  useEffect(() => {
    switch (PopSlideContentType) {
      case "likes":
        setInputs({
          title: "Likes",
        });
        break;
      case "smiley":
        setInputs({
          title: "Smiley",
          subTitle: "MoovyChat",
        });
        break;
      case "video-styles":
        setInputs({
          title: "Paint",
          subTitle: "Video styles ",
        });
        break;
      case "profile":
        setInputs({
          title: "Profile",
          subTitle: "Brief info",
        });
        break;
      default:
        setInputs({
          title: "Title",
          subTitle: "SubTitle",
        });
    }
  }, [PopSlideContentType]);

  const SelectedElement = useCallback(() => {
    switch (PopSlideContentType) {
      case "likes":
        return <LikesWindow />;
      case "smiley":
        return <EmojiPicker />;
      case "video-styles":
        return <VideoStyles />;
      case "profile":
        return <ProfileWindow />;
      default:
        return (
          <div>
            <div>Unrecognized selection</div>
            <div>Please report this bug to us</div>
          </div>
        );
    }
  }, [PopSlideContentType]);

  return (
    <PopSlideParent
      isPopSlideOpen={isPopSlideOpen}
      className="pop-slide"
      openInFull={openInFull}
    >
      <div className="header">
        {openInFull % 2 === 0 ? (
          <MdOpenInFull
            className="min-max-icon"
            size={20}
            onClick={(e) => {
              e.stopPropagation();
              setOpenInFull((c) => c + 1);
            }}
          />
        ) : (
          <MdOutlineCloseFullscreen
            className="min-max-icon"
            size={20}
            onClick={(e) => {
              e.stopPropagation();
              setOpenInFull((c) => c + 1);
            }}
          />
        )}
        <div className="section">
          <div className="title">{inputs.title}</div>
          <div className="sub">{inputs.subTitle}</div>
        </div>
        <IoMdCloseCircle
          className="close-icon"
          size={20}
          onClick={closePopSlide}
        />
      </div>
      <div className="content">
        <SelectedElement />
      </div>
    </PopSlideParent>
  );
};

export default PopSlide;
