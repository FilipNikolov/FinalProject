const path = require('path');
const proxy = require('express-http-proxy');
const express = require('express');
const config = require('../../pkg/config');

const app = express();

app.use(
    '/api/v1/auth',
    proxy(
        'http://127.0.0.1:10001',
        { proxyReqPathResolver: (req) => `http://127.0.0.1:10001/api/v1/auth${req.url}` }
    )
);
// app.use(
//     '/api/v1/blog',
//     proxy(
//         'http://127.0.0.1:10002',
//         { proxyReqPathResolve: (req) => `http://127.0.0.1:10001/api/v1/blog${req.url}` }
//     )
// );
// app.use(
//     '',
//     proxy(
//         'http://localhost:10003',
//         { proxyReqPathResolve: (req) => `http://localhost:10001////${req.url}` }
//     )
// );

app.use(
    '/',
    proxy(
        'http://127.0.0.1:10001',
        { proxyReqPathResolver: (req) => `http://127.0.0.1:10001${req.url}` }
    )
);

// app.use('/', express.static(path.join(__dirname, '/../../web/build')));
const PORT = process.env.PORT || config.get('services').proxy.port;

console.log('Proxy starting port', PORT);

app.listen(PORT, err => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server started on port ${PORT}`)
})
