const express = require ('express')

const app = express()

const consign = require('consign')

const bodyParser = require('body-parser')

customExpress = () =>{

    //de formularios
    // app.use(bodyParser.urlencoded)

    app.use(bodyParser.json())

    consign()
    .include('controllers')
    .include('models')
    .into(app)

    return app
}


module.exports = customExpress()