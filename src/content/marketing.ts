import type { Locale } from "@/lib/locale"

export type MarketingCopy = {
  hero: {
    title: string
    eyebrow: string
    tagline: string
    description: string
    cta: {
      primary: { label: string; href: string }
      secondary: { label: string; href: string }
    }
    image: string
  }
  story: {
    eyebrow: string
    title: string
    body: string
  }
  features: {
    eyebrow: string
    title: string
    items: string[]
  }
  threeD: {
    eyebrow: string
    title: string
    body: string
    video: string
    image: string
  }
  useCases: {
    eyebrow: string
    title: string
    body: string
    items: string[]
  }
  workWithUs: {
    eyebrow: string
    title: string
    items: { title: string; body: string }[]
  }
  gallery: {
    eyebrow: string
    empty: string
    items: string[]
  }
  cta: {
    eyebrow: string
    title: string
  }
}

const marketingCopy: Record<Locale, MarketingCopy> = {
  en: {
    hero: {
      title: "iiode Re27",
      eyebrow: "Lighting made conscious",
      tagline: "Light better, live better.",
      description:
        "A serviceable LED bulb that combines natural light quality, smart control, and recycled materials.",
      cta: {
        primary: { label: "Preorder", href: "/preorder" },
        secondary: { label: "Collaborations", href: "/collaborations" },
      },
      image: "/assets/Re27/images/hero/Re27-Pola.jpg",
    },
    story: {
      eyebrow: "Story",
      title: "Walk with us.",
      body: "A better LED bulb is our first step toward a brighter future for lighting.",
    },
    features: {
      eyebrow: "Features",
      title: "Light better, live better.",
      items: [
        "Natural light quality with high CRI",
        "Flicker-free, high quality dimming",
        "Serviceable, modular construction",
      ],
    },
    threeD: {
      eyebrow: "3D View",
      title: "Exploded view, made tangible.",
      body: "The interactive model will reveal every component once optimized.",
      video: "/assets/Re27/images/gallery/Re27_AI%20rotation.mp4",
      image: "/assets/Re27/images/gallery/Re27-Parts.jpg",
    },
    useCases: {
      eyebrow: "Use cases",
      title: "One bulb for every environment.",
      body: "Use case placeholder for homes, hospitality, retail, and work spaces.",
      items: ["Home", "Hospitality", "Retail", "Work spaces", "Galleries"],
    },
    workWithUs: {
      eyebrow: "Partnerships",
      title: "Work with us.",
      items: [
        {
          title: "Manufacturers",
          body: "Integrate advanced features while simplifying maintenance.",
        },
        {
          title: "Retailers",
          body: "Offer Re27 as a sustainable replacement bulb.",
        },
        {
          title: "Designers and architects",
          body: "Augment projects with Re27-enhanced lighting solutions.",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      empty: "Gallery placeholders will be added with assets.",
      items: [
        "/assets/Re27/images/gallery/Re27-Black.jpg",
        "/assets/Re27/images/gallery/Re27-Bleu.jpg",
        "/assets/Re27/images/gallery/Re27-Pola.jpg",
      ],
    },
    cta: {
      eyebrow: "Make the switch.",
      title: "Ready to light better?",
    },
  },
  fr: {
    hero: {
      title: "iiode Re27",
      eyebrow: "Eclairage conscient",
      tagline: "Mieux illuminer, mieux vivre.",
      description:
        "Une ampoule LED reparable qui combine la qualite de la lumiere naturelle, le controle intelligent et des materiaux recycles.",
      cta: {
        primary: { label: "Precommande", href: "/preorder" },
        secondary: { label: "Collaborations", href: "/collaborations" },
      },
      image: "/assets/Re27/images/hero/Re27-Pola.jpg",
    },
    story: {
      eyebrow: "Histoire",
      title: "Avancez avec nous.",
      body: "Une meilleure ampoule LED est notre premier pas vers un avenir plus lumineux.",
    },
    features: {
      eyebrow: "Fonctionnalites",
      title: "Mieux illuminer, mieux vivre.",
      items: [
        "Qualite de lumiere naturelle avec un IRC eleve",
        "Gradation haut de gamme sans scintillement",
        "Construction modulaire et reparable",
      ],
    },
    threeD: {
      eyebrow: "Vue 3D",
      title: "Vue eclatee, rendue tangible.",
      body: "Le modele interactif revelera chaque composant une fois optimise.",
      video: "/assets/Re27/images/gallery/Re27_AI%20rotation.mp4",
      image: "/assets/Re27/images/gallery/Re27-Parts.jpg",
    },
    useCases: {
      eyebrow: "Usages",
      title: "Une ampoule pour chaque environnement.",
      body: "Exemples d'usage pour habitat, hotellerie, retail et espaces de travail.",
      items: ["Habitat", "Hotellerie", "Retail", "Espaces de travail", "Galeries"],
    },
    workWithUs: {
      eyebrow: "Partenariats",
      title: "Travaillez avec nous.",
      items: [
        {
          title: "Fabricants",
          body: "Integrez des fonctions avancees tout en simplifiant la maintenance.",
        },
        {
          title: "Revendeurs",
          body: "Proposez Re27 comme ampoule de remplacement durable.",
        },
        {
          title: "Designers et architectes",
          body: "Renforcez vos projets avec des solutions lumineuses Re27.",
        },
      ],
    },
    gallery: {
      eyebrow: "Galerie",
      empty: "Les visuels seront ajoutes avec les assets.",
      items: [
        "/assets/Re27/images/gallery/Re27-Black.jpg",
        "/assets/Re27/images/gallery/Re27-Bleu.jpg",
        "/assets/Re27/images/gallery/Re27-Pola.jpg",
      ],
    },
    cta: {
      eyebrow: "Passez au changement.",
      title: "Pret a mieux eclairer ?",
    },
  },
  de: {
    hero: {
      title: "iiode Re27",
      eyebrow: "Bewusstes Licht",
      tagline: "Besseres Licht, besseres Leben.",
      description:
        "Eine wartbare LED-Lampe, die natuerliche Lichtqualitaet, smarte Steuerung und recycelte Materialien vereint.",
      cta: {
        primary: { label: "Vorbestellen", href: "/preorder" },
        secondary: { label: "Kooperationen", href: "/collaborations" },
      },
      image: "/assets/Re27/images/hero/Re27-Pola.jpg",
    },
    story: {
      eyebrow: "Geschichte",
      title: "Gehen Sie mit uns.",
      body: "Eine bessere LED-Lampe ist unser erster Schritt zu einer helleren Zukunft des Lichts.",
    },
    features: {
      eyebrow: "Merkmale",
      title: "Besseres Licht, besseres Leben.",
      items: [
        "Natuerliche Lichtqualitaet mit hohem CRI",
        "Flimmerfreie, hochwertige Dimmung",
        "Wartbare, modulare Konstruktion",
      ],
    },
    threeD: {
      eyebrow: "3D-Ansicht",
      title: "Explosionsansicht, greifbar gemacht.",
      body: "Das interaktive Modell zeigt jedes Bauteil, sobald es optimiert ist.",
      video: "/assets/Re27/images/gallery/Re27_AI%20rotation.mp4",
      image: "/assets/Re27/images/gallery/Re27-Parts.jpg",
    },
    useCases: {
      eyebrow: "Einsatzbereiche",
      title: "Eine Lampe fuer jede Umgebung.",
      body: "Einsatzbeispiele fuer Wohnen, Hotellerie, Einzelhandel und Arbeitsbereiche.",
      items: ["Zuhause", "Hotellerie", "Einzelhandel", "Arbeitsbereiche", "Galerien"],
    },
    workWithUs: {
      eyebrow: "Partnerschaften",
      title: "Arbeiten Sie mit uns.",
      items: [
        {
          title: "Hersteller",
          body: "Integrieren Sie fortschrittliche Funktionen und vereinfachen Sie die Wartung.",
        },
        {
          title: "Haendler",
          body: "Bieten Sie Re27 als nachhaltige Ersatzlampe an.",
        },
        {
          title: "Designer und Architekten",
          body: "Staerken Sie Projekte mit Re27-Lichtloesungen.",
        },
      ],
    },
    gallery: {
      eyebrow: "Galerie",
      empty: "Bilder werden mit den Assets hinzugefuegt.",
      items: [
        "/assets/Re27/images/gallery/Re27-Black.jpg",
        "/assets/Re27/images/gallery/Re27-Bleu.jpg",
        "/assets/Re27/images/gallery/Re27-Pola.jpg",
      ],
    },
    cta: {
      eyebrow: "Wechseln Sie um.",
      title: "Bereit fuer besseres Licht?",
    },
  },
}

export function getMarketingCopy(locale: Locale): MarketingCopy {
  return marketingCopy[locale] ?? marketingCopy.en
}
