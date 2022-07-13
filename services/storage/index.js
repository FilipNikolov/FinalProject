const config = require('../../pkg/config');
const express = require('express');
const jwt = require('express-jwt');
const fileUpload = require('express-fileupload');
const storage = require('./handlers/storage');
const cors = require('cors');
const path = require('path');

const api = express();

api.use(cors({
    origin: ['http://localhost:3000']
}));

var dir = path.join(__dirname, 'uploads');
api.use(express.static(dir));

api.use(jwt({
    algorithms: ['HS256'],
    secret: config.get('security').jwt_key,
}).unless({
    path: [
        '/api/v1/storage/:filename',
        // '/api/v1/liststorage'
    ]
}));

api.use(fileUpload());

api.post('/api/v1/storage', storage.upload);
// api.get('/api/v1/liststorage', storage.readfiles)
api.post('/api/v1/storage/avatar', storage.uploadAvatar);
api.get('/api/v1/storage/:filename', storage.download);
api.delete('/api/v1/storage/:filename', storage.remove);
// api.get('/api/v1/storagetest', storage.test);



api.listen(config.get('services').storage.port, err => {
    if (err) return console.log(err);
    console.log(`Server started on port ${config.get('services').storage.port}`);
});
