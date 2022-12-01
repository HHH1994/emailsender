const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path')

const  mailConfig = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
        user: '',
        pass: ''
    }
};

const transporter = nodemailer.createTransport(mailConfig);

const templateStream = fs.createReadStream(path.resolve(__dirname, './template/template1.html'))

var message = {
    from: "",
    to: "",
    subject: "模板1",
    text: "不支持html的客户端，可以看到此信息",
    html: templateStream
};


transporter.sendMail(message).then(info=>{
    console.log(info)
    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
});


