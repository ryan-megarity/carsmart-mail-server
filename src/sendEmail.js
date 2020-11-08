"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_message = function (sender, to, subject, messageText) {
    /*Create a message for an email.
  
    Args:
      sender: Email address of the sender.
      to: Email address of the receiver.
      subject: The subject of the email message.
      message_text: The text of the email message.
  
    Returns:
      An object containing a base64url encoded email object.
    */
    var message = {
        to: to,
        from: sender,
        subject: subject,
        messageText: messageText
    }; // MIMEText(message_text)
    return { 'raw': messageText }; //base64.urlsafe_b64encode(message.as_string())}
};
