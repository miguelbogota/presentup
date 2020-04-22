export interface IChat {
  id: string;
  ownerId: string;
  createdAt: number;
  count: number;
  messages: IMessage[];
}

export interface IMessage {
  content: string;
  createdAt: number;
  ownerId: string;
}
