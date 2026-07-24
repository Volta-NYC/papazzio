import { images } from "@/lib/content"

export type SpecialPage = {
  ctaHref?: string
  ctaLabel?: string
  details: string[]
  eyebrow: string
  image: string
  note?: string
  sections: {
    items: string[]
    title: string
  }[]
  slug: string
  subtitle: string
  title: string
}

export const specialPages = [
  {
    slug: "martini-monday",
    eyebrow: "Un brindisi al lunedi",
    title: "Martini Monday",
    subtitle: "Who says Mondays have to be ordinary?",
    image: images.martiniMonday,
    details: ["Every Monday • All Day", "One complimentary House Vodka or Gin Martini with any entree", "Simple. Classic. Italian."],
    sections: [
      {
        title: "The Offer",
        items: [
          "Join the Papazzio family every Monday and let us toast to the start of a beautiful week.",
          "Order any entree and enjoy a complimentary house vodka or gin martini, our gift to you.",
          "Come for the martini. Stay for homemade flavors, warm hospitality, and the feeling of dining with family."
        ]
      },
      {
        title: "Details",
        items: ["Every Monday • All Day", "One complimentary House Vodka or Gin Martini with any entree.", "Salute to a delicious week ahead!"]
      }
    ]
  },
  {
    slug: "pasta-tuesday",
    eyebrow: "A Tavola",
    title: "Pasta Tuesday",
    subtitle: "In Italy, pasta is not just dinner. It is a reason to gather.",
    image: images.pastaTuesday,
    details: ["Every Tuesday • All Day", "Any Pasta • House Salad • House Glass of Wine", "$32.95"],
    note: "Fradiavolo pasta is not included. Dine-in only. Cannot be combined with any other offer, promotion, or holiday special.",
    sections: [
      {
        title: "The Offer",
        items: [
          "Every Tuesday, slow down, pour a glass of wine, and enjoy one of life's simplest pleasures.",
          "Choose any pasta from the menu, accompanied by a crisp house salad and a glass of house wine.",
          "Fresh ingredients. Traditional recipes. Warm hospitality."
        ]
      },
      {
        title: "Details",
        items: ["Every Tuesday • All Day", "Any Pasta • House Salad • House Glass of Wine • $32.95", "Just like Sunday dinner at Nonna's, only on a Tuesday."]
      }
    ]
  },
  {
    slug: "winesday",
    eyebrow: "Wednesday",
    title: "WINEsday",
    subtitle: "50% off all wine bottles or BYOW with no cork fee.",
    image: images.winesday,
    details: ["Wednesday", "50% off all Wine Bottles", "OR BYOW - No Cork Fee - Bring your Own Wine", "Valid with one entree - no other promos"],
    ctaHref: "/wine-menu",
    ctaLabel: "View Wine Menu",
    sections: [
      {
        title: "Offer",
        items: ["50% off all Wine Bottles", "BYOW - No Cork Fee - Bring your Own Wine"]
      },
      {
        title: "Restriction",
        items: ["Valid with one entree.", "No other promos."]
      }
    ]
  },
  {
    slug: "thursday-prix-fixe",
    eyebrow: "Thursdays",
    title: "Thursday Prix Fixe / Date Night",
    subtitle: "La Dolce Notte - Thursday Prix Fixe for $79 per couple.",
    image: images.dolceNotte,
    details: ["Great Food. Great Company. Beautiful Nights.", "Thursdays Only.", "$79 / Couple"],
    ctaHref: "/seasonal-menu",
    ctaLabel: "View Seasonal Menu",
    sections: [
      {
        title: "Antipasti - Choose One",
        items: ["Insalata Caesar Classica GF", "Pomodoro e Mozzarella GF", "Polpette della Casa GF", "Burrata con Prosciutto GF"]
      },
      {
        title: "Secondi - Choose One",
        items: [
          "Pollo alla Milanese GF",
          "Pollo alla Francese al Limone GF",
          "Pollo Balsamico GF",
          "Linguini al Limone con Gamberetti GF",
          "Penne Estive con Pollo GF",
          "Insalata di Salmone alla Griglia GF",
          "Pesce del Giorno All'Oreganata GF",
          "Risotto de Mare"
        ]
      },
      {
        title: "Dolci - Choose One",
        items: ["Tiramisu Clasico GF", "Cheesecake Della Casa GF", "Torta Mousse Oreo al Cioccolato GF", "Gelato or Sorbetto"]
      }
    ]
  },
  {
    slug: "sunday-steak-night",
    eyebrow: "Sunday",
    title: "Sunday Steak Night",
    subtitle: "Sunday Steak Special for $79.",
    image: images.steak,
    details: ["$79", "12 oz. Ribeye & Shrimp Scampi", "Select one side from menu", "Personal Promotion", "If sharing, a $10 charge applies"],
    sections: [
      {
        title: "Choose an Appetizer",
        items: ["Mozzarella in Carrozza", "Meatballs Marinara or Vodka Sauce", "House or Caesar Salad", "Sliced Tomato & Mozzarella"]
      },
      {
        title: "Main Dish",
        items: ["12 oz. Ribeye", "Shrimp Scampi", "Select one side from menu"]
      },
      {
        title: "Choose a Dessert",
        items: ["Home-made Cheesecake", "Tiramisu", "Vanilla Ice Cream or Lemon Sorbet"]
      }
    ]
  },
  {
    slug: "happy-hour",
    eyebrow: "Weekdays 4-7 PM",
    title: "Happy Hour",
    subtitle: "50% off all wine and beer with a $10 Happy Hour menu.",
    image: images.happyHour,
    details: ["50% off all Wine and Beer.", "Weekdays 4-7 PM.", "Holidays Excluded.", "Bar Area Only"],
    ctaHref: "/happy-hour-menu",
    ctaLabel: "View Happy Hour Menu",
    sections: [
      {
        title: "$10 Happy Hour Menu",
        items: [
          "Arancini Carbonara",
          "Formaggio",
          "Shrimp Scampi Slider",
          "Pollo Spiedini Amalfi",
          "Limoncello Fire Ribs",
          "Risotto Amalfitano",
          "Calabrian Honey Polpette",
          "Mediterranean Shrimp",
          "Pizzette e Burrata",
          "Lobster Ravioli Bites"
        ]
      }
    ]
  },
  {
    slug: "takeout-specials",
    eyebrow: "Takeout",
    title: "Takeout Specials",
    subtitle: "La Cena da Asporto and Weekdays Family Meal.",
    image: images.takeout,
    details: ["La Cena da Asporto is takeout only.", "Weekdays Family Meal is $75 for 4-5 portions.", "Family Meal is Monday, Tuesday & Wednesday for take out or delivery."],
    sections: [
      {
        title: "La Cena da Asporto",
        items: [
          "Choose one appetizer to share: House Salad, Caesar Salad, Fried Mozzarella, or Meatballs in Vodka Sauce",
          "Choose two entrees including Chicken Parmigiana, Chicken Francese, Penne Vodka with Chicken, Rigatoni Bolognese, Linguine & Meatballs, Eggplant Parmigiana, Linguine Garlic & Oil, or Fettuccine Alfredo with Shrimp (+$6 upgrade)",
          "Homemade dessert options: Tiramisu, Cannoli, or Cheesecake +$5 each",
          "375ml sealed bottle options: Prosecco, Rose, Sauvignon Blanc, or Cabernet Sauvignon +$20"
        ]
      },
      {
        title: "Weekdays Family Meal",
        items: [
          "Choose an appetizer: House or Caesar Salad, Sliced Tomato & Mozzarella, Sauteed Vegetables, or Mashed Potatoes",
          "Choose a pasta: Penne alla Vodka, Penne Marinara, Linguine with Garlic & Oil, Rigatoni Fileto Pomodoro, or Fettucine Alfredo",
          "Choose an entree: Chicken Marsala, Chicken Francese, Chicken Parmesan, Chicken Picatta, or Sausage & Peppers",
          "Swap Chicken for Veal or Salmon for +$15",
          "Holidays excluded. No combining offer."
        ]
      }
    ]
  },
  {
    slug: "live-music",
    eyebrow: "Events",
    title: "Live Music Schedule",
    subtitle: "A dedicated page for Papazzio's live music schedule.",
    image: images.diningRoom,
    details: ["Current Papazzio website content does not publish live music dates or performers.", "Call Papazzio for the current live music schedule."],
    note: "This page is ready for published dates once Papazzio provides them.",
    sections: [
      {
        title: "Current Details",
        items: ["Featured option requested for the Specials section.", "Call 718-229-1962 for the current schedule."]
      }
    ]
  }
] satisfies SpecialPage[]

export function getSpecialPage(slug: string) {
  return specialPages.find((page) => page.slug === slug)
}
