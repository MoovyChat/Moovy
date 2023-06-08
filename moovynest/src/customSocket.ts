import { Socket } from "socket.io";

/* This code is defining a new interface called `CustomSocket` that extends the `Socket` interface from
the `socket.io` library. The `CustomSocket` interface adds two new properties to the `Socket`
interface: `roomId` of type `string` and `user` of type `any`. This allows for the creation of a
custom socket object that includes these additional properties, which can be used in the application
logic. */
interface CustomSocket extends Socket {
  roomId: string;
  user: any;
}

export { CustomSocket };
