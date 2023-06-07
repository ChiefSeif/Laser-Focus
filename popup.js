// Get the start time for the last hour
var lastHour = Date.now() - (60 * 60 * 1000);

// Query the browser history API for the user's browsing history for the last hour
chrome.history.search({ text: '', startTime: lastHour }, function(results) {
  var historyList = document.getElementById('historyList');
  var websiteCount = results.length; // Count the number of websites

  // Display the website count at the top of the popup
  var countElement = document.getElementById('websiteCount');

  var focusScore = Math.round((1 - ((websiteCount - 1) / 30)) * 100);
    if(focusScore < 0) {
      focusScore = 0;
    }

  countElement.textContent = focusScore;

});
