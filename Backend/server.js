const http=require("http");
const app=require("./app");
const port=process.env.PORT ||3000;

const connectDB=require("./db/db");
const server=http.createServer(app);


connectDB();
app.listen(port , ()=>{
    console.log(`Server is running on port: ${port}`);
});