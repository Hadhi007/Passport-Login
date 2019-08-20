const express =require('express')
const app =express()
 

app.set('view-engine','ejs')


app.get('/',function(req,res){
    res.render('index.ejs',{name:'Hadhi'})
})
app.get('/login', function(req,res){
    res.render('login.ejs')
})
app.get('/register', function(req,res){
    res.render('register.ejs')
})
app.post('/register', function(req,res){

    
})
app.listen(3000)    