const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')
const path = require("path")
const resolvePath = (_path) => path.join(process.cwd(), _path)

module.exports = {
    'stories': [
        '../**/*.stories.@(js|jsx|ts|tsx)',
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-dark-mode/register',
    ],
    webpackFinal: async (config) => {
        config.module.rules.unshift({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config.resolve.plugins.push(new TsconfigPathsPlugin({}));
        config.resolve.alias = {
            ...config.resolve.alias,
            "@emotion/core": resolvePath("node_modules/@emotion/react"),
            "@emotion/styled": resolvePath("node_modules/@emotion/styled"),
            "emotion-theming": resolvePath("node_modules/@emotion/react"),
        }
        return config;
    },
};