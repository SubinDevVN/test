function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const message = getParameterByName('msg');

if (message) {
    document.getElementById('message').innerText = `Message received: ${message}`;
} else {
    document.getElementById('message').innerText = 'No message provided';
}
