import dotenv from 'dotenv';
import http from 'http';
import querystring from 'querystring';

import got from 'got';

dotenv.config();

const server = http.createServer(async (req, res) => {
  const queryParams = querystring.parse(req.url.slice(req.url.indexOf('?') + 1));

  // The api already sends back JSON - DO NOT STRINGIFY!
  const { body } = await got(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${queryParams.query}&page=1&include_adult=false`,
  );
  res.setHeader('Content-Type', 'text/json');
  res.setHeader('Access-Control-Allow-Origin', 'localhost');
  res.end(body);
});

server.listen(5000);
