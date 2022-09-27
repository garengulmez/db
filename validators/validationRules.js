import validator from "express-validator";
const { body, validationResult } = validator

const validationRules = [
    body("fname")
    .notEmpty().withMessage("Campo obligatorio"),
    body("lname")
    .notEmpty().withMessage("Apellido es un Campo obligatorio"),

    (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formData = req.body
        const arrWarnings = errors.array();
        res.render("form", {arrWarnings, formData})
      } else return next()
    }
   
]

export default validationRules