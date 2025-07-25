chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { action, url } = message;

  if (action === "openPopup") {
    chrome.windows.create({
      url: url,
      type: "popup",
      width: 900,
      height: 600,
      top: 100,
      left: 100,
      focused: true
    });
  }

  else if (action === "openNewTab") {
    chrome.tabs.create({ url: url, active: true });
  }

  else if (action === "openCurrentTab") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.update(tabs[0].id, { url: url });
    });
  }
});
