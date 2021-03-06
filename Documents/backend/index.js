"use strict";
let express  = require("express");
let bodyParser = require('body-parser');


// let cors = require('cors');

let userSchema = require('./schema/userDetail');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/signup',function(req,res){
    console.log(req.body);
    let user = new userSchema({
        'email_id':req.body.email,
        'password':req.body.password
        
    });
    
    user.save(function(err , result){
        console.log('result')
        if(err){
            res.json({status:400 , data : 'err'});
        }
        else{
            console.log(result)
        res.json({status:200 , data : 'data saved'});
    }
});

})
app.get('/login',function(req,res){
    console.log('hlw');
    console.log(req.query);
    userSchema.find({'email_id':req.query.email , 'password':req.query.password}).exec(function(err , result){
        console.log(result);
        if(err){
            res.json({status:400 , data : err});
        }
        if(result.length == 0){
            res.json({status:404 , data : 'not fount'});
        }else{
            console.log(result);
            res.json({status:200 , data : result});
        }
       
    });
    
})
app.get('/allusers',function(req,res){
    
    userSchema.find({}).exec(function(err , result){
        console.log(result);
        if(err){
            res.json({status:400 , data : err});
        }
        if(result.length == 0){
            res.json({status:404 , data : 'not fount'});
        }else{
            console.log(result);
            res.json({status:200 , data : result});
        }
       
    });
    
})
app.post('/deleteuser',function(req,res){   
    userSchema.findByIdAndRemove({_id : req.body.id}).exec(function(err , result){
        console.log(result);
        if(err){
            res.json({status:400 , data : err});
        }
       else{
            res.json({status:200 , data : 'data sucessfully removed'});
        }     
    });  
})







app.listen(4002);
