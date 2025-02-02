/**File for feeds data and getting them */
const FeedParser = require("feedparser");
const fetch = require("node-fetch");
const feed_url = "https://11ty.rocks/feed/";

let req = fetch(feed_url);
const feedparser = new FeedParser(); //[options]

req.then(
  function (res) {
    if (res.status !== 200) {
      throw new Error("Bad status code");
    } else {
      // The response `body` -- res.body -- is a stream
      res.body.pipe(feedparser);
    }
  },
  function (err) {
    // handle any request errors
  }
);

feedparser.on("error", function (error) {
  // always handle errors
});

feedparser.on("readable", function () {
  // This is where the action is!
  var stream = this; // `this` is `feedparser`, which is a stream
  var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  var item;

  while ((item = stream.read())) {
    //console.log(item);
    return item;
  }
});
