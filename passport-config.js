const LocalStrategy= require ('passport-local').Strategy
const bcrypt= require('bcrypt') 


function initialize(passport,getUserByEmail){
    function authenticateUser(email,passport,done){
    const user= getUserByEmail(email)
    if(user == null){
        return done(null ,false,{ message: 'no user with that email'})
    }
        try{
        if(await bcrypt.compare(password,user.password)){
         return done(null,user)
        } else{
            return done(null,false,{message:'password incorrect'})
        }
        }
        catch(err){
        return done(err)
        }
    }
passport.use(new LocalStrategy({usernameField:'email'}),
authenticateUser)
passport.serializeUser( function(user,done){   })
passport.deserializeUser( function(user,done){   })
}
module.exports =initialize