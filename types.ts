
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

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum WoodType {
  OAK = 'Carvalho',
  WALNUT = 'Nogueira',
  PINE = 'Pinus',
  CEDAR = 'Cedro',
  CHERRY = 'Cerejeira'
}
