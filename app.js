const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/**
 * values from environment
 */
const PSKREPORTER_API_URL = process.env.PSKREPORTER_API_URL
  || 'https://retrieve.pskreporter.info/query';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Authorization
/*
app.use('', (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.sendStatus(403);
  }
});
*/

// Proxy endpoints
app.use('/api/pskreporter', createProxyMiddleware({
  target: PSKREPORTER_API_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/api/pskreporter`]: '',
  },
}));

module.exports = app;
