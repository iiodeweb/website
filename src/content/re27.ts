import type { Locale } from "@/lib/locale"

export type Re27Copy = {
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
    sequence: {
      basePath: string
      frameCount: number
      pad: number
      ext: "webp" | "avif"
      startFrame: number
      alt: string
    }
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

const re27EnglishCopy: Re27Copy = {
  hero: {
    title: "iiode Re27",
    eyebrow: "Re27 1/12",
    tagline: "",
    description: "",
    cta: {
      primary: { label: "Preorder", href: "/preorder" },
      secondary: { label: "Collaborations", href: "/collaborations" },
    },
    image: "/assets/Re27/images/hero/Re27-Pola.jpg",
  },
  story: {
    eyebrow: "Re27 2/12",
    title: "Walk with us.",
    body:
      "iiode Re27 was born from a simple idea: a better LED bulb. This is our first step of many towards a brighter future for lighting.",
  },
  features: {
    eyebrow: "Re27 3/12 - 4/12",
    title: "Lighting made conscious",
    items: ["Light better, live better"],
  },
  useCases: {
    eyebrow: "Re27 5/12",
    title:
      "iiode Re27 is the only light bulb that combines natural light quality, smart integrated control, and recycled materials in one serviceable design.",
    body: "It makes life inside as beautiful as life outside.",
    items: [
      "Natural light quality with high CRI* for true-to-life colours\nFlicker-free, high quality dimming\nTunable light intensity and temperature",
      "The iiode Re27 retrofit fits into existing sockets\nEasy maintenance thanks to modular, clip-in components\nCan be disassembled for recycling",
      "Made mostly from recycled materials\nServiceability extends the lifespan of both bulb and fixture\nAssembled in CH using mostly EU-made parts\n\n* Colour rendering index",
    ],
  },
  threeD: {
    eyebrow: "Re27 6/12 - 7/12",
    title: "Composition",
    body:
      "Optical lens in 100% post-production recycled polycarbonate for efficient light diffusion\n\nLED PCB* with dual-channel, tunable white LED array for natural colours\n\nLogic PCB* with Wi-Fi and BLE remote control and data access for smart connectivity\n\nHeatsink in 100% recycled, open-cell aluminium foam for heat dissipation\n\nDriver PCB* with miniaturised AC -> DC driver for power regulation\n\nStandard E27 socket for tool-free replacement\n\n* Printed circuit board",
    video: "/assets/Re27/videos/Re27_AI%20rotation.mp4",
    image: "/assets/Re27/videos/frames_10s_webp/frame_000001.webp",
    sequence: {
      basePath: "/assets/Re27/videos/frames_10s_webp/frame_",
      frameCount: 120,
      pad: 6,
      ext: "webp",
      startFrame: 1,
      alt: "Re27 composition sequence",
    },
  },
  gallery: {
    eyebrow: "One bulb for every environment",
    empty:
      "From home and hospitality venues to retail and work spaces, iiode Re27 illuminates space for comfort, beauty, and productivity.",
    items: ["/assets/Re27/images/gallery/Re27-Pola.jpg"],
  },
  workWithUs: {
    eyebrow: "Re27 10/12",
    title: "Work with us",
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
  },
  cta: {
    eyebrow: "Re27 11/12",
    title: "Make the switch",
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
