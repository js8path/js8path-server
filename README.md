# @js8path/js8path-server
Server for js8path reports and app

## project setup

 - clone @js8path/js8path-server
 - install js8path-server
 - download and extract @js8path/js8path-client 
 - run js8path-server

example:
```
cd <base directory>
git clone https://github.com/js8path/js8path-server.git
<git checkout specific branch>
cd ./js8path-server
npm run get-client
```

## running server
```
npm run start
```

 - This will start the server on port 3000
   - to use other port, set env var PORT
 - js8path app will be at http://localhost:3000/js8path-client

## implementation notes

Proxy server implementation based on https://www.twilio.com/blog/node-js-proxy-server


