/**
 * This function sets up event listeners for various socket events and dispatches actions to update the
 * Redux store based on the received data.
 * @param user - The current user object, which is passed as a parameter to the `useSocketEvents` hook.
 * It is used to determine if the user who joined or left the room is the current user, and to emit
 * messages to the server with the user's information.
 */
import { useEffect, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { batch } from "react-redux";
import { NEST_TYPE } from "../../../../../helpers/enums";
import {
  sliceSetNestVisibility,
  sliceSetNestType,
  sliceSetNests,
} from "../../../../redux/slices/nestSlice";
import {
  sliceSetSocketConnectionStatus,
  sliceSetRoomId,
  sliceSetRoomName,
  sliceSetJoinedUsers,
  sliceSetJoinedRoom,
  sliceSetIsRoomPublic,
  sliceSetResetIncomingMessages,
  sliceSetIsNestAdmin,
  sliceSetIncomingMessages,
} from "../../../../redux/slices/socket/socketSlice";
import { SocketContext } from "../context/socketContextFile";
import { openSnackBar } from "../moovy-nest/nest-popup/snack-bar/snackBar";
import { SOCKET_MESSAGE_TYPES } from "../../../../../helpers/constants";
import { getVideoElement } from "../contentScript.utils";
import { Movie, User } from "../../../../../helpers/interfaces";
import { compareUrlsAndRedirect } from "../../../../../helpers/utilities";

export const useSocketEvents = (user: User) => {
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const roomId = useAppSelector((state) => state.socket.roomId);
  useEffect(() => {
    if (socket && user) {
      /* This code is setting up an event listener for the "connect" event on the socket object. When
     the socket connection is established, the callback function is executed, which logs a message
     to the console indicating that the socket is connected and dispatches an action to update the
     socket connection status in the Redux store. */
      socket.on("connect", () => {
        dispatch(sliceSetSocketConnectionStatus(true));
      });

      /* This code sets up an event listener for the "rejoin" event on the socket object. When the event
     is triggered, the callback function is executed, which logs the users who have rejoined the
     room to the console and dispatches a series of actions to update the Redux store with the new
     room information. If the user who rejoined is not the current user, a snack bar notification is
     displayed indicating that the user has rejoined the room. */
      socket.on("rejoin", (data) => {
        batch(() => {
          dispatch(sliceSetRoomId(data.room.roomId));
          dispatch(sliceSetRoomName(data.room.roomName));
          dispatch(sliceSetJoinedUsers(data.room.users));
          dispatch(sliceSetJoinedRoom(true));
          dispatch(sliceSetNestVisibility(false));
          dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
        });
        user &&
          data.user.id !== user.id &&
          openSnackBar(`${data.user.nickname} re-joined the Nest`);
      });

      /* This code sets up an event listener for the "sessionCreated" event on the socket object. When
    the event is triggered, the callback function is executed, which creates a new session object
    with the sessionId received from the server and stores it in the browser's sessionStorage using
    the key "session". This allows the session data to persist across page refreshes or navigation
    within the same website. */
      socket.on("sessionCreated", ({ sessionId }) => {
        const newSession = { sessionId };
        window.sessionStorage.setItem("session", JSON.stringify(newSession));
      });

      /* This code sets up an event listener for the "disconnect" event on the socket object. When the
     socket connection is lost, the callback function is executed, which logs a message to the
     console indicating that the socket is disconnected and dispatches an action to update the
     socket connection status in the Redux store. */
      socket.on("disconnect", () => {
        dispatch(sliceSetSocketConnectionStatus(false));
      });

      /* This code sets up an event listener for the "nestsList" event on the socket object. When the
      event is triggered, the callback function is executed, which receives a list of available
      rooms as a parameter and dispatches an action to update the Redux store with the new list of
      rooms. This allows the client to receive an updated list of available rooms from the server
      and display them to the user. */
      socket.on("nestsList", (roomsList) => {
        dispatch(sliceSetNests(roomsList));
      });

      /* This code sets up an event listener for the "change-room-name-success" event on the socket
     object. When the event is triggered, the callback function is executed, which receives an
     object with two properties: "message" and "newRoomName". The function then dispatches an action
     to update the Redux store with the new room name. This allows the client to receive
     confirmation from the server that the room name has been successfully changed and update the UI
     accordingly. */
      socket.on("change-room-name-success", ({ message, newRoomName }) => {
        dispatch(sliceSetRoomName(newRoomName));
      });

      /* This code sets up an event listener for the "change-room-name-error" event on the socket object.
      When the event is triggered, the callback function is executed, which receives an object with a
      "message" property. The function then displays a snack bar notification with the error message
      received from the server. This allows the client to receive feedback from the server that the room
      name change was unsuccessful and display an error message to the user. */
      socket.on("change-room-name-error", ({ message }) => {
        openSnackBar(message);
        dispatch(sliceSetRoomId(""));
        dispatch(sliceSetJoinedRoom(false));
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
      });

      /* This code sets up an event listener for the "room-name-changed" event on the socket object.
      When the event is triggered, the callback function is executed, which receives an object with
      a "message" property. The function then displays a snack bar notification with the message
      received from the server. This allows the client to receive feedback from the server that the
      room name has been successfully changed and display a notification to the user. */
      socket.on("room-name-changed", ({ message }) => {
        openSnackBar(message);
      });

      /* This code sets up an event listener for the "movie-changed" event on the socket object. When
      the event is triggered, the callback function is executed, which receives an object with a
      "newUrl" property. The function then displays a snack bar notification with the message
      "changed to {newUrl}" and emits a "message" event to the server with the updated URL
      information. This allows the server to broadcast the URL change to all users in the room. */
      socket.on("movie-changed", ({ newUrl, movie }) => {
        openSnackBar(`changed to ${(movie as Movie).name}`);
        socket.emit("message", {
          roomId: roomId,
          data: {
            user,
            type: SOCKET_MESSAGE_TYPES.URL_CHANGE,
            message: `changed to ${(movie as Movie).name}`,
          },
        });
      });

      /* This code sets up an event listener for the "join-room-success" event on the socket object.
      When the event is triggered, the callback function is executed, which receives an object with
      information about the user who joined the room and the room itself. If the user who joined is
      the current user, the function dispatches a series of actions to update the Redux store with
      the new room information, including setting the room ID, setting the joined room status to
      true, and hiding the nest. If the user who joined is not the current user, a snack bar
      notification is displayed indicating that the user has joined the room. */
      socket.on("join-room-success", (data) => {
        console.log("Join-room-success", { data });
        data.user.id === user.id &&
          batch(() => {
            dispatch(sliceSetRoomId(data.room.roomId));
            dispatch(sliceSetJoinedRoom(true));
            dispatch(sliceSetNestVisibility(false));
            dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
          });
        data.user.id !== user.id &&
          openSnackBar(`${data.user.nickname} Joined the Nest`);
        compareUrlsAndRedirect(data?.room?.url);
      });

      /* This code sets up an event listener for the "join-room-error" event on the socket object. When
      the event is triggered, the callback function is executed, which receives an object with
      information about the error that occurred when a user tried to join a room. If the user who
      tried to join the room is the current user, the function displays a snack bar notification
      with the error message received from the server. This allows the client to receive feedback
      from the server that the room join was unsuccessful and display an error message to the user. */
      socket.on("join-room-error", (data) => {
        dispatch(sliceSetRoomId(""));
        dispatch(sliceSetJoinedRoom(false));
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
        data.user.id == user.id && openSnackBar(`${data.message}`);
      });

      socket.on("get-current-time", async (data) => {
        const adminUser = data.adminUser;
        const joinedUser = data.joinedUser as User;
        const videoElements = await getVideoElement();
        if (videoElements && user && adminUser.id === user.id) {
          const videoElement = videoElements[0];
          if (videoElement) {
            const currentTime = videoElement.currentTime;
            socket.emit("current-time", { joinedUser, currentTime, roomId });
          }
        }
      });

      socket.on("sync-non-admin-current-time", ({ currentTime, adminUser }) => {
        user &&
          user.id !== adminUser.id &&
          chrome.runtime.sendMessage({
            text: "SEEK_VIDEO",
            time: String(currentTime),
          });
      });

      socket.on("admin-current-time", ({ currentTime, joinedUser }) => {
        user &&
          user.id === joinedUser.id &&
          chrome.runtime.sendMessage({
            text: "SEEK_VIDEO",
            time: String(currentTime),
          });
      });

      socket.on("toggle-room-type-success", ({ message, isPublic }) => {
        openSnackBar(message);
        dispatch(sliceSetIsRoomPublic(isPublic));
      });

      socket.on("room-type-changed", ({ message, isPublic }) => {
        openSnackBar(message);
        dispatch(sliceSetIsRoomPublic(isPublic));
      });

      socket.on("toggle-room-type-error", ({ message }) => {
        openSnackBar(message);
        batch(() => {
          dispatch(sliceSetRoomId(""));
          dispatch(sliceSetJoinedRoom(false));
          dispatch(sliceSetNestVisibility(false));
          dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
        });
      });

      /* This code sets up an event listener for the "roomName" event on the socket object. When the
      event is triggered, the callback function is executed, which receives an object with
      information about the room, including the room name and the users who have joined the room. If
      the current user is not null and the user ID in the received data matches the ID of the
      current user, the function dispatches a series of actions to update the Redux store with the
      new room name and the list of joined users. It also displays a snack bar notification
      indicating that the user has joined the room with the new room name. */
      socket.on("roomName", (data) => {
        if (user && data.user.id == user.id) {
          dispatch(sliceSetRoomName(data.room.roomName));
          dispatch(sliceSetJoinedUsers(data.room.users));
          openSnackBar(`Joined the '${data.room.roomName}' Nest`);
        }
      });

      /* The above code is dispatching an action to update the socket connection status in a Redux
      store. The action being dispatched is created by calling the `sliceSetSocketConnectionStatus`
      function with the `socket.connected` value as its argument. */
      dispatch(sliceSetSocketConnectionStatus(socket.connected));

      /* The above code is using the Socket.IO library to listen for a "roomUsers" event from the
     server. When this event is received, it dispatches an action to update the state of the
     application with the list of users who have joined the current room. */
      socket.on("roomUsers", (users) => {
        dispatch(sliceSetJoinedUsers(users));
      });

      /* The above code is using Socket.io to listen for the "userLeft" event. When this event is
      triggered, it checks if the ID of the user who left the chat room is not the same as the ID of
      the current user. If it is not the same, it displays a notification using the openSnackBar
      function. If the ID of the user who left is the same as the ID of the current user, it clears
      the session storage, resets some state variables using the dispatch function from Redux
      Toolkit, and sets the joinedRoom state variable to false. */
      socket.on("userLeft", (leftUser) => {
        leftUser.id !== user.id &&
          openSnackBar(`${leftUser.nickname} Left the Nest`);
        if (leftUser.id === user.id) {
          window.sessionStorage.setItem("session", "");
          batch(() => {
            dispatch(sliceSetResetIncomingMessages());
            dispatch(sliceSetRoomId(""));
            dispatch(sliceSetRoomName(""));
            dispatch(sliceSetIsRoomPublic(true));
            dispatch(sliceSetJoinedRoom(false));
            dispatch(sliceSetIsNestAdmin(false));
          });
        }
      });

      /* The above code is listening for a "leave-room-error" event on a socket connection. When the
      event is triggered, it checks if the user ID in the received data matches the ID of the
      current user. If it does, it opens a snackbar with the error message contained in the data. */
      socket.on("leave-room-error", (data) => {
        dispatch(sliceSetRoomId(""));
        dispatch(sliceSetJoinedRoom(false));
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
        data.user.id === user.id && openSnackBar(data.message);
      });

      /* The above code is listening for a "create-room-success" event on a socket connection. When the
      event is received, it logs the data received and sets various state values using the Redux
      dispatch function. It also opens a snackbar with a message indicating that a new "Nest"
      (presumably a chat room or similar feature) has been created. */
      socket.on("create-room-success", (data) => {
        const usersInRoom = data.usersInRoom;
        batch(() => {
          dispatch(sliceSetRoomId(data.roomId));
          dispatch(sliceSetRoomName(data.roomName));
          dispatch(sliceSetJoinedUsers(usersInRoom));
          dispatch(sliceSetIsRoomPublic(true));
          dispatch(sliceSetJoinedRoom(true));
          dispatch(sliceSetNestVisibility(false));
          dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
        });
        openSnackBar(`Created the '${data.roomName}' Nest`);
      });

      /* The above code is listening for a "create-room-error" event on a socket connection. When the
      event is triggered, it logs a message to the console and displays a message in a snack bar
      with the error message received in the data parameter. */
      socket.on("create-room-error", (data) => {
        openSnackBar(`${data.message}`);
        dispatch(sliceSetRoomId(""));
        dispatch(sliceSetJoinedRoom(false));
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
      });

      socket.on("seekTime", (data) => {
        if (user && data.user.id !== user.id) {
          chrome.runtime.sendMessage({
            text: "SEEK_VIDEO",
            time: String(data.seekTime),
          });
          openSnackBar(
            `${data.user.nickname} Seeked the video to ${data.seekTime}`
          );
        }
      });

      socket.on("pause", async (data) => {
        if (user && data.user.id !== user.id) {
          const video = await getVideoElement();
          if (video) {
            const videoPlayer = video[0];
            videoPlayer.pause();
            openSnackBar(`${data.user.nickname} paused the video`);
          }
        }
      });

      socket.on("play", async (data) => {
        if (user && data.user.id !== user.id) {
          const video = await getVideoElement();
          if (video) {
            const videoPlayer = video[0];
            videoPlayer.play();
            openSnackBar(`${data.user.nickname} resumed the video`);
          }
        }
      });

      socket.on("play-error", (data) => {
        user && data.user.id === user.id && openSnackBar(data.message);
      });
      socket.on("room-play-error", (data) => {
        user && data.user.id === user.id && openSnackBar(data.message);
        dispatch(sliceSetRoomId(""));
        dispatch(sliceSetJoinedRoom(false));
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
      });
      socket.on("pause-error", (data) => {
        user && data.user.id === user.id && openSnackBar(data.message);
      });
      socket.on("room-pause-error", (data) => {
        user && data.user.id === user.id && openSnackBar(data.message);
        dispatch(sliceSetRoomId(""));
        dispatch(sliceSetJoinedRoom(false));
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
      });

      socket.on("kick-user", (data) => {
        openSnackBar(data.message);
      });

      socket.on("kick-user-success", (data) => {
        const kickedUser = data.kickedUser as User;
        openSnackBar(data.message);
        if (kickedUser.id === user.id) {
          dispatch(sliceSetRoomId(""));
          dispatch(sliceSetJoinedRoom(false));
          dispatch(sliceSetNestVisibility(false));
          dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
          dispatch(sliceSetIncomingMessages([]));
        }
      });

      socket.on("kick-user-error", (data) => {
        openSnackBar(data.message);
      });

      socket.on("kick-user-error", (data) => {
        user && data.user.id === user.id && openSnackBar(data.message);
        dispatch(sliceSetRoomId(""));
        dispatch(sliceSetJoinedRoom(false));
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
      });

      /* The above code is defining a function that removes all event listeners from a socket
      connection. The function is returning an arrow function that calls the `off` method on the
      `socket` object for various events such as "connect", "rejoin", "sessionCreated",
      "disconnect", "nestsList", "change-room-name-success", "change-room-name-error",
      "room-name-changed", "movie-changed", "join-room-success", "join-room-error", "roomName",
      "roomUsers", "userLeft", "leave-room-error", "create-room-success", and "create-room */
      return () => {
        socket.off("connect");
        socket.off("rejoin");
        socket.off("sessionCreated");
        socket.off("disconnect");
        socket.off("nestsList");
        socket.off("change-room-name-success");
        socket.off("change-room-name-error");
        socket.off("room-name-changed");
        socket.off("movie-changed");
        socket.off("join-room-success");
        socket.off("join-room-error");
        socket.off("roomName");
        socket.off("roomUsers");
        socket.off("userLeft");
        socket.off("leave-room-error");
        socket.off("create-room-success");
        socket.off("create-room-error");
      };
    }
  }, [socket, user, roomId]);
};
