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
};