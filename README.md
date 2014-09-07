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

Run `yo generator-scaledrone`:
```
yo generator-scaledrone
```

## Running

Run the client code:
```
http-server client
```

Run the auth server (if you chose to generate it):
```
node jwt-server/server.js
```

Visit your new application at `http://localhost:8080/`

