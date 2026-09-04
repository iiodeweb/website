import { collaborationCarouselImages, collaborationIntroImages, re27Assets } from './assets';
import { termsContent } from './terms';
import type { LocaleContent } from './types';

const copyrightText = 'By submitting your name, surname and email address and downloading any images from this website, you receive a limited, non-exclusive, non-transferable, revocable permission from iiode to use those images for personal use and for editorial or press coverage about iiode only. The images may not be sold, sublicensed, redistributed as standalone files, used for unrelated commercial purposes, or used in any misleading or unlawful manner without prior written permission from iiode. Please credit (c) iiode where reasonably possible. For any other use, please contact info@iiode.com.';

const legalText = 'Copyright Notice. Unless otherwise stated, all content on this website, including text, images and downloadable materials, is protected by copyright and related rights. No part of this website may be copied, reproduced, modified, distributed, stored, transmitted or otherwise used in any form without the prior written consent of iiode, except for strictly personal, non-commercial use or as expressly permitted by applicable terms on this website. (c) 2026 iiode. All rights reserved.';

export const en: LocaleContent = {
  site: {
    nav: {
      re27: 'Re27',
      contact: 'Contact',
      collaborations: 'Collaborations',
      about: 'About',
      downloads: 'Downloads',
      preorder: 'Pre-Order',
    },
    links: {
      home: 'iiode',
      contact: 'info@iiode.com',
      instagram: '@iiode',
      services: 'Services',
      preorder: 'Pre-Order',
      terms: 'Terms & Services',
      newsletter: 'Newsletter',
    },
    footer: {
      brandTagline: 'Re27',
      instagram: '@iiode',
      legal: legalText,
    },
    cookieConsent: {
      message: 'We use analytics cookies to understand traffic.',
      accept: 'Accept',
      reject: 'Reject',
    },
  },
  pages: {
    preorder: {
      title: 'Pre-Order',
      description: [
        'Support iiode Re27 by pre-ordering now.',
        'We will start production when 500 valid paid Re27 units have been ordered. The campaign runs from 9 September 2026 at 00:00 to 9 March 2027 at 23:59 CET.',
        'Payment is collected when you order. If we do not reach 500 units, we will cancel the campaign and refund the full amount paid within 14 calendar days. Once we announce that the threshold has been reached, production will proceed.',
        'Delivery and cancellation',
        'If the threshold is reached by 9 December 2026, estimated dispatch is by 10 March 2027. If it is reached later, estimated dispatch is within approximately three months of our announcement and no later than 10 June 2027.',
        'You may cancel for a full refund at any time before dispatch. Your mandatory statutory rights remain unaffected. Please see complete Terms and conditions in checkout.',
      ],
      submit: 'Open pre-order form',
      successMessage: 'Thanks. Your pre-order request has been sent.',
      imageRight: re27Assets.preorderImage,
    },
    about: {
      title: 'Beyond the bulb',
      sections: ['iiode is committed to charting the future of sustainable electronics through the development of lasting and responsible solutions, with a focus on conscious lighting.', 'We specialise in the development of lighting fixtures, installations, series extensions, and design-to-assembly solutions.', 'We also create spaces for events and interiors, crafting sensory narratives that offer immersive experiences.'],
      servicesLabel: 'For design and production see',
      contactTitle: 'Get in touch',
      contactIntro: 'iiode has offices in both Lausanne & Paris',
      addresses: ['Av. des Alpes 9, CH - 1006 Lausanne', "Rue d'Hauteville 25, FR - 75010 Paris"],
      contactLine: 'To contact us, kindly send us a message at',
    },
    terms: termsContent,
    collaborations: {
      introLeft: 'Collaborations\n\nAlongside our Re27 series, we develop limited editions around the bulb. These collaborations with conscious practitioners explore how Re27 becomes a lighting object - how it lives in a space, how it is used, and what it can become beyond a standalone product.\n\nThese collaborations are conceived as an adaptive format, meant to evolve over time - moving from one theme to another, and from one place to another - always starting from the same base: Re27.',
      introImages: collaborationIntroImages,
      introImageAlt: 'Collaborations intro',
      abatJourTitle: 'First chapter: Abat-Jour - Matter and Shape 2026\n\nAt Matter and Shape 2026 in Paris, iiode presents a collaborative exhibition centred on Re27. Eight invited designers and studios developed lampshades for a shared Re27 base: Dimitri Baehler, BIG-GAME, Joerg Boner, From Lighting, Alexandra Gerber, Vanessa Schindler, Charlotte Talbot & Jonathan Mauloubier, Panter & Tourron. The resulting limited editions explore materials and pendant-light uses, with one common starting point.',
      contributors: [],
      images: collaborationCarouselImages,
      carouselAlt: 'Abat-jour collaborations',
    },
  },
  downloads: {
    title: 'Downloads',
    intro: 'Access a press preview by filling out your details.',
    copyrightBody: copyrightText,
    previewButtonLabel: 'Download Press Preview',
    pressContactLine: 'For full-resolution files and detailed press requests, please contact iiode',
  },
  re27: {
    hero: {
      title: 'iiode Re27',
      image: re27Assets.heroImage,
    },
    story: {
      leftText: 'iiode Re27 was born from a simple idea: a better LED bulb. This is our first step of many towards a brighter future for lighting.',
      leftCallout: 'Walk with us',
      rightTitle: 'Lighting made conscious',
      rightImage: re27Assets.storyImage,
    },
    useCases: {
      leftTitle: 'iiode Re27 is the only light bulb that combines natural light quality, smart integrated control, and recycled materials in one serviceable design.',
      leftImage: re27Assets.useCasesImage,
      bridge: 'It makes life inside as beautiful as life outside.',
      groups: [
        {
          heading: 'It delivers natural, high-quality light.',
          bullets: ['Natural light quality with high CRI* for true-to-life colours', 'Flicker-free, high quality dimming', 'Tunable light intensity and temperature'],
        },
        {
          heading: 'It is simple to use and serviceable by design.',
          bullets: ['The iiode Re27 retrofit fits into existing sockets', 'Easy maintenance thanks to modular, clip-in components', 'Can be disassembled for recycling'],
        },
        {
          heading: 'It is a more sustainable alternative to conventional LED.',
          bullets: ['Made mostly from recycled materials', 'Serviceability extends the lifespan of both bulb and fixture', 'Assembled in CH using mostly EU-made parts'],
        },
      ],
      note: '* Colour Rendering Index',
    },
    threeD: {
      animationSrc: re27Assets.animationSrc,
      animationPoster: re27Assets.animationPoster,
      explodedPosterSrc: re27Assets.explodedPosterSrc,
      triggerProgress: 0.32,
      durationSeconds: 1.0,
      compositionItems: ['Optical lens in 100% post-production recycled polycarbonate for efficient light diffusion', 'LED Printed Circuit Board with dual-channel, tunable white LED array for natural colours', 'Logic Printed Circuit Board with Wi-Fi and BLE remote control and data access for smart connectivity', 'Heatsink in 100% recycled, open-cell aluminium foam for heat dissipation', 'Driver Printed Circuit Board with miniaturised AC -> DC driver for power regulation', 'Standard E27 socket for tool-free replacement'],
      compositionNote: '*Click to display information',
      rightTitle: 'Building a better bulb',
      rightImage: re27Assets.threeDImage,
    },
    gallery: {
      leftTitle: 'One bulb for every environment',
      leftImage: re27Assets.galleryImage,
      rightText: 'From home and hospitality venues to retail and work spaces, iiode Re27 illuminates space for comfort, beauty, and productivity.',
    },
    workWithUs: {
      leftTitle: 'Make the switch',
      items: [
        {
          title: 'Manufacturers',
          body: 'Integrate advanced features into your designs while simplifying construction and maintenance.',
        },
        {
          title: 'Retailers',
          body: 'Offer the iiode Re27 as a companion to new or vintage lighting, and as a sustainable replacement bulb.',
        },
        {
          title: 'Designers and architects',
          body: 'Augment your projects with iiode Re27-enhanced lighting solutions or custom designs.',
        },
      ],
      rightTitle: 'Pre-Order',
      rightImage: re27Assets.workWithUsImage,
    },
  },
};
