import express from 'express'
import getMessage from './getMessage'

// const express = require('express')
// const getMessage = require('./getMessage')

const app = express()

const port = 3000

app.get('/', async (req,res)=> {
    res.send({
        message: getMessage()
    })
})


app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})