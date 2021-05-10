# @js8path/js8path-server
Server for js8path reports and app.

@js8path/js8path-server v1.0.2 is compatible with 
 - @js8path/js8path-client v1.0.2

## project setup

 - clone @js8path/js8path-server
 - install js8path-server
 - download and extract @js8path/js8path-client 
 - run js8path-server

example:
```
cd <base directory>
git clone https://github.com/js8path/js8path-server.git
cd ./js8path-server
<git checkout specific branch>
npm install
npm run get-client
```

Be sure to update the get-client version in package-json when versions are bumped.

## running server
```
npm run start
```

 - This will start the server on port 3000
   - to use other port, set env var PORT
 - js8path app will be at http://localhost:3000/js8path-client

## implementation notes

Proxy server implementation based on https://www.twilio.com/blog/node-js-proxy-server


