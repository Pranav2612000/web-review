const webReview = require("./index");
webReview.exec([
  {
    url: "https://www.facebook.com/",
    resolution: ["480x320", "1024x768", "1024x768", "1280x1024"],
  },
  {
    url: "https://www.github.com",
    resolution: ["480x320", "1024x768", "1280x1024", "1920x1080"],
  },
]);
