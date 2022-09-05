const express = require("express");
const employeeRouter = require("./routes/employee");
const app = express();
app.use(express.json())
app.use("/employees", employeeRouter);
app.server = app.listen(3001, () => {
    console.log("Server running on port 3001...");
});