import { MessageEnum } from "../Enum/messageEnum"

export class MessageType {
    header: string = ""
    detail: string = ""
    status: MessageEnum = MessageEnum.Success
    show: boolean = false
}