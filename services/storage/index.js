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

// api.use(jwt({
//     algorithms: ['HS256'],
//     secret: config.get('security').jwt_key,
// }).unless({
//     path: [
//         '/api/v1/storage/:filename',

//     ]
// }));

api.use(fileUpload());
api.post('/api/v1/storage/uploadavatar', storage.uploadAvatar)
api.post('/api/v1/storage', storage.upload);
api.get('/api/v1/storage/:filename', storage.download);
api.delete('/api/v1/storage/:filename', storage.remove);




api.listen(config.get('services').storage.port, err => {
    if (err) return console.log(err);
    console.log(`Server started on port ${config.get('services').storage.port}`);
});
