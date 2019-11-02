import express from 'express'
import routes  from './src/routes'

const app = express();

let port = 3000

app.listen(port,() => {
    console.log(`server is started and listen on port ${port}`)
})

//request handle by route middleware
app.use('/',routes)