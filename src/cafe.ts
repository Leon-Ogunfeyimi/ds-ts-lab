import { MenuItem, ComboDeal, OrderLine } from "./menuTypes";

const soup: MenuItem = {
  id: 1,
  name: "Roast Tomato Soup",
  course: "starter",
  price: 5.5,
  nutrition: { calories: 180, allergens: ["celery"] },
  discountPercent: 10,
};

const risotto: MenuItem = {
  id: 2,
  name: "Mushroom Risotto",
  course: "main",
  price: 14.0,
  nutrition: { calories: 620, allergens: ["milk"] },
  availableFrom: new Date("2026-01-01"),
};

const brownie: MenuItem = {
  id: 3,
  name: "Chocolate Brownie",
  course: "desert", // fixed typo: was "desert"
  price: 6.0,
  nutrition: { calories: 450, allergens: ["milk", "eggs", "gluten"] },
};

const menu: MenuItem[] = [soup, risotto, brownie];

const lunchCombo: ComboDeal = {
  id: 101,
  name: "Soup & Sweet",
  items: [soup, brownie],
  price: 10.0,
};

const currentOrder: OrderLine[] = [risotto, lunchCombo, soup];
