export type Activity = {
  id: string;
  title: string;
  date: Date;
  description?: string;
  location: string;
  type: 'pickup' | 'training' | 'camp';
  participants: string[];
  status: 'active' | 'inactive';
};
