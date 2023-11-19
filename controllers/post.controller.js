const postModel = require("../model/post.model");
const jwt = require('jsonwebtoken')


module.exports.connexion = async (req,res)=>{
    const {name,passeword} = req.body;

    if(!name || !passeword){
        res.status(400).json({message : "remplir tous les chmps"});

    }
    
    const userWithName = await postModel.findOne({name})

    if(userWithName.passeword == passeword){
        const jwToken = jwt.sign(
            {
                user: {
                    id : userWithName.id,
                    name :userWithName.name ,
                    passeword : userWithName.passeword
            },
        },
                "tokensSecret"
    
        );
        res.json({message : "Bonjour"+userWithName.name , token :jwToken} );
    }else{
        res.status(401).json({message : "name or mdp false"})
    }   
}

module.exports.addUser = async (req,res) =>{
    const newUser = new postModel({
        name : req.body.name,
        passeword : req.body.passeword,
        mail : req.body.mail
    });

    try{
        const user = await newUser.save();
        return res.status(201).json(user);
    }catch(err){ 
        return res.status(400).json({message :err})
    }
}
