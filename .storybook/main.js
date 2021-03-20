/**
 * @openformation/ui-starterkit
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

/**
 * @author Valentina Rotkin <valentina.rotkin@openformation.io>
 *
 */

const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/components/**/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];

    return config;
  },
};