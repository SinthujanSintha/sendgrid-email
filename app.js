const sgMail = require('@sendgrid/mail');

const API_KEY = "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";

sgMail.setApiKey(API_KEY);

const message = {
// to:'sinthujanspp@gmail.com',
to:['sinthujanspp@gmail.com','sinthujan@ceylonsolutions.com'],
// from:'sinthujan@ceylonsolutions.com',
from:{
name:'SinthuCS',
email:'sinthujan@ceylonsolutions.com'
},
subject:'Sendgrid test mail sending',
text:'Hello this is simple to check send grid email facilty',
html:'<h1> Hello how ar u! </h1>'
};

sgMail
.send(message)
.then(response => console.log("Email has been sent:"))
.catch(error => console.log(error.message));
