export interface User {
  avatarUrl: string;
  availability: 'offline' | 'online' | 'busy' | 'off';
  firstName: string;
  lastName: string;
  status: string;
}
