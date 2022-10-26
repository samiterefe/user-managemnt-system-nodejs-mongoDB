const mongoose  = require('mongoose')

const connectDB = async ()=>{
 try {
  const conn = await mongoose.connect(process.env.connString,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
                
             
            })
         console.log('Connected successfully')
}catch(err){
 console.log('err ', err)
}

}

module.exports = connectDB
