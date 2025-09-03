import { MessageEnum } from "../Enums/messageEnum";

export class MessageType {
  header: string = '';
  detail: string = '';
  status: any = MessageEnum.Success || 'success';
  show: boolean = false;
}
