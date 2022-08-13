/**
 * 加载babel的默认配置
 * 当出现自定义的babel配置文件时 取消默认配置
 */

const plugins = [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-transform-react-constant-elements",
];

const BabelConfig = {
    targets: "> 0.25%",
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "entry",
                targets: {
                    node: "current",
                },
                corejs: {
                    version: "3.20",
                    proposals: true,
                },
                browserslistEnv: "> 0.1%",
            },
        ],

        [
            "@babel/preset-react",
            {
                runtime: "automatic",
            },
        ],
        "@babel/preset-typescript",
    ],
    plugins,
    cacheCompression: false,
};

module.exports = BabelConfig;
