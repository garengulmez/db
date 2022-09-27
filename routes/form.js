// archivo separado con el controlador

import express from "express"
const router = express.Router()
// import validationRules from "../config/validationRules.js"
//import de dos objetos, body y validationResult, de express validator
import validationRules from "../validators/validationRules.js";
import validator from "express-validator";
const { body, validationResult } = validator



import transport from "../config/nodemailer.js";

router.get("/", (req, res) => {
    res.render("form")
})

router.post("/", validationRules, async (req, res) => {

    const {fname, lname, email} = req.body;
    const Emailmsg = {
        to:"garen2447@gmail.com",
        from: email,
        subject:"Formulario de contacto",
        html:`Hola ${fname} ${lname}`
    }
  
  const sendMailstatus = await transport.sendMail(Emailmsg);
  if (sendMailstatus.rejected.length) {
    req.app.locals.sendMailFeedback = "No se pudo enviar";
  } else {
    req.app.locals.sendMailFeedback = "Enviado";
  }
  res.redirect("/")
  }
)

export default router