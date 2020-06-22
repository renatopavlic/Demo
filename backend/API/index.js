const express = require('express')
const validator = require("email-validator");

const app = express()
const port = 3001

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=> {
  res.send("radi")

})
app.post('/API/contact', (req, res) => {
  let mailOk = false;
  let messageOk = false;
  if(req.body.email){
    console.log(validator.validate(req.body.email));
    mailOk = true; 
  if(req.body.message.length>30){
    console.log("jel poruka dovoljno duga");
    messageOk = true;
  }
  if(mailOk && messageOk){
    res.status(200).json({message: "Your message has been sent!"})
  } else {
    res.status(422).json({
      mailOk:mailOk,
      messageOk: messageOk
    })
  }
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))