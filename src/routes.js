import {RequestHandlerService} from './services/RequestHandlerService'
const express = require('express')
const router = express.Router();

router.all('/*', function(req,res,next){
    console.log(`This will be applied to all routes`);
    next();
})

router.get('/', async (req,res) => {
    let message = await RequestHandlerService.handleHttpRequest(req.method, req.path)

    res.status(200).json({
        "message": message
    })
})

router.get("/products", (request, response)=> {

    response.status(200).json({
        "message": "HTTP " + request.method + " Request with URL Pattern " + request.path
    });
});


router.get("/products/:id", (request, response)=> {

    response.status(200).json({
        "message": "HTTP " + request.method + " Request with URL Pattern " + request.path
    });
});


router.post("/products", (request, response)=> {

    response.status(200).json({
        "message": "HTTP " + request.method + " Request with URL Pattern " + request.path
    });
});

export default router