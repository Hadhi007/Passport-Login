const express =require('express')
const app =express()
const bcrypt =require('bcrypt')
 
 const users = []
app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/',function(req,res){

    res.render('index.ejs',{name:'Hadhi'})

})
app.get('/login', function(req,res){ 

    res.render('login.ejs')

})
app.get('/register', function(req,res){

    res.render('register.ejs')

})
app.post('/register',async function(req,res){ 

try {

const hashedPassword= await bcrypt.hash(req.body.password, 10)

users.push({
    id :Date.now().toString(),
    name: req.body.name,
    email :req.body.email,
    password : hashedPassword
})
res.redirect('/login')

} 
catch(Exception) {

    res.redirect('/register')

}
console.log(users)
})

app.post('/login', function(req,res){

    
})
app.listen(4000)    