document.addEventListener("DOMContentLoaded", function() {
    var browserName = navigator.appName;
    var browserVersion = navigator.appVersion;
    var platform = navigator.platform;
    var userAgent = navigator.userAgent;

    var deviceElement = document.getElementById("device");

    if (deviceElement) {
        deviceElement.innerHTML =
            "<name>Browser Name: </name> " + browserName + "<br><br>" +
            "<version>Browser Version: </version> " + browserVersion + "<br><br>" +
            "<platform>Platform: </platform> " + platform + "<br><br>" +
            "<agent>User Agent: </agent> " + userAgent;
    } else {
        console.error("Error: Element with id 'device' not found.");
    }
});

//////////////////////////////////////////////////////////////////

window.onload = function() {
    const memoryInfoElement = document.getElementById('ram-info');
        if ('deviceMemory' in navigator) {
            const memory = navigator.deviceMemory;
            memoryInfoElement.textContent = `this device has at least ${memory} GB of RAM.`;
            console.log(`this device has at least ${memory}GiB of RAM.`);
    } else {
            memoryInfoElement.textContent = 'The deviceMemory API is not supported in this browser.';
            console.warn('The deviceMemory API is not supported in this browser.');
        }
};