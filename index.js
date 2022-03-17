const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const employeesHandler = require("./routeHandler/employeesHandler");
const announcementHandler = require("./routeHandler/announcementHandler");
const attendanceHandler = require("./routeHandler/attendanceHandler");
const AddCourseHandler = require("./routeHandler/AddCourseHandler");
const leaveHandler = require("./routeHandler/leaveHandler");
const holidayHandler = require("./routeHandler/holidayHandler");
const taskHandler = require("./routeHandler/taskAssignHandler");
const fileUpload = require("express-fileupload");
const enrollHandler = require("./routeHandler/enrollHandler");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.o0i8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "hr-care",

    })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

// application routes
app.use("/employees", employeesHandler);
app.use("/announcement", announcementHandler);
app.use("/attendance", attendanceHandler);
app.use("/courses", AddCourseHandler);
app.use("/leave", leaveHandler);
app.use("/holidays", holidayHandler);
app.use("/taskAssign", taskHandler);
app.use("/enrolls", enrollHandler);


// default error handler
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
};

app.use(errorHandler);
// app.put("/",async (req,res)=>{
//     console.log("send data")
// })

app.get("/", (req, res) => {
    res.send("HR Care Server Running....");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
