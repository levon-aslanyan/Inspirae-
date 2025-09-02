import express from "express";
import userRouter from "./routes/user.route.js";
import pinRouter from "./routes/user.route.js";
import commentRouter from "./routes/user.route.js";
import boardRouter from "./routes/user.route.js";

const app = express();

app.use("/users", userRouter);
app.use("/pins", pinRouter);
app.use("/comments", commentRouter);
app.use("/boards", boardRouter);

app.listen(3000, () => {
  console.log("Server is run");
});
