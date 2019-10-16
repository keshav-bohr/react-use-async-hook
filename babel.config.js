module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                browsers: '> 0.25%, not dead',
            },
            exclude: ['@babel/plugin-transform-regenerator'],
        }],
    ],
};