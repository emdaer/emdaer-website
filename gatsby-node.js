exports.modifyWebpackConfig = ({ config }) => {
  // @TODO Remove this
  // Beacuse webpack 1.x prefixes the bundle with tabs,imported template
  // literals are indented incorrectly. Additionally, webpack-configurator does
  // not allow sourcePrefix to be an empty string. Due to this, we need to add a
  // single space which does not affect formatting. This is issue was fixed in
  // webpack 2 and therefore will be fixed in Gatsby 2
  config.merge({
    output: {
      sourcePrefix: ' ',
    },
  });
  return config;
};
