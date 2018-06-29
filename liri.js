require("dotenv").config();

var keys = require("./keys");


var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log("artists: " + data.tracks.items[0].artists[0].name);
    console.log("album: " + data.tracks.items[0].album.name);
    console.log("Track: " + data.tracks.items[0].name);
    console.log("URL: " + data.tracks.items[0].external_urls.spotify);
});