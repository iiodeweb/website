import {
  collaborationCarouselImages,
  collaborationIntroImages,
  re27Assets,
} from "./assets"
import type { LocaleContent } from "./types"

const copyrightText =
  "En soumettant votre nom, votre prénom et votre adresse e-mail, puis en téléchargeant des images depuis ce site, vous recevez de la part d'iiode une autorisation limitée, non exclusive, non transférable et révocable d'utiliser ces images pour un usage personnel ainsi que pour une couverture éditoriale ou presse concernant iiode uniquement. Les images ne peuvent pas être vendues, sous-licenciées, redistribuées sous forme de fichiers autonomes, utilisées à des fins commerciales sans rapport avec iiode, ni utilisées de manière trompeuse ou illicite sans autorisation écrite préalable d'iiode. Merci de créditer (c) iiode lorsque cela est raisonnablement possible. Pour tout autre usage, veuillez contacter info@iiode.com."

const legalText =
  "Mention de copyright. Sauf indication contraire, tout le contenu de ce site, y compris les textes, images et documents téléchargeables, est protégé par le droit d'auteur et les droits voisins. Aucune partie de ce site ne peut être copiée, reproduite, modifiée, distribuée, stockée, transmise ou utilisée sous quelque forme que ce soit sans l'accord écrit préalable d'iiode, sauf pour un usage strictement personnel et non commercial, ou lorsque les conditions applicables sur ce site l'autorisent expressément. (c) 2026 iiode. Tous droits réservés."

export const fr: LocaleContent = {
  site: {
    nav: {
      re27: "Re27",
      contact: "Contact",
      collaborations: "Collaborations",
      about: "À propos",
      downloads: "Téléchargements",
      preorder: "Précommande",
    },
    ctas: {
      primary: "Précommande",
    },
    links: {
      services: "Services",
      preorder: "Précommande",
      newsletter: "Newsletter",
    },
    footer: {
      brandTagline: "Re27",
      instagram: "@iiode",
      legal: legalText,
    },
    cookieConsent: {
      message: "Nous utilisons des cookies d'analyse pour comprendre le trafic.",
      accept: "Accepter",
      reject: "Refuser",
    },
  },
  pages: {
    preorder: {
      eyebrow: "Précommande",
      title: "Précommande",
      description:
        "Ouvrez le formulaire de précommande pour signaler votre intérêt et recevoir les informations de disponibilité ou de prix de iiode.",
      submit: "Ouvrir le formulaire de précommande",
      successMessage: "Merci. Votre demande de précommande a été envoyée.",
    },
    about: {
      eyebrow: "À propos",
      title: "Au-delà de l'ampoule",
      sections: [
        "iiode s'engage à dessiner l'avenir de l'électronique durable en développant des solutions responsables et faites pour durer, avec une attention particulière portée à l'éclairage conscient.",
        "Nous sommes spécialisés dans le développement de luminaires, d'installations, d'extensions de séries et de solutions allant du design à l'assemblage.",
        "Nous créons aussi des espaces pour des événements et des intérieurs, en imaginant des narrations sensorielles qui offrent des expériences immersives.",
      ],
      servicesLabel: "Pour le design et la production, voir",
      contactTitle: "Nous contacter",
      contactIntro: "iiode dispose de bureaux à Lausanne et à Paris",
      addresses: [
        "Av. des Alpes 9, CH - 1006 Lausanne",
        "Rue d'Hauteville 25, FR - 75010 Paris",
      ],
      contactLine: "Pour nous contacter, envoyez-nous un message à",
    },
    collaborations: {
      introLeft:
        "Collaborations\n\nEn parallèle de notre série Re27, nous développons des éditions limitées autour de l'ampoule. Ces collaborations avec des praticiens conscients explorent la manière dont Re27 devient un objet lumineux - comment il habite un espace, comment il est utilisé et ce qu'il peut devenir au-delà d'un produit autonome.\n\nCes collaborations sont conçues comme un format adaptatif, amené à évoluer dans le temps - d'un thème à l'autre, d'un lieu à l'autre - en partant toujours de la même base : Re27.",
      introImages: collaborationIntroImages,
      introImageAlt: "Introduction aux collaborations",
      abatJourTitle:
        "Premier chapitre : Abat-Jour - Matter and Shape 2026\n\nÀ Matter and Shape 2026 à Paris, iiode présente une exposition collaborative centrée sur Re27. Huit designers et studios invités ont développé des abat-jour pour une base Re27 commune : Dimitri Bähler, BIG-GAME, Jörg Boner, From Lighting, Alexandra Gerber, Vanessa Schindler, Charlotte Talbot & Jonathan Mauloubier, Panter & Tourron. Les éditions limitées qui en résultent explorent les matériaux et les usages en suspension, avec un point de départ commun.",
      contributors: [],
      images: collaborationCarouselImages,
      carouselAlt: "Collaborations Abat-Jour",
    },
  },
  downloads: {
    title: "Téléchargements",
    intro: "Accédez à un aperçu presse en renseignant vos coordonnées.",
    copyrightBody: copyrightText,
    previewButtonLabel: "Télécharger l'aperçu presse",
    pressContactLine:
      "Pour les fichiers haute résolution et les demandes presse détaillées, veuillez contacter iiode",
  },
  re27: {
    hero: {
      title: "iiode Re27",
      image: re27Assets.heroImage,
    },
    story: {
      leftText:
        "iiode Re27 est née d'une idée simple : une meilleure ampoule LED. C'est notre premier étape vers un avenir durable pour l'éclairage.",
      leftCallout: "Suivez-nous",
      rightTitle: "Un éclairage conscient",
      rightImage: re27Assets.storyImage,
    },
    useCases: {
      leftTitle:
        "iiode Re27 est la seule ampoule qui associe qualité de lumière naturelle, contrôle intelligent intégré et matériaux recyclés dans un design réparable.",
      leftImage: re27Assets.useCasesImage,
      intro:
        "iiode Re27 est la seule ampoule qui associe qualité de lumière naturelle, contrôle intelligent intégré et matériaux recyclés dans un design réparable.",
      bridge: "Nous souhaitons rendre la vie à l'intérieur aussi belle que dehors.",
      groups: [
        {
          heading: "Une lumière naturelle de haute qualité.",
          bullets: [
            "Qualité de lumière naturelle avec IRC* élevé pour des couleurs fidèles",
            "Gradation fluide et de haute qualité, sans scintillement",
            "Intensité et température de lumière réglables",
          ],
        },
        {
          heading: "Elle est simple à utiliser et réparable par conception.",
          bullets: [
            "Le retrofit iiode Re27 s'installe dans les douilles existantes",
            "Maintenance facilitée grâce à des composants modulaires clipsables",
            "Démontable pour le recyclage",
          ],
        },
        {
          heading: "Elle constitue une alternative plus durable aux LED conventionnelles.",
          bullets: [
            "Fabriquée principalement à partir de matériaux recyclés",
            "La réparabilité prolonge la durée de vie de l'ampoule et du luminaire",
            "Assemblée en Suisse avec des composants majoritairement fabriqués dans l'UE",
          ],
        },
      ],
      note: "* Indice de rendu des couleurs",
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
      compositionTitle: "Composition",
      compositionItems: [
        "Lentille optique en polycarbonate 100% recyclé post-production pour une diffusion efficace de la lumière",
        "Circuit imprimé LED avec réseau LED blanc réglable à double canal pour des couleurs naturelles",
        "Circuit imprimé logique avec contrôle à distance Wi-Fi et BLE, et accès aux données pour une connectivité intelligente",
        "Dissipateur thermique en mousse d'aluminium à cellules ouvertes 100% recyclée pour la dissipation de chaleur",
        "Circuit imprimé driver avec convertisseur AC -> DC miniaturisé pour la régulation de puissance",
        "Douille E27 standard pour un remplacement sans outil",
      ],
      compositionNote: "*Cliquez pour afficher les informations",
      rightTitle: "Construire une meilleure ampoule",
      rightImage: re27Assets.threeDImage,
    },
    gallery: {
      leftTitle: "Une ampoule pour chaque environnement",
      leftImage: re27Assets.galleryImage,
      rightText:
        "De la maison à l'hôtellerie, du retail aux espaces de travail, iiode Re27 illumine les lieux pour y garantir confort, beauté et productivité.",
    },
    workWithUs: {
      leftTitle: "Choisissez Re27",
      items: [
        {
          title: "Fabricants",
          body:
            "Intégrez des fonctionnalités avancées dans vos designs tout en simplifiant la construction et la maintenance.",
        },
        {
          title: "Distributeurs",
          body:
            "Proposez iiode Re27 comme complément à des luminaires neufs ou vintage, et comme ampoule de remplacement durable.",
        },
        {
          title: "Designers et architectes",
          body:
            "Enrichissez vos projets avec des solutions d'éclairage augmentées par iiode Re27 ou des designs sur mesure.",
        },
      ],
      rightTitle: "Précommande",
      rightImage: re27Assets.workWithUsImage,
    },
    cta: {
      eyebrow: "",
      title: "",
    },
  },
}
