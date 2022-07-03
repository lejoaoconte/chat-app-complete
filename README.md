<div style="text-align:center;"><img src="https://raw.githubusercontent.com/lejoaoconte/chat-app-complete/be3a7ee8c91035a90fe10a55f772a2c7fea082ce/public/logo.svg" width="150px"></div>

# Complete Chat App - chat.group

That's project involved the creation of a complete chat application which involves validation of user by Google Auth and creation of rooms to group chat with Socket.io.

Demonstration video below:

<div align="center">
  <a href="https://www.youtube.com/watch?v=6FeDjrNK7WE" target="_blank"><img src="https://img.youtube.com/vi/6FeDjrNK7WE/0.jpg" alt="Demonstration Chat APP"></a>
</div>

## Description

The main idea of this application is created a complete chat which login and auth system, without use of strongest back-end, but which we could understand the concepts as NextAuth, Socket.io, and how work back-end in Next.js and how we could applying this in a application.

In the path <a href="https://github.com/lejoaoconte/chat-app-complete/tree/main/src/pages/api">src/pages/api</a> have the back-end part of system, which involve just two files, one on path auth which as the name said it`s the authentication part and the socket.io which is the stream part. All authentication was made with GoogleProvider of NextAuth providers.

Finally in the front-end we treat the authentication with getServerSideProps function native of Next and the stream chat with Socket.io-client.

The idea in here its to train to posibles future ideas which involves this concepts and maybe use this code in the future.

## Getting Started

### Dependencies

The Node.js version of this project is 16.14.2 and the follow libraries which are used are below:

|      library      | version |
|:-----------------:|:-------:|
| next              | 12.2.0  |
| next-auth         | 4.7.0   |
| react             | 18.2.0  |
| react-dom         | 18.2.0  |
| react-icons       | 4.4.0   |
| socket.io         | 4.5.1   |
| socket.io-client  | 4.5.1   |
| styled-components | 5.3.5   |


### Installing and Executing program

If you decide to see the project its just to follow the sequences below:

First of all clone the repository and enter in Visual Code your in your favorite code editor.

```
$ git clone https://github.com/lejoaoconte/chat-app-complete.git
$ cd chat-app-complete
$ code .
```

After it it's necessary to create a Google API Key and API Secret which you can see how do on that's documentation: <a href="https://developers.google.com/adwords/api/docs/guides/authentication" target="_blank">click here</a>. And finally create a JWT random key just to next don't generate errors and warnings.

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL='http://localhost:3000'

JWT_SECRET=
```

And finally run

```
$ npm run dev
```

and access http://localhost:3000.

## Authors

João Conte 
LinkedIn: [/in/lejoaoconte](https://www.linkedin.com/in/lejoaoconte/)

## License

This project is licensed under the MIT License - see the <a href="https://github.com/lejoaoconte/chat-app-complete/blob/main/LICENSE.md" target="_blank">LICENSE.md</a> file for details
