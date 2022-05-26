const config = require('../../pkg/config');
require('../../pkg/config');

const express = require('express');
const jwt = require('express-jwt');
const auth = require('./handlers/auth');

const api = express();

api.use(express.json());
api.use(jwt({
    secret: config.get('security').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/v1/auth/login',
        '/api/v1/auth/register',
    ]
}));

api.post('/api/v1/auth/login', auth.login);
api.post('/api/v1/auth/register', auth.register);
api.get('/api/v1/auth/refresh-token', auth.refreshToken);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
    }
});

api.listen(config.get('services').auth.port, err => {
    if (err) return console.log(err);
    console.log(`Server started on port ${config.get('services').auth.port}`)

})