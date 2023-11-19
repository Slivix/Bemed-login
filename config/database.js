const  mongoose  = require('mongoose');
mongoose.set("strictQuery",true);

mongoose.connect("mongodb+srv://adelsaadi2nd9:test@bemed.a5fzoie.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => console.log("Connecter"))
.catch((err)=> console.log("Rater pas connecter"));