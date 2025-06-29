document.addEventListener("DOMContentLoaded", function() {
    var lang = navigator.languages;
    var browserVersion = navigator.appVersion;
    var platform = navigator.platform;
    var userAgent = navigator.userAgent;
    const memory = navigator.deviceMemory;
    var core = navigator.hardwareConcurrency;
    var touch = navigator.maxTouchPoints;
    var pdf = navigator.pdfViewerEnabled;
    var vendor = navigator.vendor;

    var deviceElement = document.getElementById("device");

    if (deviceElement) {
        deviceElement.innerHTML =
            "<langs>Languages: </langs>" + lang + "<br>" +
            "<platform>Platform: </platform>" + platform + "<br>" +
            "<version>Browser version: </version>" + browserVersion + "<br>" +
            "<agent>User agent: </agent>" + userAgent + "<br>" +
            "<ram>Device RAM: </ram>" + memory + " GB <br>" +
            "<cores>Logical processor: </cores>" + core + " cores<br>" +
            "<touchs>Multi-touch: </touchs>" + touch + "<br>" +
            "<pdf>PDF reader: </pdf>" + pdf + "<br>" +
            "<vendor>Vendor: </vendor>" + vendor + "<br>";
    } else {
        console.error("Error: Element with id 'device' not found.");
    }
});


// window.onload = function() {
//     const memoryInfoElement = document.getElementById('ram-info');
//         if ('deviceMemory' in navigator) {
//             const memory = navigator.deviceMemory;
//             memoryInfoElement.textContent = `this device has at least ${memory} GB of RAM.`;
//             console.log(`this device has at least ${memory}GiB of RAM.`);
//     } else {
//             memoryInfoElement.textContent = 'The deviceMemory API is not supported in this browser.';
//             console.warn('The deviceMemory API is not supported in this browser.');
//         }
// };