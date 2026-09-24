export interface Nutrition {
  calories: number;
  allergens: string[];
}

// Literal type - food course, the values can only be these three
export type Course = "starter" | "main" | "dessert";

export interface MenuItem {
  id: number;
  name: string;
  course: Course;
  price: number;
  nutrition: Nutrition;
  discountPercent?: number;
  availableFrom?: Date; 
}

export interface ComboDeal {
  id: number;
  name: string;
  items: MenuItem[];
  price: number;
}

// An order line is either a single item or a combo
export type OrderLine = MenuItem | ComboDeal;

// Fixed, name + course only
export type KitchenTicket = Readonly<Pick<MenuItem, "name" | "course">>;

// MenuItem without nutrition, plus a warning
export type AllergyCard = Omit<MenuItem, "nutrition"> & {
  warning: string;
};