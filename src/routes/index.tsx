"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { toast } from "sonner";
import { NoshLoader } from "@/components/NoshLoader";
import heroCoffee from "@/assets/hero-coffee.jpg"
import menuSpread from "@/assets/menu-spread.jpg";
import burger from "@/assets/burger.jpg";
import pasta from "@/assets/pasta.jpg";
import smoothie from "@/assets/smoothie.jpg";
import chicken from "@/assets/chicken.jpg";
import beans from "@/assets/beans.jpg";

const fakeSubmit = () => new Promise((resolve) => window.setTimeout(resolve, 450));

const WHATSAPP_NUMBER = "919096515432"; // 90965 15432
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Nosh! I'd like to reserve a table.")}`;
const PHONE_LINK = "tel:+919096515432";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Franchise", href: "#franchise" },
  { label: "Visit", href: "#contact" },
];

// Full menu — categorized
const menu: { category: string; items: { name: string; price?: string; note?: string }[] }[] = [
  {
    category: "Bruschetta & Toasties",
    items: [
      { name: "Avocado Toast", price: "₹179" },
      { name: "Baked Beans on Toast", price: "₹179" },
      { name: "Cheese Chilli Toast", price: "₹199" },
      { name: "Creamy Mushroom Toast", price: "₹199" },
      { name: "Creamy Paneer Toast", price: "₹199" },
      { name: "Creamy Chicken Toast", price: "₹229" },
      { name: "Chicken Kheema Bruschetta", price: "₹249" },
      { name: "Tomato & Basil Bruschetta", price: "₹199" },
    ],
  },
  {
    category: "All-Day Breakfast",
    items: [
      { name: "Continental Breakfast", price: "₹299", note: "Toast, choice of egg, baked beans, brownie, americano" },
      { name: "Masala Omelette", price: "₹159" },
      { name: "Mushroom Omelette", price: "₹159" },
      { name: "Chicken Cheese Omelette", price: "₹189" },
      { name: "Moongdal Omelette", price: "₹169" },
      { name: "Veg French Toast", price: "₹199" },
      { name: "Paneer Nourish Bowl", price: "₹229", note: "Grilled paneer, avocado, salad" },
      { name: "Chicken Nourish Bowl", price: "₹259" },
    ],
  },
  {
    category: "Hot Beverages",
    items: [
      { name: "Espresso", price: "₹99" },
      { name: "Americano", price: "₹109" },
      { name: "Cappuccino", price: "₹159" },
      { name: "Cafe Latte", price: "₹159" },
      { name: "Mocha", price: "₹169" },
      { name: "Hot Chocolate w/ Marshmallow", price: "₹199" },
      { name: "Nutella Hot Chocolate", price: "₹189" },
      { name: "Ginger Honey Lemon Tea", price: "₹109" },
      { name: "Masala Chai", price: "₹89" },
    ],
  },
  {
    category: "Cold & Frappe",
    items: [
      { name: "Vanilla / Chocolate Frappe", price: "₹179" },
      { name: "Strawberry / Blueberry Frappe", price: "₹189" },
      { name: "Oreo / Kitkat / Choco-Oreo Frappe", price: "₹219" },
      { name: "Classic Cold Coffee", price: "₹149" },
      { name: "Hazelnut Affogato Iced Latte", price: "₹199" },
      { name: "Flavoured Iced Tea", price: "₹159" },
      { name: "Fresh Lime Water / Soda", price: "₹99" },
      { name: "Iced Coconut Water", price: "₹139" },
    ],
  },
  {
    category: "Fresh Juice & Shakes",
    items: [
      { name: "Watermelon Juice", price: "₹149" },
      { name: "Watermelon Beetroot", price: "₹199" },
      { name: "ABC (Apple Beetroot Carrot)", price: "₹199" },
      { name: "Avocado Shake", price: "₹229" },
      { name: "Banana Oats Smoothie", price: "₹199" },
      { name: "Dragon Fruit Banana Smoothie", price: "₹229" },
      { name: "Mango Smoothie", price: "₹199" },
    ],
  },
  {
    category: "Quick Bites",
    items: [
      { name: "French Fries (Plain / BBQ / Peri-Peri)", price: "₹149/169" },
      { name: "Cheesy Loaded Salsa Fries", price: "₹219" },
      { name: "Chicken Loaded Cheesy Fries", price: "₹259" },
      { name: "Loaded Nachos", price: "₹219", note: "Cheese, salsa, beans, olives, jalapeño" },
      { name: "Chicken Loaded Nachos", price: "₹269" },
      { name: "Cheese Garlic Bread", price: "₹169" },
      { name: "Cheese Corn Mushroom Roll", price: "₹179" },
      { name: "Mushroom Masala Roll", price: "₹179" },
      { name: "Chicken Roll (tandoori/bbq/pesto/butter)", price: "₹199" },
      { name: "Chicken Omelette Roll", price: "₹219" },
    ],
  },
  {
    category: "Appetizers",
    items: [
      { name: "BBQ / Peri Peri Paneer Sticks", price: "₹249" },
      { name: "Butter Garlic Mushroom", price: "₹229" },
      { name: "Paneer Chilli", price: "₹249" },
      { name: "Chicken Chilli", price: "₹279" },
      { name: "Hot Garlic Paneer", price: "₹249" },
      { name: "Crispy Chicken Honey Paprika", price: "₹289" },
      { name: "Fire Cracker Sausage", price: "₹279" },
      { name: "Peri Peri Chicken Chips", price: "₹259" },
      { name: "Chicken Strips & Fries", price: "₹279" },
    ],
  },
  {
    category: "Sandwiches & Burgers",
    items: [
      { name: "Bombay Sandwich", price: "₹199" },
      { name: "Spinach Corn Cheese", price: "₹219" },
      { name: "Magic Mushroom Sandwich", price: "₹229" },
      { name: "Paneer Sandwich (4 sauces)", price: "₹229" },
      { name: "Chicken Sandwich (4 sauces)", price: "₹249" },
      { name: "BLT Bacon Sandwich", price: "₹279" },
      { name: "Chicken Club Sandwich", price: "₹289" },
      { name: "Chipotle Chicken Avocado Melt", price: "₹299" },
      { name: "Classic Veg Burger", price: "₹179" },
      { name: "Crispy Paneer Burger", price: "₹199" },
      { name: "Classic Chicken Burger", price: "₹229" },
      { name: "Roast Chicken Burger", price: "₹259" },
      { name: "Chicken Kheema Burger", price: "₹249" },
    ],
  },
  {
    category: "Pizzas (10\" thin crust)",
    items: [
      { name: "Classic — Double Cheese Margherita / Corn Cheese", price: "₹249" },
      { name: "Signature Veg — Farmhouse / Magic Mushroom / Jalapeño & Paprika", price: "₹299" },
      { name: "Roast Garlic Onion Pizza", price: "₹279" },
      { name: "Paneer Pizza (Tikka/Tandoori/BBQ/Pesto/Makhani)", price: "₹319" },
      { name: "Chicken Pizza (Tikka/Tandoori/BBQ/Peri Peri/Pesto)", price: "₹349" },
      { name: "Triple Dominator — Bacon / Sausage / Chicken", price: "₹399" },
      { name: "Meaty Overload — Chicken, Bacon & Sausage", price: "₹429" },
    ],
  },
  {
    category: "Pastas, Lasagne & Rice",
    items: [
      { name: "3 Cheese Pasta (Penne/Spaghetti)", price: "₹299", note: "Cream cheese, parmesan, smoked cheddar" },
      { name: "Pasta — Alfredo / Arrabbiata / Pesto / Pink / Aglio Olio", price: "₹279" },
      { name: "Veg Lasagne", price: "₹319" },
      { name: "Chicken Lasagne", price: "₹359" },
      { name: "Thai Red Curry Rice (Veg/Chicken)", price: "₹279/319" },
      { name: "Thai Green Curry Rice (Veg/Chicken)", price: "₹279/319" },
      { name: "Aromatic Ghee Khichdi", price: "₹269" },
    ],
  },
  {
    category: "Mains & Nosh Meals",
    items: [
      { name: "Grilled Paneer Rice & Veggies", price: "₹319", note: "Lemon garlic / BBQ / peri peri / mushroom sauce" },
      { name: "Grilled Chicken Rice & Veggies", price: "₹349" },
      { name: "Paneer Ala Kiev", price: "₹329" },
      { name: "Chicken Parmigiana", price: "₹389" },
      { name: "Italian Stuffed Chicken", price: "₹399" },
    ],
  },
  {
    category: "Salads & Soups",
    items: [
      { name: "Caesar Salad", price: "₹229" },
      { name: "Cottage Cheese Salad", price: "₹229" },
      { name: "Tangy Chicken Salad", price: "₹259" },
      { name: "Watermelon Rocket Feta", price: "₹219" },
      { name: "Mixed Beans & Quinoa Salad", price: "₹239" },
      { name: "Tomato & Basil Soup", price: "₹189" },
      { name: "Cream of Broccoli", price: "₹189" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Brownie with Ice Cream", price: "₹179" },
      { name: "Nutella Pancakes (stack of 3)", price: "₹249", note: "Maple syrup, vanilla ice-cream" },
      { name: "Classic Pancakes", price: "₹199" },
    ],
  },
];

const reviews = [
  { name: "Tina Varma", stars: 5, text: "Cozy atmosphere, friendly staff and the coffee is genuinely delicious. My new favourite corner in Aundh." },
  { name: "Sofi", stars: 5, text: "Beautiful presentation, generous portions, and the sauces — unreal. Came for coffee, stayed for hours." },
  { name: "Lalit", stars: 5, text: "Yummy food, warm service. The kheema bruschetta is a quiet masterpiece. Will keep coming back." },
];

const blogs = [
  { title: "The Art of Coffee Cupping", excerpt: "How professional tasting reshapes the way we sip our daily cup." },
  { title: "Bean to Cup: Our Sourcing Story", excerpt: "From small Western Ghats farms to your morning ritual — how we choose every bean." },
  { title: "Brewing Techniques, Demystified", excerpt: "Pour-over, French press, espresso — practical tips from our baristas." },
];

// ---------------- Components ----------------

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`font-display text-2xl font-bold tracking-[0.2em] ${className}`}>
      NOSH<span className="text-accent">.</span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/70 transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank" rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Reserve on WhatsApp
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          <div className="space-y-1.5"><span className="block h-px w-6 bg-current" /><span className="block h-px w-6 bg-current" /></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background px-6 py-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-widest">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-4 block rounded-full bg-primary px-5 py-3 text-center text-xs uppercase tracking-widest text-primary-foreground">
            Reserve on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* Top eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="mx-auto max-w-7xl px-6 pt-10 md:px-12"
      >
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.45em] text-muted-foreground">
          <span className="h-px w-10 bg-accent" /> Aundh · Pune · Open daily 9:30 AM — 11:30 PM
        </span>
      </motion.div>

      {/* Image + giant NOSH wordmark */}
      <div className="relative mx-auto mt-6 grid max-w-7xl grid-cols-12 items-center gap-6 px-6 md:px-12 lg:gap-8">
        {/* Image left, slightly tilted */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          style={{ y }}
          className="col-span-12 md:col-span-7 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl md:aspect-auto md:h-[min(62vh,640px)]">
            <img src={heroCoffee.src} alt="A latte with delicate art on a wooden table inside Nosh Cafe" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="absolute left-6 right-6 top-6 rounded-2xl bg-background/85 px-5 py-4 backdrop-blur-md"
            >
              <p className="font-display text-lg italic">"Pune's quietest little obsession."</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Pune Food Diaries</p>
            </motion.div>
          </div>
        </motion.div>

        {/* NOSH wordmark right side */}
        <div className="col-span-12 md:col-span-5 relative">
          <motion.h1
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
            className="font-display whitespace-nowrap font-black leading-[0.78] text-foreground"
            style={{ fontSize: "clamp(4.5rem, 9vw, 10rem)" }}
          >
            {"NOSH".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-2 flex items-center gap-3"
          >
            <span className="h-px flex-1 bg-foreground/20" />
            <span className="font-display italic text-2xl md:text-3xl text-accent">cafe & kitchen</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 max-w-md font-display text-2xl md:text-3xl leading-snug"
          >
            Small-batch coffee. <em className="text-accent">Loud</em> flavours.<br />
            All-day breakfasts that linger.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="mt-4 max-w-md text-sm text-muted-foreground"
          >
            Tucked inside Chaitraban Residency, Aundh — pour-overs by morning, wood-fired pizzas by night.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#menu" className="rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-accent">
              View the menu
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-xs uppercase tracking-[0.25em] transition hover:border-foreground hover:bg-foreground hover:text-background">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> WhatsApp to reserve
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        style={{ opacity }}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-3 gap-4 border-t border-foreground/10 px-6 pt-10 md:px-12"
      >
        {[
          { k: "6+", v: "Years brewing" },
          { k: "60+", v: "Plates on offer" },
          { k: "4.8★", v: "Guest rating" },
        ].map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
          >
            <div className="font-display text-4xl md:text-5xl">{s.k}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Marquee */}
      <div className="mt-16 border-y border-border bg-primary py-6 text-primary-foreground">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-display text-xl md:text-2xl">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-12">
              {["Pour Over", "Espresso", "Pesto Paneer", "Mango Shake", "Alfredo Pasta", "Cheese Burger", "Peri Peri Wings", "Cold Brew", "Wood-Fired Pizza"].map((w) => (
                <span key={w} className="flex items-center gap-12 italic">{w}<span className="not-italic text-accent">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl animate-float">
            <img src={beans.src} alt="Coffee beans being poured" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary px-7 py-5 text-primary-foreground md:block">
            <div className="font-display text-3xl">Brewed in<br />Aundh</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.3em] opacity-70">Cafe & Kitchen</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-accent">About Nosh</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
            More than a cafe.<br /><em className="text-accent">A feeling.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tucked inside Chaitraban Residency in Aundh, Nosh is the kind of place where the music is just right,
            the light is golden and someone always remembers your order. We roast small, plate honestly, and pour with intention.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {["Single-origin beans", "Made-to-order kitchen", "Vegetarian friendly", "Pet-welcoming patio", "Wood-fired pizzas", "All-day breakfast"].map((f) => (
              <li key={f} className="flex items-center gap-3 border-l-2 border-accent pl-3">{f}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Menu() {
  const featured = [
    { name: "Herbed Chicken Steak", desc: "Pan-seared, fresh herbs, signature jus.", img: chicken.src, tag: "Signature" },
    { name: "Melting Cheese Burger", desc: "Smash patty, three-cheese melt, brioche.", img: burger.src, tag: "Bestseller" },
    { name: "Alfredo Pasta", desc: "Slow-cooked cream, parmesan, cracked pepper.", img: pasta.src, tag: "Classic" },
    { name: "Mango Smoothie", desc: "Alphonso pulp, hand-churned, garden mint.", img: smoothie.src, tag: "Fresh" },
  ];

  return (
    <section id="menu" className="bg-secondary px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-accent">Cafe & Kitchen</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">The full menu.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">From all-day breakfast and pour-overs to wood-fired pizzas and signature mains.</p>
        </motion.div>

        {/* Featured highlights */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl bg-background"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={item.img} alt={item.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">{item.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Full categorized menu */}
        <div className="mt-20 rounded-[2rem] bg-primary p-8 text-primary-foreground md:p-14">
          <div className="grid gap-12 md:grid-cols-2">
            {menu.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: (ci % 2) * 0.1 }}
              >
                <h3 className="font-display text-2xl md:text-3xl text-accent">{cat.category}</h3>
                <div className="mt-5 space-y-3">
                  {cat.items.map((it) => (
                    <div key={it.name} className="border-b border-primary-foreground/10 pb-3">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm md:text-base">{it.name}</span>
                        {it.price && <span className="font-display text-base text-accent">{it.price}</span>}
                      </div>
                      {it.note && <p className="mt-1 text-xs opacity-60">{it.note}</p>}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] opacity-60">
            Add-ons: cheese ₹50 · mushroom ₹60 · paneer ₹70 · chicken ₹80 · bacon ₹100 · sausage ₹100
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-accent">
            Reserve a Table on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="px-6 py-28 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mx-auto max-w-7xl text-center"
      >
        <span className="text-[11px] uppercase tracking-[0.4em] text-accent">Loved by guests</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl">Kind words. Warm tables.</h2>
      </motion.div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <div className="text-accent">{"★".repeat(r.stars)}</div>
            <blockquote className="mt-4 font-display text-2xl italic leading-snug">"{r.text}"</blockquote>
            <figcaption className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">— {r.name}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function Franchise() {
  const [busy, setBusy] = useState(false);

  return (
    <section id="franchise" className="relative bg-secondary px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-[11px] uppercase tracking-[0.4em] text-accent">Franchise with Nosh</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
            Bring Nosh to<br /><em className="text-accent">your city.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            We're partnering with passionate operators who share our love for slow brews and bold plates.
            Tell us a bit about you — we'll be in touch.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "End-to-end setup support",
              "Trained kitchen & barista teams",
              "Marketing playbook",
              "Supply chain & sourcing",
            ].map((x) => (
              <li key={x} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{x}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Prefer email? Write to <a href="mailto:vaidyaayush19@gmail.com" className="underline underline-offset-4 hover:text-accent">vaidyaayush19@gmail.com</a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const payload = {
              name: String(fd.get("name") || ""),
              email: String(fd.get("email") || ""),
              phone: String(fd.get("phone") || ""),
              city: String(fd.get("city") || ""),
              business_background: String(fd.get("business_background") || ""),
              investment_range: String(fd.get("investment_range") || ""),
              message: String(fd.get("message") || ""),
            };
            setBusy(true);
            try {
              console.info("Local franchise inquiry preview", payload);
              await fakeSubmit();
              toast.success("Inquiry captured locally. Supabase is disabled for this preview.");
              (e.target as HTMLFormElement).reset();
            } catch (err) {
              toast.error("Something went wrong. Please try again or email us.");
              console.error(err);
            } finally {
              setBusy(false);
            }
          }}
          className="rounded-[2rem] bg-background p-8 md:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone / WhatsApp" name="phone" required />
            <Field label="City" name="city" required />
            <Field label="Investment range (₹)" name="investment_range" placeholder="e.g. 25–40 lakh" wide />
            <Field label="Business background" name="business_background" placeholder="Briefly — your experience in F&B / retail" textarea wide />
            <Field label="Anything else?" name="message" textarea wide />
          </div>
          <button
            disabled={busy}
            className="mt-8 w-full rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-accent disabled:opacity-60"
          >
            {busy ? "Sending..." : "Submit franchise inquiry"}
          </button>
          <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
            Goes straight to the founders' inbox
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea, wide,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean; wide?: boolean }) {
  const cls = "mt-2 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-accent focus:bg-background";
  return (
    <label className={`block ${wide ? "md:col-span-2" : ""}`}>
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={3} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

function Blog() {
  return (
    <section id="blog" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-[11px] uppercase tracking-[0.4em] text-accent">Journal</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">From the kitchen counter.</h2>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <div className="text-[10px] uppercase tracking-widest opacity-60">21 May, 2026 · Admin</div>
              <h3 className="mt-4 font-display text-3xl">{b.title}</h3>
              <p className="mt-4 text-sm opacity-80">{b.excerpt}</p>
              <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest">Read more <span className="transition-transform group-hover:translate-x-1">→</span></div>
              <div className="mt-6 text-6xl font-display opacity-10">0{i + 1}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [busy, setBusy] = useState(false);
  const hours = ["Mon – Sun", "9:30 AM — 11:30 PM"];
  return (
    <section id="contact" className="bg-primary px-6 py-28 text-primary-foreground md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <span className="text-[11px] uppercase tracking-[0.4em] text-accent">Visit us</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">Come in,<br /> stay a while.</h2>
          <div className="mt-10 space-y-6 text-base">
            <Detail title="Address" body={<>Shop 127/2, Chaitraban Residency,<br />Opp. Gold's Gym, Sarjaa Road,<br />Aundh, Pune, Maharashtra 411067</>} />
            <Detail title="Reserve / WhatsApp" body={<>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="block hover:text-accent">+91 90965 15432 (WhatsApp)</a>
              <a href={PHONE_LINK} className="block hover:text-accent">+91 90965 15432 (Call)</a>
            </>} />
            <Detail title="Email" body={<a href="mailto:info@noshcafe.com" className="hover:text-accent">info@noshcafe.com</a>} />
            <Detail title="Hours" body={<>{hours[0]}<br />{hours[1]}</>} />
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            setBusy(true);
            try {
              const payload = {
                name: String(fd.get("name") || ""),
                email: String(fd.get("email") || ""),
                phone: String(fd.get("phone") || ""),
                message: String(fd.get("message") || ""),
              };
              console.info("Local contact message preview", payload);
              await fakeSubmit();
              toast.success("Message captured locally. Supabase is disabled for this preview.");
              (e.target as HTMLFormElement).reset();
            } catch {
              toast.error("Couldn't send. Please WhatsApp us instead.");
            } finally { setBusy(false); }
          }}
          className="rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5 p-8 md:p-10 backdrop-blur-sm"
        >
          <h3 className="font-display text-3xl">Drop us a message</h3>
          <p className="mt-2 text-sm opacity-70">For events, catering or just to say hi.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <DarkField label="Name" name="name" required />
            <DarkField label="Email" name="email" type="email" required />
            <DarkField label="Phone" name="phone" wide />
            <DarkField label="Message" name="message" textarea required wide />
          </div>
          <button disabled={busy} className="mt-6 w-full rounded-full bg-accent px-6 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground transition hover:bg-background hover:text-primary disabled:opacity-60">
            {busy ? "Sending..." : "Send message"}
          </button>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-3 block text-center text-[11px] uppercase tracking-widest opacity-70 hover:opacity-100">
            or reserve a table instantly on WhatsApp →
          </a>
        </motion.form>
      </div>
    </section>
  );
}

function Detail({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">{title}</div>
      <div className="mt-1">{body}</div>
    </div>
  );
}

function DarkField({ label, name, type = "text", required, textarea, wide }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean; wide?: boolean }) {
  const cls = "mt-2 w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-accent";
  return (
    <label className={`block ${wide ? "md:col-span-2" : ""}`}>
      <span className="text-[10px] uppercase tracking-[0.25em] opacity-70">{label}{required && " *"}</span>
      {textarea ? <textarea name={name} required={required} rows={4} className={cls} /> : <input name={name} type={type} required={required} className={cls} />}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <Logo className="text-foreground" />
        <p>© 2026 Nosh Cafe. Brewed with love in Aundh.</p>
        <div className="flex gap-6">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a>
          <a href="#franchise" className="hover:text-foreground">Franchise</a>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoshLoader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Franchise />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
