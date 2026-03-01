export default {
  multipass: true,
  plugins: [
    // Run preset-default without trying to override removeViewBox
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIds: false, // keep SMIL begin="vis9.end" chains stable
        },
      },
    },

    // Explicitly DISABLE removeViewBox (so viewBox stays)
    { name: "removeViewBox", active: false },

    // Big size lever for your file
    {
      name: "convertPathData",
      params: {
        floatPrecision: 2,
      },
    },
  ],
};