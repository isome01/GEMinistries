/* This is a [low-key] middleware for our webpack transpiler. */

const PORT = process.env.PORT || 80;
const express = require('express');
const api_fallback = require('connect-history-api-fallback');
const path = require('path');
const app = express();

app.use(api_fallback({
  verbose:true
})); //Used for whenever routes are needed for access.


app.use(express.static('dist') ); // for such right here 

/*
app.get('*', (req, res) => {
  res.sendFile( path.resolve(__dirname, 'index.html'));
});*/

app.listen(PORT, () =>{
  console.log(
      `Client-side host listening on port ${PORT}.\n`
  );
})