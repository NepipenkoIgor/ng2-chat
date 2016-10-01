export interface Message {
  owner: {
    avatar: string,
    firstName: string,
    lastName: string,
    availability: string
  };
  text: string;
  date: number;
}
