document.getElementById('popupBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  chrome.runtime.sendMessage({ action: "openPopup", url: url });
});

document.getElementById('newTabBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  chrome.runtime.sendMessage({ action: "openNewTab", url: url });
});

document.getElementById('currentTabBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  chrome.runtime.sendMessage({ action: "openCurrentTab", url: url });
});
