
export enum MembershipLevel {
  TALENT_FREE = 'Talent Free',
  TALENT_SILVER = 'Talent Silver',
  TALENT_PRO = 'Talent Pro',
  TALENT_GOLD = 'Talent Gold',
  AGENCY_PRO = 'Agency Pro',
  STUDIO = 'Studio'
}

export interface DetailedItem {
  label: string;
  detail: string;
}

export interface SupportProgram {
  id: string;
  title: string;
  description: string;
  provide: DetailedItem[];
  output: DetailedItem;
  checklist: DetailedItem[];
  icon: string;
  totalSpots: number;
  acceptedSpots: number;
}

export interface Partner {
  name: string;
  category: string;
  logo: string;
}

export interface NavItem {
  label: string;
  path: string;
}
