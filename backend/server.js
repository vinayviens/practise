import express from "express";
import ShowIncidentRoutes from "./routes/showincidentroutes.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/incidents", ShowIncidentRoutes);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
