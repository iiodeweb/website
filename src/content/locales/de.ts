import {
  collaborationCarouselImages,
  collaborationIntroImages,
  re27Assets,
} from "./assets"
import type { LocaleContent } from "./types"

const copyrightText =
  "Wenn Sie Ihren Namen, Vornamen und Ihre E-Mail-Adresse angeben und Bilder von dieser Website herunterladen, erhalten Sie von iiode eine beschränkte, nicht exklusive, nicht übertragbare und widerrufbare Erlaubnis, diese Bilder ausschliesslich für persönliche Zwecke sowie für redaktionelle oder Presseberichte über iiode zu verwenden. Die Bilder dürfen ohne vorherige schriftliche Genehmigung von iiode nicht verkauft, unterlizenziert, als eigenständige Dateien weitergegeben, für nicht damit verbundene kommerzielle Zwecke genutzt oder in irreführender oder rechtswidriger Weise verwendet werden. Bitte nennen Sie, soweit angemessen, (c) iiode als Bildnachweis. Für jede andere Nutzung kontaktieren Sie bitte info@iiode.com."

const legalText =
  "Copyright-Hinweis. Sofern nicht anders angegeben, sind alle Inhalte dieser Website, einschliesslich Texte, Bilder und herunterladbare Materialien, urheberrechtlich und durch verwandte Schutzrechte geschützt. Kein Teil dieser Website darf ohne vorherige schriftliche Zustimmung von iiode kopiert, reproduziert, verändert, verbreitet, gespeichert, übertragen oder in irgendeiner Form anderweitig genutzt werden, ausser für streng persönliche, nicht kommerzielle Zwecke oder soweit dies durch die geltenden Bedingungen dieser Website ausdrücklich erlaubt ist. (c) 2026 iiode. Alle Rechte vorbehalten."

export const de: LocaleContent = {
  site: {
    nav: {
      re27: "Re27",
      contact: "Kontakt",
      collaborations: "Kooperationen",
      about: "Über uns",
      downloads: "Downloads",
      preorder: "Vorbestellung",
    },
    ctas: {
      primary: "Vorbestellung",
    },
    links: {
      services: "Services",
      preorder: "Vorbestellung",
      newsletter: "Newsletter",
    },
    footer: {
      brandTagline: "Re27",
      instagram: "@iiode",
      legal: legalText,
    },
    cookieConsent: {
      message: "Wir verwenden Analyse-Cookies, um den Traffic zu verstehen.",
      accept: "Akzeptieren",
      reject: "Ablehnen",
    },
  },
  pages: {
    preorder: {
      eyebrow: "Vorbestellung",
      title: "Vorbestellung",
      description:
        "Öffnen Sie das Vorbestellformular, um Ihr Interesse zu registrieren und Informationen zu Verfügbarkeit oder Preisen von iiode zu erhalten.",
      submit: "Vorbestellformular öffnen",
      successMessage: "Danke. Ihre Vorbestellanfrage wurde gesendet.",
    },
    about: {
      eyebrow: "Über uns",
      title: "Mehr als eine Glühbirne",
      sections: [
        "iiode setzt sich dafür ein, die Zukunft nachhaltiger Elektronik mit langlebigen und verantwortungsvollen Lösungen zu gestalten, mit besonderem Fokus auf bewusstes Licht.",
        "Wir sind spezialisiert auf die Entwicklung von Leuchten, Installationen, Serienerweiterungen und Lösungen vom Design bis zur Montage.",
        "Ausserdem gestalten wir Räume für Events und Interieurs und entwickeln sensorische Erzählungen, die immersive Erlebnisse schaffen.",
      ],
      servicesLabel: "Für Design und Produktion siehe",
      contactTitle: "Kontakt aufnehmen",
      contactIntro: "iiode hat Büros in Lausanne und Paris",
      addresses: [
        "Av. des Alpes 9, CH - 1006 Lausanne",
        "Rue d'Hauteville 25, FR - 75010 Paris",
      ],
      contactLine: "Kontaktieren Sie uns gerne per E-Mail an",
    },
    collaborations: {
      introLeft:
        "Kooperationen\n\nNeben unserer Re27-Serie entwickeln wir limitierte Editionen rund um die Glühbirne. Diese Kooperationen mit bewusst arbeitenden Gestalterinnen und Gestaltern untersuchen, wie Re27 zu einem Lichtobjekt wird - wie es in einem Raum lebt, wie es genutzt wird und was es über ein eigenständiges Produkt hinaus werden kann.\n\nDiese Kooperationen sind als adaptives Format gedacht, das sich im Laufe der Zeit weiterentwickelt - von einem Thema zum nächsten und von einem Ort zum anderen - immer ausgehend von derselben Basis: Re27.",
      introImages: collaborationIntroImages,
      introImageAlt: "Einführung zu den Kooperationen",
      abatJourTitle:
        "Erstes Kapitel: Abat-Jour - Matter and Shape 2026\n\nAuf der Matter and Shape 2026 in Paris präsentiert iiode eine kollaborative Ausstellung rund um Re27. Acht eingeladene Designer und Studios entwickelten Lampenschirme für eine gemeinsame Re27-Basis: Dimitri Bähler, BIG-GAME, Jörg Boner, From Lighting, Alexandra Gerber, Vanessa Schindler, Charlotte Talbot & Jonathan Mauloubier, Panter & Tourron. Die daraus entstandenen limitierten Editionen erforschen Materialien und Anwendungen als Pendelleuchte, mit einem gemeinsamen Ausgangspunkt.",
      contributors: [],
      images: collaborationCarouselImages,
      carouselAlt: "Abat-Jour Kooperationen",
    },
  },
  downloads: {
    title: "Downloads",
    intro: "Erhalten Sie eine Pressevorschau, indem Sie Ihre Angaben eintragen.",
    copyrightBody: copyrightText,
    previewButtonLabel: "Pressevorschau herunterladen",
    pressContactLine:
      "Für hochauflösende Dateien und detaillierte Presseanfragen kontaktieren Sie bitte iiode",
  },
  re27: {
    hero: {
      title: "iiode Re27",
      image: re27Assets.heroImage,
    },
    story: {
      leftText:
        "iiode Re27 entstand aus einer einfachen Idee: einer besseren LED-Glühbirne. Das ist unser erster von vielen Schritten in eine nachhaltige Zukunft des Lichts.",
      leftCallout: "Folgen Sie uns",
      rightTitle: "Bewusst gestaltetes Licht",
      rightImage: re27Assets.storyImage,
    },
    useCases: {
      leftTitle:
        "iiode Re27 ist die einzige Glühbirne, die natürliche Lichtqualität, integrierte smarte Steuerung und recycelte Materialien in einem servicefähigen Design vereint.",
      leftImage: re27Assets.useCasesImage,
      intro:
        "iiode Re27 ist die einzige Glühbirne, die natürliche Lichtqualität, integrierte smarte Steuerung und recycelte Materialien in einem servicefähigen Design vereint.",
      bridge: "Sie macht das Leben drinnen so schön wie draussen.",
      groups: [
        {
          heading: "Sie liefert natürliches, hochwertiges Licht.",
          bullets: [
            "Natürliche Lichtqualität mit hohem CRI* für farbechte Wiedergabe",
            "Flimmerfreies, hochwertiges Dimmen",
            "Regelbare Lichtintensität und Farbtemperatur",
          ],
        },
        {
          heading: "Sie ist einfach zu bedienen und servicefähig konstruiert.",
          bullets: [
            "Das iiode Re27 Retrofit passt in bestehende Fassungen",
            "Einfache Wartung dank modularer, einklickbarer Komponenten",
            "Kann für das Recycling zerlegt werden",
          ],
        },
        {
          heading: "Sie ist eine nachhaltigere Alternative zu konventionellen LEDs.",
          bullets: [
            "Grösstenteils aus recycelten Materialien gefertigt",
            "Servicefähigkeit verlängert die Lebensdauer von Glühbirne und Leuchte",
            "Montiert in der Schweiz mit überwiegend in der EU gefertigten Teilen",
          ],
        },
      ],
      note: "* Farbwiedergabeindex",
    },
    features: {
      eyebrow: "",
      title: "",
      items: [""],
    },
    threeD: {
      animationSrc: re27Assets.animationSrc,
      animationPoster: re27Assets.animationPoster,
      explodedPosterSrc: re27Assets.explodedPosterSrc,
      triggerProgress: 0.32,
      durationSeconds: 1.0,
      compositionTitle: "Aufbau",
      compositionItems: [
        "Optische Linse aus 100% post-production recyceltem Polycarbonat für effiziente Lichtstreuung",
        "LED-Leiterplatte mit zweikanaligem, abstimmbarem Weisslicht-LED-Array für natürliche Farben",
        "Logik-Leiterplatte mit Wi-Fi- und BLE-Fernsteuerung sowie Datenzugang für smarte Konnektivität",
        "Kühlkörper aus 100% recyceltem offenzelligem Aluminiumschaum zur Wärmeableitung",
        "Driver-Leiterplatte mit miniaturisiertem AC -> DC-Treiber zur Leistungsregelung",
        "Standard-E27-Fassung für werkzeugfreien Austausch",
      ],
      compositionNote: "*Klicken, um Informationen anzuzeigen",
      rightTitle: "Eine bessere Glühbirne bauen",
      rightImage: re27Assets.threeDImage,
    },
    gallery: {
      leftTitle: "Eine Glühbirne für jede Umgebung",
      leftImage: re27Assets.galleryImage,
      rightText:
        "Von Zuhause und Hospitality bis Retail und Arbeitsräumen: iiode Re27 beleuchtet Räume mit Komfort, Schönheit und Produktivität.",
    },
    workWithUs: {
      leftTitle: "Wechseln Sie zu Re27",
      items: [
        {
          title: "Hersteller",
          body:
            "Integrieren Sie erweiterte Funktionen in Ihre Designs und vereinfachen Sie gleichzeitig Konstruktion und Wartung.",
        },
        {
          title: "Händler",
          body:
            "Bieten Sie iiode Re27 als Begleiter für neue oder Vintage-Leuchten und als nachhaltige Ersatz-Glühbirne an.",
        },
        {
          title: "Designer und Architekten",
          body:
            "Erweitern Sie Ihre Projekte mit durch iiode Re27 verbesserten Lichtlösungen oder individuellen Designs.",
        },
      ],
      rightTitle: "Vorbestellung",
      rightImage: re27Assets.workWithUsImage,
    },
    cta: {
      eyebrow: "",
      title: "",
    },
  },
}
