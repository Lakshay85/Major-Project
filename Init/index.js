const mongoose= require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then(()=>{
    console.log(`connected to db`);
    })
    .catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


const initDb = async()=>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj)=>({...obj,owner:'66cc65d3d06018f2db3b02a3'}));
    await Listing.insertMany(initData.data);  
    console.log(`data was initialize`);
};

initDb();