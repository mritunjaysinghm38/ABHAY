import express from "express";
import mongoose, { connect } from "mongoose";
import bodyParser from 'express';
import userRouter from './Routes/user.js'
import productRouter from'./Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import cors from 'cors';
const app = express();


app.use(bodyParser.json());
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
// home testin route
app.get('/', (req, res) => res.json({ message: 'This is home route ' }));
// user router
app.use('/api/user',userRouter);
//product router
app.use('/api/product',productRouter)

//cart router
app.use('/api/cart',cartRouter)

// address router
app.use('/api/address',addressRouter)


mongoose.connect("mongodb+srv://mritunjaysinghm38:Xa8eeyYetkoaP4I4@cluster0.hy6074p.mongodb.net/", {
    dbName: "mern_edb"
}
).then(() => console.log("mongoDB is connected successfully..!")).catch((err) => console.log(err));






const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`))
// Xa8eeyYetkoaP4I4