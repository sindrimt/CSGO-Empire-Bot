chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method == "changePage") {
    console.log("yup");
  }
});
