import express from "express";
import authRoutes from "./routes/auth"

const app = express();

app.get("./", (req, res) => {
    res.send("Hello");
});

app.listen(8080, () => {
    console.log("Listening on port 8080...");
});
