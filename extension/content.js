//https://stackoverflow.com/questions/8499376/chrome-extension-get-entire-text-content-of-the-current-tab/8499444
alert("Hello");
function getHTML{
    return document.body.outerHTML;
}
console.log(getHTML());

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});

