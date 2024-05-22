// public/script.js
document.getElementById('generateKey').addEventListener('click', async () => {
    const response = await fetch('https://subindevvn.github.io/test/random'); // Thay 'your-server-url' bằng URL của máy chủ
    const data = await response.json();
    document.getElementById('keyContainer').innerText = JSON.stringify(data, null, 2);
});
