const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const destinationRoute = require('./routes/destinationRoute')
const morgan = require('morgan')

const app = express();
dotenv.config();
connectDB();

//middlewares
app.use(express.json())
// app.use("/api/users", userRoute)
app.use("/api/destination", destinationRoute)
app.use(morgan("dev"))



app.get("/", (req, res) => {
    res.send("welcome to our destination portal")
})


const PORT = process.env.PORT || 7000

app.listen(PORT,() =>
       console.log(`server is running on ${PORT}`))