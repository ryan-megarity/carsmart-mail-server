interface Message {
  to: string;
  from: string;
  subject: string;
  messageText: string;
};

interface EncodedMessage {
  raw: string;
};


export {
  Message,
  EncodedMessage
};