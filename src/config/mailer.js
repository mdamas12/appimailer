
//const nodemailer = require('nodemailer');
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'marcosdamas12@gmail.com',
        pass: 'ldvskwwmdxlckdxk',
    },

});

transporter.verify().then(()=>{
    console.log("ready send email");
});

module.exports = transporter;