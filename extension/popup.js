let changeColor = document.getElementById("changeColor");
//Change the color of the button to stored color
chrome.storage.sync.get("buttonColor",({buttonColor}) => {
    changeColor.style.backgroundColor = buttonColor
});
//Change the background color of tab to stored color
changeColor.addEventListener("click", async function (){
    //Display the modal when we click on the button
    let clickModal = document.getElementById("clickModal");
    clickModal.style.display = "block";
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});
function setPageBackgroundColor(){
    var body = document.body;
    //retrieve the stored pageColor in storage, then update the document body backColor
    chrome.storage.sync.get(['pageColor'], (result) => {
        let pC = '#' + result.pageColor;
        body.style.backgroundColor = pC;
    });
}

//When the slider value is changed, change the color of the button
//When the slider value has stopped changing, update the color to the storage
var colorSlider = document.getElementById("colorSlider");
colorSlider.oninput = function (){
    //Change the color of the button directly
    pageColor = parseInt(this.value).toString(16);
    document.getElementById("changeColor").style.backgroundColor = pageColor;
    document.getElementById('clickModal').style.display = "block";
    document.getElementById('clickModal').innerHTML = pageColor;
}

colorSlider.onmouseup = function(){
    pageColor = parseInt(this.value).toString(16);
    chrome.storage.sync.set({pageColor});
} 

//Hide the modal when click on it
document.getElementById('clickModal').onclick = function(){
    document.getElementById('clickModal').style.display = "none";
}
