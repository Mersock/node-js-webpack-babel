import express from 'express'
const app = express();
import routes  from './src/routes'

let port = 3400

app.listen(port,() => {
    console.log(`server is started and listen on port ${port}`)
})

//request handle by route middleware
app.use('/',routes)