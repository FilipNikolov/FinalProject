const config = require('../../pkg/config');
require('../../pkg/db');

const express = require('express');
const jwt = require('express-jwt');
const recipe = require('./handlers/recipe');

const api = express();

const cors = require('cors');
api.use(cors({
    origin: ['http://localhost:3000']
}));

api.use(express.json());
api.use(jwt({
    secret: config.get('security').jwt_key,
    algorithms: ['HS256']
}));

api.get('/api/v1/recipes', recipe.getAll);
api.get('/api/v1/recipes/:id', recipe.getSingle);
api.post('/api/v1/recipes', recipe.create);
api.put('/api/v1/recipes/:id', recipe.update);
api.patch('/api/v1/recipes/:id', recipe.updatePartial);
api.delete('/api/v1/recipes/:id', recipe.remove);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
    }
});

api.listen(config.get('services').blog.port, err => {
    if (err) return console.log(err);
    console.log(`Server started on port ${config.get('services').blog.port}`);
});
