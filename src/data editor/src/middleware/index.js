/* This is a [low-key] middleware for our webpack transpiler. */

const PORT = 3010 || process.env.PORT;
const express = require('express');
const api_fallback = require('connect-history-api-fallback');
const app = express();

app.use(api_fallback({
  verbose:true
})); //Used for whenever routes are needed for access.

app.use(express.static('dist') ); // for such right here

app.listen(PORT, () =>{
  console.log(
      `Client-side host listening on port ${PORT}.\n`
  )
})
