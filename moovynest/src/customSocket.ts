import { Socket } from "socket.io";

interface CustomSocket extends Socket {
  roomId: string;
  user: any;
}

export { CustomSocket };
