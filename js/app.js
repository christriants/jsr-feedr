/*
  Please add all Javascript code to this file.
*/

// Start the main app logic.

// var fetch = 'node-fetch';
// require([fetch], function(result){
//     fetch = result;
// });
// require([fetch], result => fetch = result);

// var crypto = 'crypto';
// require([crypto], function(result){
//   crypto = result;
// });

// require([crypto], result => crypto = result);

const fetch = require('node-fetch');

const crypto = require('crypto');

const API_SECRET = "HTuRddLgDjCZcnJdo0kvpYY9HOX9RCFA";
const clientId = 8143;
var timestamp = (new Date).getTime();

function generateToken(scope, timestamp) {
    var hmac = crypto.createHmac("md5", API_SECRET);
    var tokenString = API_SECRET + ":" + scope + ":" + timestamp
    hmac.update(tokenString);
    var crypted = hmac.digest("hex");

    return crypted;
};

var apiToken = generateToken('readonly', timestamp);

async function getUpcomingEvents() {
  const getReq = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const upcomingEvents = `https://livestreamapis.com/v3/accounts/12963240/upcoming_events?clientId=${clientId}&token=${apiToken}&timestamp=${timestamp}`
  const res = await fetch(upcomingEvents, getReq);
  const json = await res.json()
  console.log(json)

  const logos = {
    sportsLogo: json.data[0].logo.url,
    newsLogo: json.data[1].logo.url,
    businessLogo: json.data[2].logo.url,
    musicLogo: json.data[3].logo.url
  }

  const descriptions = {
    sportsDescription: json.data[0].description,
    newsDescription: json.data[1].description,
    businessDescription: json.data[2].description,
    musicDescription: json.data[3].description
  }

  const eventName = {
    sportsName: json.data[0].fullName,
    newsName: json.data[1].fullName,
    businessName: json.data[2].fullName,
    musicName: json.data[3].fullName
  }

  const tags = {
    sportsTags: json.data[0].tags,
    newsTags: json.data[1].tags,
    businessTags: json.data[2].tags,
    nusicTags: json.data[3].tags
  }

  const viewerCount = {
    sportsViews: json.data[0].viewerCount,
    newsViews: json.data[1].viewerCount,
    businessViews: json.data[2].viewerCount,
    musicName: json.data[3].viewerCount
  }

  const startTime = {
    sportsStart: json.data[0].startTime,
    newsStart: json.data[1].startTime,
    businessStart: json.data[2].startTime,
    musicName: json.data[3].startTime
  }

  const isLive = {
    sportsIsLive: json.data[0].isLive,
    newsIsLive: json.data[1].isLive,
    businessIsLive: json.data[2].isLive,
    musicIsLive: json.data[3].isLive
  }

  console.log(logos)
};

getUpcomingEvents()



// document.getElementsByClassName(".impressions").innerHTML = 0;

// $('#sports').innerHTML('TEST')

// var sportsSection = document.getElementById('sports')
// sportsSection()



// function changeH6 () {
//   document.getElementById("test").innerText = "Paragraph changed.";
// }
// changeH6()

/* **Feed rules:**

- When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the `#main` container with that of the API. The DOM structure of each article must adhere to the `.article` structure.
- When the user selects an article's title show the `#popUp` overlay. The content of the article must be inserted in the `.container` class inside `#popUp`. Make sure you remove the `.loader` class when toggling the article information in the pop-up.
- Change the link of the "Read more from source" button to that of the respective article.
- When the user selects a source from the dropdown menu on the header, replace the content of the page with articles from the newly selected source. Display the loading pop up when the user first selects the new source, and hide it on success.
- Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.

**Additional UI interaction rules:**

- When the user clicks/taps the search icon, expand the input box. Best approach for this is to toggle the `.active` class for the `#search` container. If the search input box is already expanded tapping the search icon again will close the input. Pressing the "Enter" key should also close the opened input box. _See Stretch Goal 2 for search filtering functionality._
- When the app is first loading and when the user selects to load a new feed from the dropdown, display the `#popUp` container with the `.loader` class. You can toggle the `.hidden` class from the container to display/hide the overlay container.
- Add functionality to hide the pop-up when user selects the "X" button on the pop-up.
- Clicking/tapping the "Feedr" logo will display the main/default feed. */