const express = require('express');
const app = express();

const cors = require("cors");

const mongoose = require('mongoose');



//connect to db
mongoose.connect(
"mongodb+srv://dbnew:mongodb123@cluster0.3qebj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{ useUnifiedTopology: true, useNewUrlParser: true},
()=>{
    console.log("Database Connected Successfully");
});

// import routes
const listinRoutes = require("./routes/Listing");
const userRoutes = require("./routes/user");


app.use(express.json());
app.use(cors());
//route middleware
app.use("/api/listings", listinRoutes);
app.use("/api/user", userRoutes);

app.listen(4000, () => console.log('server is runnig at port 4000'));