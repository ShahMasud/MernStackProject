const  express =require("express");
const dotenv =require("dotenv");
const connectDB =require("./config/db.js");
const userRoutes =require("./routes/userRoutes");
const bookingRoutes =require("./routes/bookingRoutes");
const pricingRoutes =require("./routes/pricingRoutes");
const contactRoutes =require("./routes/contactRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
      res.send("API is running..");
    });





app.use('/api/users', userRoutes)
app.use('/api/booking', bookingRoutes)
app.use('/api/price', pricingRoutes)
app.use('/api/contact', contactRoutes)

app.use(notFound);
app.use(errorHandler);

// step-3 heruko

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"))
}


const PORT = process.env.PORT || 5000;

app.listen( PORT,console.log("Server running in Port "+PORT));

// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import colors from "colors";
// import path from "path";

// import noteRoutes from "./routes/noteRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// dotenv.config();

// connectDB();

//  // main thing

// app.use(express.json()); // to accept json data

// app.use("/api/notes", noteRoutes);
// app.use("/api/users", userRoutes);

// // --------------------------deployment------------------------------
// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }
// // --------------------------deployment------------------------------

// // Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;


