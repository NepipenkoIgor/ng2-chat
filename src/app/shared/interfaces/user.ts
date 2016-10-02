export interface User {
  id: number,
  avatarUrl: string;
  availability: 'offline' | 'online' | 'busy' | 'off';
  firstName: string;
  lastName: string;
  status: string;
}
