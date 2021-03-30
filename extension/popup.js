//Want to scrape the first 100 results and get the top 5
numRankedBooks = 100;

//Get the top data from content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("Received a request", request);
    }
);



//Grab the current url of the tab
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;

})
