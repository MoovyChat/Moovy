import {
  MdFemale,
  MdMale,
  MdOutlineCake,
  MdOutlineContacts,
} from "react-icons/md";
import {
  Profile,
  Users,
  useGetUserMiniProfileQuery,
  useGetUserQuery,
} from "../../generated/graphql";
import React, { MouseEventHandler, useEffect, useMemo, useState } from "react";

import FollowButton from "../follow-button/followButton";
import { ProfileParent } from "./profileWindow.styles";

import { withUrqlClient } from "next-urql";
import { isServerSide, MOOVY_URL } from "../../helpers/constants";
import { urqlClient } from "../../helpers/urql/urqlClient";
import {
  getShortDateFormat,
  getFormattedNumber,
} from "../../helpers/utilities";
import { useAppSelector } from "../../pages/redux/hooks";

type ImageType = string | null | undefined;
type NumberType = number | null | undefined;

interface FavTitles {
  __typename?: "Movie" | undefined;
  id: string;
  name: string;
  stills?: ImageType;
  thumbs?: ImageType;
  season?: ImageType;
  year?: NumberType;
  runtime?: NumberType;
  platformId: number;
  titleId: string;
  parentTitleName?: ImageType;
}

const ProfileWindow = () => {
  const userId = useAppSelector((state) => state.settings.popSlideUserId);
  const [userBasicInfo, setUserBasic] = useState<Users | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [favMovies, setFavMovies] = useState<FavTitles[]>([]);
  const [likedMovies, setLikedMovies] = useState<FavTitles[]>([]);
  const [visitedMovies, setVisitedMovies] = useState<FavTitles[]>([]);
  const [dobInTime, setDOBInTime] = useState<string>("");

  const [userData] = useGetUserQuery({
    variables: { uid: userId },
    pause: isServerSide(),
  });
  const [miniProfile] = useGetUserMiniProfileQuery({
    variables: {
      uid: userId,
    },
    pause: isServerSide(),
  });

  useMemo(() => {
    const { data, fetching } = userData;
    if (!fetching && data) {
      const _data = data?.getUser as Users;
      setUserBasic(() => _data);
    }
  }, [userData]);

  useMemo(() => {
    if (!profile) return;
    if (!profile.dob) {
      setDOBInTime("");
      return;
    }
    const UTCTimeString = (profile.dob as string).split("-").join("/");
    const dobTimeString = getShortDateFormat(
      new Date(UTCTimeString).getTime().toString()
    );
    if (dobTimeString) setDOBInTime(dobTimeString);
  }, [profile?.dob]);

  useEffect(() => {
    const { data, fetching } = miniProfile;
    if (!fetching && data) {
      const _data = data.getFullUserProfile;
      const _profileData = _data?.profile;
      const _favMoviesData = _data?.favorites?.favorites;
      const _likedMoviesData = _data?.likes?.likes;
      const _visitedMoviesData = _data?.history?.recentMovies;
      setProfile(_profileData as Profile);
      _favMoviesData && setFavMovies(() => _favMoviesData);
      _likedMoviesData && setLikedMovies(() => _likedMoviesData);
      _visitedMoviesData && setVisitedMovies(() => _visitedMoviesData);
    }
  }, [miniProfile.fetching, userId]);

  const goToProfile: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const profileUrl = `${MOOVY_URL}/home/profile/${userBasicInfo?.nickname}`;
    chrome.runtime.sendMessage({
      type: "OPEN_LINK",
      url: profileUrl,
    });
  };
  if (userData?.fetching || miniProfile?.fetching) return <div>Loading...</div>;
  if (userData.error) return <div>Server Error.</div>;
  if (!userBasicInfo) return <div>User not found!.</div>;
  return (
    <ProfileParent className="mini-profile">
      <React.Fragment>
        <div className="profile-header">
          <div className="bg">
            <img src={userBasicInfo?.bg as string} alt="bg" />
          </div>
          <FollowButton
            userId={userBasicInfo?.id}
            nickName={userBasicInfo?.nickname}
          />

          <div className="profile-pic">
            <img src={userBasicInfo?.photoUrl} alt="dp" />
          </div>
          <div className="name" onClick={goToProfile}>
            <div className="fullName p">{`${profile?.fullname}`}</div>
            <div className="nickName p">@{userBasicInfo?.nickname}</div>
            <div className="nickname p">{`${getFormattedNumber(
              userBasicInfo?.followerCount as number
            )} Followers ${getFormattedNumber(
              userBasicInfo?.followingCount as number
            )} Following`}</div>
          </div>
        </div>
        <div className="pro">
          <div className="block">
            <div className="icon">
              <MdOutlineCake size={25} />
            </div>
            <div className="info">
              {!dobInTime ? "Not Specified" : dobInTime}
            </div>
          </div>

          {profile && profile.gender && (
            <div className="block">
              <div className="icon">
                {profile?.gender === "male" ? (
                  <MdMale size={25} />
                ) : (
                  <MdFemale size={25} />
                )}
              </div>
              <div className="info">
                {profile && profile.gender
                  ? profile.gender.charAt(0).toUpperCase() +
                    profile.gender.slice(1)
                  : "Not Specified"}
              </div>
            </div>
          )}
          <div className="block">
            <div className="icon">
              <MdOutlineContacts size={25} />
            </div>
            <div className="info">
              {profile && profile.bio ? profile.bio : "Not Specified"}
            </div>
          </div>
        </div>
        <div className="movies">
          <div className="title">History</div>
          <div className="list">
            {visitedMovies.length > 0 ? (
              visitedMovies.map((movie) => (
                <div className="movie" key={movie.id}>
                  <img src={movie.thumbs as string} alt="movie" />
                </div>
              ))
            ) : (
              <div>No Titles</div>
            )}
          </div>
        </div>
        <div className="movies">
          <div className="title">Favorite Titles</div>
          <div className="list">
            {favMovies.length > 0 ? (
              favMovies.map((movie) => (
                <div className="movie" key={movie.id}>
                  <img src={movie.thumbs as string} alt="movie" />
                </div>
              ))
            ) : (
              <div>No Titles</div>
            )}
          </div>
        </div>
        <div className="movies">
          <div className="title">Liked Titles</div>
          <div className="list">
            {likedMovies.length > 0 ? (
              likedMovies.map((movie) => (
                <div className="movie" key={movie.id}>
                  <img src={movie.thumbs as string} alt="movie" />
                </div>
              ))
            ) : (
              <div>No Titles</div>
            )}
          </div>
        </div>
      </React.Fragment>
    </ProfileParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(ProfileWindow);
