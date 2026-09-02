export type ResponsiveImage = {
  desktop: string;
  mobile: string;
};

export type SiteCopy = {
  nav: {
    re27: string;
    contact: string;
    collaborations: string;
    about: string;
    downloads: string;
    preorder: string;
  };
  links: {
    home: string;
    contact: string;
    instagram: string;
    services: string;
    preorder: string;
    newsletter: string;
  };
  footer: {
    brandTagline: string;
    instagram: string;
    legal: string;
  };
  cookieConsent: {
    message: string;
    accept: string;
    reject: string;
  };
};

export type PagesCopy = {
  preorder: {
    title: string;
    description: string[];
    submit: string;
    successMessage: string;
    imageRight: string;
  };
  about: {
    title: string;
    sections: string[];
    servicesLabel: string;
    contactTitle: string;
    contactIntro: string;
    addresses: string[];
    contactLine: string;
  };
  collaborations: {
    introLeft: string;
    introImages: ResponsiveImage[];
    introImageAlt: string;
    abatJourTitle: string;
    contributors: string[];
    images: ResponsiveImage[];
    carouselAlt: string;
  };
};

export type DownloadsContent = {
  title: string;
  intro: string;
  copyrightBody: string;
  previewButtonLabel: string;
  pressContactLine: string;
};

export type Re27Copy = {
  hero: {
    title: string;
    image: string;
  };
  story: {
    leftText: string;
    leftCallout: string;
    rightTitle: string;
    rightImage: string;
  };
  useCases: {
    leftTitle: string;
    leftImage: string;
    bridge: string;
    groups: Array<{ heading: string; bullets: string[] }>;
    note: string;
  };
  threeD: {
    animationSrc: string;
    animationPoster: string;
    explodedPosterSrc: string;
    triggerProgress: number;
    durationSeconds: number;
    compositionItems: string[];
    compositionNote: string;
    rightTitle: string;
    rightImage: string;
  };
  gallery: {
    leftTitle: string;
    leftImage: string;
    rightText: string;
  };
  workWithUs: {
    leftTitle: string;
    items: { title: string; body: string }[];
    rightTitle: string;
    rightImage: string;
  };
};

export type LocaleContent = {
  site: SiteCopy;
  pages: PagesCopy;
  downloads: DownloadsContent;
  re27: Re27Copy;
};
