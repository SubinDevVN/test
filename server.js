const express = require('express');
const app = express();
const port = 3000;

// Hàm tạo chuỗi ngẫu nhiên
function generateRandomKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Đường dẫn /random trả về key ngẫu nhiên
app.get('/random', (req, res) => {
    const randomKey = generateRandomKey(15);
    res.json({ key: randomKey });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
