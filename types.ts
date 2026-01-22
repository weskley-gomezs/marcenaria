
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export enum WoodType {
  OAK = 'Carvalho',
  WALNUT = 'Nogueira',
  PINE = 'Pinus',
  CEDAR = 'Cedro',
  CHERRY = 'Cerejeira'
}

// Added ChatMessage interface to fix the import error in AIConsultant.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
