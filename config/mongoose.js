// -------- MongoDB -------- //
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

  
db.on('error',(err) => {
    console.log('MongoDB connection error: ', err);
});

db.once('open', ()=>{
    console.log('Connected to the Database :: MongoDB');
})

module.exports = db;