const express = require("express");
const path = require('path');
const { auth } = require('express-openid-connect');

const messages = require("./messages");

const PORT = process.env.PORT || 3001;

const app = express();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'C6iYumuEj3UZgaOywOvykuwdA4n_imJoO-wkKXSPE8D8-gHQsuiSHHbWnNLflBKX',
    baseURL: 'http://localhost:3000',
    clientID: 'ci2TjQRVfu0eGaN3iAQrZSy4Bw2siosa',
    issuerBaseURL: 'https://dev-4zsfzx6frjtbn52k.us.auth0.com'
};

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ statusCode: res.statusCode, message: messages.getText(res.statusCode) });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});