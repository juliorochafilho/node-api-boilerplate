import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path:
    process.env.NODE_ENV === "test"
      ? ".env.test"
      : process.env.NODE_ENV === "dev"
      ? ".env.dev"
      : ".env",
});

const app = express();
const port = 3000;

app.listen(port, () => {
  //   if (err) {
  //     return console.error(err);
  //   }
  return console.log(`[API] server is running on ${port} 200`);
});

export default app;
