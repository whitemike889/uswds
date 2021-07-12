const path = require("path");

module.exports = ({ config, mode }) => {
  // Add twig support
  config.module.rules.push({
    test: /\.twig$/,
    loader: "twigjs-loader",
  });

  // Tell Storybook where your components live
  config.resolve.alias["components"] = path.resolve(
    __dirname,
    "../src/"
  );

  // Add scss support
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        { loader: "style-loader", options: { injectType: "styleTag" } },
        { loader: "css-loader" },
        {
          loader: "postcss-loader",
          options: {
            // Enable Source Maps
            sourceMap: true,
          },
        },
        { loader: "sass-loader" },
      ],
      include: path.resolve(__dirname, "../"),
    },
    {
      test: /\.(png|svg|jpe?g)$/i,
      loader: "file-loader"
    }
  );

  return config;
};
