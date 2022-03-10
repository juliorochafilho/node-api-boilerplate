import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  //   if (err) {
  //     return console.error(err);
  //   }
  return console.log(`[API] server is running on ${port} 200`);
});

export default app
