export interface Message{
  text: string;
  messageType: MessageType;
}



export enum MessageType{
  MyMessage, HisMessage,
}