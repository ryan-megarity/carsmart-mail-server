import { Message, EncodedMessage } from './models';

const create_message = (sender:string, to:string, subject:string, messageText:string):EncodedMessage => {
  /*Create a message for an email.

  Args:
    sender: Email address of the sender.
    to: Email address of the receiver.
    subject: The subject of the email message.
    message_text: The text of the email message.

  Returns:
    An object containing a base64url encoded email object.
  */
  const message:Message = {
    to,
    from: sender,
    subject,
    messageText
  } // MIMEText(message_text)
  
  return {'raw': messageText}//base64.urlsafe_b64encode(message.as_string())}
}