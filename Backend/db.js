const mongoose = require("mongoose");
const mongoUri = "mongodb+srv://GoFood:Pass123@cluster0.8bfxkbb.mongodb.net/GoFood?retryWrites=true&w=majority"
const mongoDB = async () => {
    await mongoose.connect(mongoUri,{useNewUrlParser:false}, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("samp");
            fetched_data.find({}).toArray(async function (err, data) {
                const food_category=await mongoose.connection.db.collection("food_category")
                food_category.find({}).toArray(function(err,catData){
                    if (err) console.log(err);
                else {
                    global.samp=data;
                    global.food_category=catData;
                }
                })
                // 
            })
        }
    })
}
module.exports = mongoDB;