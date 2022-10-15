import connectDB from "../config/connectDB";

let testConnectDB = async (req, res) => {
    let connectSuccess = await connectDB();
    if(connectSuccess){
        return res.send("Connect to the database");
    }
    else{
        return res.send("Unable to connect to the database")
    }
}

module.exports = {
    testConnectDB
}