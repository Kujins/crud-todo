const express =require("express");
const cors=require("cors");
const app =express();
require("dotenv").config();
app.use(express.json());
app.use(cors({origin:process.env.FRONTEND_URL}))

const routes = require("./routes");
app.use("/api",routes);
const port =5000;


const connectDB = require("./connectDB");

const startServer = async () =>{
    await connectDB();
    app.listen(port,()=> {
        console.log(`Server is listening on port ${port}`)
    })
}

startServer();