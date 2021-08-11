var contextMenus = {};

contextMenus.createBettingBot = chrome.contextMenus.create(
  { title: "betting" },
  function () {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);

chrome.contextMenus.onClicked.addListener(contextMenuHandeler);

function contextMenuHandeler(info, tab) {
  if (info.menuItemId === contextMenus.createBettingBot) {
    chrome.tabs.executeScript({
      file: "js/bettingBotNew.js",
    });
  }
}
