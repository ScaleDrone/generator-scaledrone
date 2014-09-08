# ScaleDrone Yeoman Generator

> [ScaleDrone](https://www.scaledrone.com) is easiest way of adding real-time capabilities to your web or mobile app

## Prerequisite

Install Yeoman: [yeoman.io](http://yeoman.io/)

## Usage

Install `generator-scaledrone`:
```
npm install -g generator-scaledrone
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo scaledrone`:
```
yo scaledrone
```

## Running

Open up the client with your favorite http server:
```
http-server client
```
_I am using Node.js based [http-server](https://www.npmjs.org/package/http-server)_

Run the auth server (if you chose to generate it):
```
node jwt-server/server.js
```

Visit the client server at `http://localhost:8080/` (_you might be using a different port_)