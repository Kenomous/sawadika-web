window.SAWADIKA_MENU = [
  { id: "tha-1", category: "Thai", name: "Pad Thai crevettes", desc: "Nouilles de riz sautees, crevettes, soja, cacahuete.", price: 13.90 },
  { id: "tha-2", category: "Thai", name: "Curry vert poulet", desc: "Lait de coco, basilic thai, legumes de saison.", price: 14.50 },
  { id: "chi-1", category: "Chine", name: "Boeuf satay", desc: "Boeuf marine, sauce satay maison, riz parfume.", price: 15.00 },
  { id: "chi-2", category: "Chine", name: "Poulet croustillant", desc: "Sauce aigre douce, sesame, wok de legumes.", price: 13.50 },
  { id: "jap-1", category: "Japon", name: "Plateau sushi mix", desc: "12 pieces chef selection, gingembre et wasabi.", price: 16.90 },
  { id: "jap-2", category: "Japon", name: "Donburi saumon", desc: "Riz vinaigre, saumon, avocat, sauce maison.", price: 14.90 },
  { id: "ent-1", category: "Entrees", name: "Nems poulet x4", desc: "Nems croustillants servis avec sauce nuoc mam.", price: 6.50 },
  { id: "des-1", category: "Desserts", name: "Mochis assortiment", desc: "Selection de mochis glaces du moment.", price: 5.90 }
];

window.SAWADIKA_EMAIL = "sawadika689@gmail.com";
window.SAWADIKA_CART_KEY = "sawadika_cart";

window.priceEUR = function priceEUR(value) {
  return Number(value).toFixed(2).replace('.', ',') + " EUR";
};
