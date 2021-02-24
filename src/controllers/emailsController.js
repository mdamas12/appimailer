const  transporter  = require("../config/mailer");


module.exports = {

    async send(req,res){

    // send mail with defined transport object
        await transporter.sendMail({
            from: '"MD PROFESSIONAL SERVICES" <marcosdamas12@gmail.com.com>', // sender address
            to: "marcosdamas12@gmail.com", // list of receivers
            subject: "Correo de contacto", // Subject line
            text: "Email de contactenos", // plain text body
            html: "<b>hola que tal este mensaje ha sido enviado correctamente</b>", // html body
        });
       console.log(req.body);
       res.json("Mensaje enviado");
    }

}