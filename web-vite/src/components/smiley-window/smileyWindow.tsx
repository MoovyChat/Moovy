import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

import React, { useEffect, useState } from "react";

import EmojiButton from "../emoji-picker/emojiButton/emojiButton";

import _ from "lodash";
import TinyUserCard from "../tiny-user-card/tinyUserCard";
import ToxicitySlider from "../toxicity-slider/toxicitySlider";
import { SmileyWindowParent } from "./smileyWindow.styles";

import { useLiveQuery } from "dexie-react-hooks";
import { withUrqlClient } from "next-urql";
import {
  BUY_ME_A_COFFEE,
  DISCORD_INVITE_LINK,
  EXT_URL,
  INSTAGRAM_LINK,
  PATREON,
  PATREON_PNG,
  TIKTOK_LINK,
  TWITTER_LINK,
} from "../../helpers/constants";
import { NameObject } from "../../helpers/interfaces";
import { urqlClient } from "../../helpers/urql/urqlClient";
import {
  FrequentEmoji,
  RecentEmoji,
  db,
} from "../../pages/content/indexedDB/db";
import { useAppDispatch, useAppSelector } from "../../pages/redux/hooks";
import { sliceSetTextAreaMessage } from "../../pages/redux/slices/textArea/textAreaSlice";
import FrequentEmojis from "./frequentEmojis";

const SmileyWindow = () => {
  const iconSize = 30;
  const scores = useAppSelector((state) => state.misc.toxicScores);
  const wordSuggestions: string[] = useAppSelector(
    (state) => state.textArea.wordSuggestions
  );
  const nameSuggestions: NameObject[] = useAppSelector(
    (state) => state.textArea.nameSuggestions
  );

  const textAreaMessage = useAppSelector((state) => state.textArea.text);
  const textAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const dispatch = useAppDispatch();

  const setSpoiler = () => {
    const newText = textAreaMessage + "<s></s>";
    dispatch(sliceSetTextAreaMessage(newText));
  };
  const handleWord: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const el = e.target as HTMLDivElement;
    const msgArr = textAreaMessage.split(" ");
    msgArr.pop();
    el.textContent && msgArr.push(el.textContent);
    dispatch(sliceSetTextAreaMessage(msgArr.join(" ")));
  };

  const handleName = (username: string) => {
    const msgArr = textAreaMessage.split(" ");
    msgArr.pop();
    msgArr.push(`@${username}`);
    dispatch(sliceSetTextAreaMessage(msgArr.join(" ")));
  };

  return (
    <React.Fragment>
      {textAreaFocussed && (
        <SmileyWindowParent>
          <div className="child">
            {((wordSuggestions && wordSuggestions.length > 0) ||
              (nameSuggestions && nameSuggestions.length > 0)) && (
              <div className="section">
                <div className="title">Suggestions</div>
                <div className="wn-suggestions">
                  {wordSuggestions.slice(0, 3).map((word, key) => (
                    <div
                      id="text-focus"
                      className="word"
                      key={`${key}-${word}`}
                      onClick={handleWord}
                    >
                      {word}
                    </div>
                  ))}
                  {nameSuggestions.slice(0, 3).map((name, key) => (
                    <div
                      id="text-focus"
                      className="word"
                      key={`${name.name}-${key}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleName(name.name);
                      }}
                    >
                      <TinyUserCard name={name} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {scores && (
              <div className="section">
                <div className="title">
                  Toxic Meter <i>(Powered By Detoxify)</i>
                </div>
                <ToxicitySlider
                  text="Identity Attack"
                  scores={{ identity_attack: scores.identity_attack }}
                />
                <ToxicitySlider
                  text="Insult"
                  scores={{ insult: scores.insult }}
                />
                <ToxicitySlider
                  text="Obscene"
                  scores={{ obscene: scores.obscene }}
                />
                <ToxicitySlider
                  text="Severe Toxicity"
                  scores={{ severe_toxicity: scores.severe_toxicity }}
                />
                <ToxicitySlider
                  text="Threat"
                  scores={{ threat: scores.threat }}
                />
                <ToxicitySlider
                  text="Toxicity"
                  scores={{ toxicity: scores.toxicity }}
                />
              </div>
            )}
            <FrequentEmojis />
            <div className="section">
              <div className="title">Comment options</div>
              <div
                className="spoiler"
                onClick={(e) => {
                  e.stopPropagation();
                  setSpoiler();
                }}
              >
                <div className="tag" id="text-focus">
                  Spoiler
                </div>
              </div>
            </div>
            <div className="section">
              <div className="title">Socials</div>
              <div className="socials">
                <div
                  id="text-focus"
                  className="discord"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(DISCORD_INVITE_LINK, "_blank");
                  }}
                >
                  <FaDiscord
                    color="cornflowerblue"
                    size={iconSize}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div
                  className="twitter"
                  id="text-focus"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(TWITTER_LINK, "_blank");
                  }}
                >
                  <FaTwitter
                    color="deepskyblue"
                    size={iconSize}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div
                  className="tiktok"
                  id="text-focus"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(TIKTOK_LINK, "_blank");
                  }}
                >
                  <FaTiktok
                    className="icon"
                    size={iconSize}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div
                  className="instagram"
                  id="text-focus"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(INSTAGRAM_LINK, "_blank");
                  }}
                >
                  <FaInstagram
                    color="hotpink"
                    size={iconSize}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </div>
              <div className="section">
                <div className="title">Donate & Support</div>
                <div className="donate">
                  <div
                    className="patreon"
                    id="text-focus"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(PATREON, "_blank");
                    }}
                  >
                    <div className="logo" id="text-focus">
                      <img src={PATREON_PNG} alt="patreon" id="text-focus" />
                    </div>
                  </div>
                  <div
                    className="patreon"
                    id="text-focus"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(BUY_ME_A_COFFEE, "_blank");
                    }}
                  >
                    <div className="logo" id="text-focus">
                      <img
                        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                        alt="bmc"
                        id="text-focus"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SmileyWindowParent>
      )}
    </React.Fragment>
  );
};

export default withUrqlClient(urqlClient)(SmileyWindow);
