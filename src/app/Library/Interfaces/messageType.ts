import { MessageEnum } from "../Enums/messageEnum";

export class MessageType {
  header: string = '';
  detail: string = '';
  status: MessageEnum = MessageEnum.Success;
  show: boolean = false;
}
