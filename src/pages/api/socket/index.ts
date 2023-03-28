import { NextApiRequest } from "next";
import { Server, Socket } from "socket.io";

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
      console.log(`User Connected: ${socket.id}`);

      socket.on("join_room", (room: string) => {
        socket.join(room);
        console.log(`User with ID: ${socket.id} joined room: ${room}`);
      });

      socket.on("send_message", (data: SocketIoProps, room: string) => {
        console.log(data)
        socket.to(room).emit("receive_message", data);
      });

      socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
      });
    });
  }
  res.end();
};

export default SocketHandler;
