export interface ITour {
  name: string;
  startDate: Date;
  startLocation: string;
  destination: string;
  type: "adventure" | "relaxation" | "hiking";
  ratting: "Good" | "Average";
  price: number;
  images?: string[] | null;
}
