const nodemail = require('nodemailer');
// var sender = nodemail.createTransport({
//     service:'gmail',
//     auth:{
//         user:'adtracker6@gmail.com',
//         pass:'ad-tracker1706'
//     }
// })
module.exports.getemail=function(params)
{
var composemail = {
    from:'adtracker6@gmail.com',
    to:params,
    subject:`this is travel from ${params} `,
    text:'YOUR TICKET WAS COFIRMED'
    
}
// sender.sendMail(composemail,function(err,res){
//     if(err)
//     {
//         console.log("Mail not sent",err);
//     }
//     else{
//         console.log("Mail  sent",res);
//     }
// })
}