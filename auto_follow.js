function onFormSubmit(e){
  // Retrieve values depending what their index is in the array
  //Logger.log("e:  " + JSON.stringify(e));
  var email = e.namedValues["Email Address"]
  var name = e.namedValues["Name"]
  var message = "Hey " + name + ",\n"
   + "Thank you so much for showing your interest in the workshop on Git & GitHub by EA & HAM Club NITW.\n"
   + "Timings: Sunday, 3PM, 28th Feb\n"
   + "WebEx meet Link: \n"
   + "We request you to be on time.\n"
   + "Do follow us on our social media handles for more updates.\n"
   + "facebook: http://bit.ly/ea-ham-fb\n"
   + "Instagram: http://bit.ly/ea-ham-insta\n"
   + "YouTube: http://bit.ly/ea-ham-yt\n"
   + "LinkedIn: http://bit.ly/ea-ham-linkedin\n"
   + "Twitter: http://bit.ly/ea-ham-twitter\n"
   + "See you there,\n"
   + "EA & HAM Club NIT Warangal"

var recipient = email
var subject = "You are succefully registered for Git & GitHub workshop!"
// Option 1 -  Send from your gmail account
// GmailApp.sendEmail(recipient, subject, message)
// Option 2 - Send email from an alternative address
GmailApp.sendEmail(recipient, subject, message, {bcc: "", htmlBody: "", from: "eaham.nitw@gmail.com"})
}
