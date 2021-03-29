let buttonColor = "#7FFFFF"
let pageColor = "#7FFFFF"

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({buttonColor : pageColor});
    chrome.storage.sync.set({pageColor : pageColor});
    console.log('Default background color set to ', `color: ${pageColor}`);
})




