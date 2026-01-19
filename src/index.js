import connectToDatabase from "./db/index.js";
import app from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectToDatabase()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port: ${process.env.PORT}`);
    }) 
})
.catch((error)=>{
    console.log("Failed to connect to database:",error);
    process.exit(1);
});
