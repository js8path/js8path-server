# @js8path/js8path-server
Server for js8path reports and app

## project setup

 - do ```npm install``` on @js8path/js8path-server
 - check out and build @js8path/js8path-vue 
 - copy @js8path/js8path-vue/dist/ contents into @js8path/js8path-server/public/js8path-vue

## running server
```
npm run start
```

 - This will start the server on port 3000
   - to use other port, set env var PORT
 - js8path app will be at http://localhost:3000/js8path-vue

## implementation notes

Proxy server implementation based on https://www.twilio.com/blog/node-js-proxy-server


