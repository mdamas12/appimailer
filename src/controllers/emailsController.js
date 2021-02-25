const  transporter  = require("../config/mailer");


module.exports = {

    async send(req,res){

    // send mail with defined transport object
        await transporter.sendMail({
            from: '"MD ORGANIZER" <info@mdprofessionalservice.com>', // sender address
            to: "mdprofessionalorganizer@gmail.com", // list of receivers 
            bcc: "marcosdamas12@gmail.com",
            subject: "Correo de contacto", // Subject line
            text: "Email de contactenos", // plain text body
            html: "<b>Saludos Marlyn Damas, Te han Contactado desde la pagina Web MD Organizer: </b>"+req.body.name+" "+req.body.email+" "+req.body.phone,
        });
       console.log(req.body);
       res.json("Mensaje enviado");
    }

}