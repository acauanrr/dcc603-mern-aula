import "./dotenv.js";
import express from "express";
import cors from "cors";
import registros from "./routes/registros.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/registros", registros);

app.get("/", (req, res) => {
  res.json({ msg: "API Funcionando" });
});

// Startar o Servidor Web
app.listen(PORT, () => {
  console.log(`Servidor Web ok! Ouvindo na porta ${PORT}!`);
});
