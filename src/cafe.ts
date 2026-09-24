import { MenuItem, ComboDeal, OrderLine, KitchenTicket, AllergyCard } from "./menuTypes";

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
  course: "dessert", // fixed typo: was "desert"
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

function describe(item: MenuItem) {
  return `${item.name} (${item.course}) - EUR ${item.price.toFixed(2)}`;
}

function lineTotal(line: OrderLine) {
  // narrow the union: only ComboDeal has 'items'
  if ("items" in line) {
    return line.price;
  }
  return line.price;
}

function orderTotal(lines: OrderLine[]) {
  return lines.reduce((total, line) => total + lineTotal(line), 0);
}

function filterMenu(items: MenuItem[], predicate: (item: MenuItem) => boolean) {
  return items.filter(predicate);
}

function cheapest(items: MenuItem[], max?: number) {
  const sorted = items.sort((a, b) => a.price - b.price);
  return sorted.slice(0, max);
}

// generic - works for any array
function firstMatch<T>(data: T[], criteria: (d: T) => boolean): T | undefined {
  return data.find(criteria);
}

function updateItem(item: MenuItem, changes: Partial<MenuItem>) {
  return { ...item, ...changes };
}

function kitchenTicket(item: MenuItem): KitchenTicket {
  return { name: item.name, course: item.course };
}

function allergyCard(item: MenuItem): AllergyCard {
  return {
    id: item.id,
    name: item.name,
    course: item.course,
    price: item.price,
    warning: `Contains: ${item.nutrition.allergens.join(", ")}`,
  };
}
