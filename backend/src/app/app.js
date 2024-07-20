import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import helmet from "helmet";
import morgan from "morgan";
import { clientRouter } from "../router/client-router.js";
import { generalRouter } from "../router/general-router.js";
// import { managementRouter } from "../router/management-router.js";
// import { salesRouter } from "../router/sales-router.js";
export const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send(`
    <html">
      <head>
        <title>API Status</title>
        <script>
          function updateTime() {
            const date = new Date();
            const idn = new Intl.DateTimeFormat('id-ID', {
              dateStyle: 'full',
              timeStyle: 'long',
              timeZone: 'Asia/Jakarta',
            }).format(date);
            document.getElementById("timestamp").textContent = idn;
          }
          setInterval(updateTime, 1000);
        </script>
      </head>
      <body style="font-family: Arial, sans-serif; background:#999999; color:#000000; text-align: center; width:100%; height:100vh; display:flex; justify-content:center; align-items:center; overflow:hidden;">
        <h1 ">API is running</h1>
        <p ">Status: <strong>success</strong></p>
        <p ">Timestamp: <strong id="timestamp">${new Date().toISOString()}</strong></p>
        <img src="https://firebasestorage.googleapis.com/v0/b/android-7c309.appspot.com/o/111111212121.png?alt=media&token=1dba2219-a414-4758-b4b6-a0fbb2f1b75f" alt="API Image" style="width:100px; height:100px; margin-top: 20px;">
      </body>
    </html>
  `);
});

app.use("/client", clientRouter);
app.use("/general", generalRouter);
// app.use("/management", managementRouter);
// app.use("/sales", salesRouter);
