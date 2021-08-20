const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')

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
        return config;
    },
};