window.SAWADIKA_CATEGORIES = [
  "Entree",
  "Thai Food",
  "Indian Food",
  "Jap Food",
  "Sushi & Rolls",
  "Box",
  "Dessert",
  "Boissons"
];

window.SAWADIKA_MENU = [
  { id: "tha-1", category: "Thai Food", name: "Pad Thai crevettes", desc: "Nouilles de riz sautees, crevettes, soja, cacahuete.", price: 13.90 },
  { id: "tha-2", category: "Thai Food", name: "Curry vert poulet", desc: "Lait de coco, basilic thai, legumes de saison.", price: 14.50 },
  { id: "ind-1", category: "Indian Food", name: "Boeuf satay", desc: "Boeuf marine, sauce satay maison, riz parfume.", price: 15.00 },
  { id: "ind-2", category: "Indian Food", name: "Poulet croustillant", desc: "Sauce aigre douce, sesame, wok de legumes.", price: 13.50 },
  { id: "jap-1", category: "Jap Food", name: "Plateau sushi mix", desc: "12 pieces chef selection, gingembre et wasabi.", price: 16.90 },
  { id: "jap-2", category: "Jap Food", name: "Donburi saumon", desc: "Riz vinaigre, saumon, avocat, sauce maison.", price: 14.90 },
  { id: "ent-1", category: "Entree", name: "Nems poulet x4", desc: "Nems croustillants servis avec sauce nuoc mam.", price: 6.50 },
  { id: "des-1", category: "Dessert", name: "Mochis assortiment", desc: "Selection de mochis glaces du moment.", price: 5.90 }
];

window.SAWADIKA_EMAIL = "sawadika689@gmail.com";
window.SAWADIKA_CART_KEY = "sawadika_cart";

window.priceEUR = function priceEUR(value) {
  return Number(value).toFixed(2).replace('.', ',') + " EUR";
};
