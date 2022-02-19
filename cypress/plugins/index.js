const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");

const injectDevServer = require("@cypress/react/plugins/react-scripts");

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  injectDevServer(on, config);
  return config;
};
