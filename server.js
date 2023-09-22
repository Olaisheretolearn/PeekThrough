const express = require('express');
const request = require('request'); // Importing the request module
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;
// Before your routes or app.listen
app.use(express.static('public'));


app.use('/proxy', (req, res) => {
    const originalUrl = req.query.url;
    const googleCacheUrl = `http://webcache.googleusercontent.com/search?q=cache:${originalUrl}`;

    request({url: googleCacheUrl}, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).send("Failed to fetch the content.");
        }
        const $ = cheerio.load(body);
        $('script').remove(); // Remove all script tags
        res.send($.html());
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


