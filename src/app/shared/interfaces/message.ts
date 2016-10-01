export interface Message {
  owner: {
    avatar: string,
    firstName: string,
    lastName: string,
    status: string
  };
  text: string;
  date: number;
}
