import hbs from "express-handlebars";
import express from "express";

const PORT = 3000;
const app = express();
import router from "./routes/form.js"

//variables globales
app.locals.sendMailFeedback

//express hbs config
app.engine(".hbs", hbs.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));
//habilitamos lectura de datos del body de la request
app.use(express.urlencoded({extended: true}))


app.listen(PORT, (err) => {
    !err ? console.log("Ok") : console.log("Error");
})
app.get("/", (req, res) => {
    res.render("home")
})
app.use("/form", router)

