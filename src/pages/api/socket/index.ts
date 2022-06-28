import { NextApiRequest, NextApiResponse } from "next";
import { Server, Socket } from "Socket.IO";

export interface UserProps {
  email: string;
  image: string;
  name: string;
}

export interface SocketIoProps extends UserProps {
  message: string;
}

const SocketHandler = (req: NextApiRequest, res: any) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket: Socket) => {
      socket.on("message", ({ name, message, image, email }: SocketIoProps) => {
        io.emit("message", { name, message, image, email });
      });
    });
  }
  res.end();
};

export default SocketHandler;
