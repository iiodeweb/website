import type { Locale } from "@/lib/locale"

export type Re27Copy = {
  hero: {
    title: string
    image: string
  }
  story: {
    leftText: string
    leftCallout: string
    rightTitle: string
    rightImage: string
  }
  useCases: {
    leftTitle: string
    leftImage: string
    intro: string
    bridge: string
    groups: Array<{ heading: string; bullets: string[] }>
    note: string
  }
  features: {
    eyebrow: string
    title: string
    items: string[]
  }
  threeD: {
    animationSrc: string
    animationPoster: string
    explodedPosterSrc: string
    triggerProgress: number
    durationSeconds: number
    compositionTitle: string
    compositionItems: string[]
    compositionNote: string
    rightTitle: string
    rightImage: string
  }
  gallery: {
    leftTitle: string
    leftImage: string
    rightText: string
  }
  workWithUs: {
    leftTitle: string
    items: { title: string; body: string }[]
    rightTitle: string
    rightImage: string
  }
  cta: {
    eyebrow: string
    title: string
  }
}

const re27EnglishCopy: Re27Copy = {
  hero: {
    title: "iiode Re27",
    image: "/assets/Re27/images/hero/desktop/iiode-Re27-Hand.webp",
  },
  story: {
    leftText:
      "iiode Re27 was born from a simple idea: a better LED bulb. This is our first step of many towards a brighter future for lighting.",
    leftCallout: "Walk with us",
    rightTitle: "Lighting made conscious",
    rightImage: "/assets/mood/ABC_IIODE-CharlesNegre_01.jpg",
  },
  useCases: {
    leftTitle:
      "iiode Re27 is the only light bulb that combines natural light quality, smart integrated control, and recycled materials in one serviceable design.",
    leftImage: "/assets/Re27/images/gallery/desktop/iiode-Re27-Engine.webp",
    intro:
      "iiode Re27 is the only light bulb that combines natural light quality, smart integrated control, and recycled materials in one serviceable design.",
    bridge: "It makes life inside as beautiful as life outside.",
    groups: [
      {
        heading: "It delivers natural, high-quality light.",
        bullets: [
          "Natural light quality with high CRI* for true-to-life colours",
          "Flicker-free, high quality dimming",
          "Tunable light intensity and temperature",
        ],
      },
      {
        heading: "It is simple to use and serviceable by design.",
        bullets: [
          "The iiode Re27 retrofit fits into existing sockets",
          "Easy maintenance thanks to modular, clip-in components",
          "Can be disassembled for recycling",
        ],
      },
      {
        heading: "It is a more sustainable alternative to conventional LED.",
        bullets: [
          "Made mostly from recycled materials",
          "Serviceability extends the lifespan of both bulb and fixture",
          "Assembled in CH using mostly EU-made parts",
        ],
      },
    ],
    note: "* Colour Rendering Index",
  },
  features: {
    eyebrow: "",
    title: "",
    items: [""],
  },
  threeD: {
    animationSrc: "/assets/Re27/exploded/Re27_Animation30FPS.sync.svg?v=2",
    animationPoster: "/assets/Re27/exploded/Re27_Animation30FPS.poster.svg?v=1",
    explodedPosterSrc: "/assets/Re27/exploded/Re27_Animation30FPS.exploded.static.svg?v=1",
    triggerProgress: 0.32,
    durationSeconds: 1.0,
    compositionTitle: "Composition",
    compositionItems: [
      "Optical lens in 100% post-production recycled polycarbonate for efficient light diffusion",
      "LED Printed Circuit Board with dual-channel, tunable white LED array for natural colours",
      "Logic Printed Circuit Board with Wi-Fi and BLE remote control and data access for smart connectivity",
      "Heatsink in 100% recycled, open-cell aluminium foam for heat dissipation",
      "Driver Printed Circuit Board with miniaturised AC -> DC driver for power regulation",
      "Standard E27 socket for tool-free replacement",
    ],
    compositionNote: "*Click to display information",
    rightTitle: "Building a better bulb",
    rightImage: "/assets/mood/ABC_IIODE-CharlesNegre_03.jpg",
  },
  gallery: {
    leftTitle: "One bulb for every environment",
    leftImage: "/assets/Re27/images/gallery/desktop/iiode-Re27-Portrait.webp",
    rightText:
      "From home and hospitality venues to retail and work spaces, iiode Re27 illuminates space for comfort, beauty, and productivity.",
  },
  workWithUs: {
    leftTitle: "Make the switch",
    items: [
      {
        title: "Manufacturers",
        body:
          "Integrate advanced features into your designs while simplifying construction and maintenance.",
      },
      {
        title: "Retailers",
        body:
          "Offer the iiode Re27 as a companion to new or vintage lighting, and as a sustainable replacement bulb.",
      },
      {
        title: "Designers and architects",
        body:
          "Augment your projects with iiode Re27-enhanced lighting solutions or custom designs.",
      },
    ],
    rightTitle: "Pre-Order",
    rightImage: "/assets/mood/ABC_IIODE-CharlesNegre_02.jpg",
  },
  cta: {
    eyebrow: "",
    title: "",
  },
}

const re27Copy: Record<Locale, Re27Copy> = {
  en: re27EnglishCopy,
  fr: re27EnglishCopy,
  de: re27EnglishCopy,
}

export function getRe27Copy(locale: Locale): Re27Copy {
  return re27Copy[locale] ?? re27Copy.en
}
