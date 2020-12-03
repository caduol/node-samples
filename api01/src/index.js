import express from 'express'
import path from 'path'
import mustacheExpress from 'mustache-express'
import getMessage from './getMessage'


const app = express()

const port = 3000

// CONFIG 
    // Template engine
    app.engine('.mustache', mustacheExpress())
    app.set('view engine', 'mustache')
    app.set('views', path.join(__dirname, '/views'))


app
    .get('/', async (req,res)=> {
       
       let data = [
           {name:"bulbasaur",experience: 64},
           {name:"ivysaur",experience: 142},
           {name:"charmander",experience: 62},
           {name:"sandshrew",experience: 60},
           {name:"persian",experience: 158},
           
        ]

        res.render('home/index', {
            data:data
        })
    })

    .get('/about', async (req,res)=>{
        let data = [
            {name:"Jiraya",type:'superhero'},
            {name:"Changeman",type:'superhero'},
            {name:"Flashman",type:'superhero'},
            {name:"Black kamen Rider",type:'superhero'},
            {name:"Kuwago",type:'moster'},
            {name:"Ouwashi",type:'moster'},
            {name:"Oninin Dokusai",type:'enemy'},
            {name:"Kannin Dragon",type:'enemy'},
            {name:"Wandar",type:'enemy'},
            
         ]
 
         res.render('about/index', {
             data:data
         })
    })


app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})