const express = require('express')
const secure = require('ssl-express-www')
const PORT = process.env.PORT || 8080;
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const app = express();
app.use(secure)
app.use(morgan('dev'));
app.use(express.static('client'));
app.set("json spaces",2)
__path = process.cwd()


const downloader = require('./server/downloader.js');
const search = require('./server/search.js');
const anime = require('./server/anime.js');
const randomimg = require('./server/randomimage.js');
const nsfw = require('./server/nsfw.js');
const photooxy = require('./server/photooxy.js');
const otakudesu = require('./server/otakudesu.js');
const games = require('./server/games.js');
const primbon = require('./server/primbon.js');
const convert = require('./server/convert.js');
const other = require('./server/other.js');

app.use('/downloader', downloader)
app.use('/search', search)
app.use('/anime', anime)
app.use('/randomimg', randomimg)
app.use('/nsfw', nsfw)
app.use('/photooxy', photooxy)
app.use('/otakudesu', otakudesu)
app.use('/games', games)
app.use('/primbon', primbon)
app.use('/converter', convert)
app.use('/other', other)
app.use('/', main)

app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`)
});
