module.exports = function (api) {
    api.cache(true);;
    return {
        env: {
            test: {
                presets: [
                    ['@babel/preset-env',{
                        useBuiltIns: "usage",
                    }],
                    '@babel/preset-react',
                ],
                plugins:['transform-regenerator']
            },
        },
    };
}