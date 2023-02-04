import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usersRoutes from "./routes/users.js";
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());

app.use("/", usersRoutes);
app.get("/", (req, res) => res.send("hello world"));
app.all("*", (req, res) => res.send("This route is not exist"));

app.listen(port, () => {
	console.log(`server is running on ${port}`);
});
