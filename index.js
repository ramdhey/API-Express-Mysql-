import express from "express"
import cors from "cors"
import FileUpload from "express-fileupload";
import UserRoute from "./routes/UserRoute.js"


const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(UserRoute);


app.listen(5000,()=>console.log('Server Sudah Berjalan')); 