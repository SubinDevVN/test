// Function to get URL parameters
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the message parameter from URL
const message = getParameterByName('msg');

// Display the message in the HTML
if (message) {
    document.getElementById('message').innerText = `Message received: ${message}`;
} else {
    document.getElementById('message').innerText = 'No message provided';
}
