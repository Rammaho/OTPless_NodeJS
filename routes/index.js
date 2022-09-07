const express = require('express');




const router = express.Router();


const otpLessRoute = require('./otpLess.route');

const defaultRoutes = [

    {
        path: '/otpLess',
        route: otpLessRoute,
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
