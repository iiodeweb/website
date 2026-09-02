export type HubspotFormConfig = {
  region: string;
  portalId: string;
  formId: string;
  modalTitle: string;
};

export const hubspotConfig = {
  portalId: '147603542',
  region: 'eu1',
  trackingScriptSrc: 'https://js-eu1.hs-scripts.com/147603542.js',
  embedScriptSrc: 'https://js-eu1.hsforms.net/forms/embed/v2.js',
  forms: {
    // preorder: {
    //   region: "eu1",
    //   portalId: "147603542",
    //   formId: "6e264a4c-a83f-4cd6-b25d-3ec3a0d13f77",
    //   modalTitle: "Pre-Order",
    // },
    newsletter: {
      region: 'eu1',
      portalId: '147603542',
      formId: '12e7d4cd-95de-42c3-80ec-f2c33b84dcde',
      modalTitle: 'Newsletter',
    },
    pressPreview: {
      region: 'eu1',
      portalId: '147603542',
      formId: 'b0f1e703-ea76-446b-b6b7-0fb62198a343',
      modalTitle: 'Press Preview',
    },
  },
} as const satisfies {
  portalId: string;
  region: string;
  trackingScriptSrc: string;
  embedScriptSrc: string;
  forms: Record<string, HubspotFormConfig>;
};
