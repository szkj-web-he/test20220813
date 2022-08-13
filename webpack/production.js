const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { entry, plugins, moduleOption, resolve, output, experiments } = require("./common");
const path = require("path");
const rootPath = require("./rootPath");

moduleOption.rules = [
    ...moduleOption.rules,
    {
        test: /\.(sa|sc)ss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: "css-loader",
                options: {
                    importLoaders: 3,
                    modules: {
                        localIdentName: "[local]",
                    },
                },
            },
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        config: path.resolve(__dirname, "../postcss.config.js"),
                    },
                },
            },
            { loader: "resolve-url-loader" },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                },
            },
        ],
    },
    {
        test: /\.css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                    modules: {
                        localIdentName: "[local]",
                    },
                },
            },
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        config: path.resolve(__dirname, "../postcss.config.js"),
                    },
                },
            },
        ],
    },
];

// webpack.Configuration
const config = {
    entry,
    resolve,
    output: {
        ...output,
        ...{
            chunkFilename: "js/[name].[contenthash].js",
            filename: "js/[name].[contenthash].js",
        },
    },
    context: rootPath,
    plugins: [
        ...plugins,
        new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),
        new CompressionPlugin({ test: /\.js(\?.*)?$/i, algorithm: "gzip" }),
    ],
    module: moduleOption,
    mode: "production",
    devtool: "hidden-source-map",
    optimization: {
        chunkIds: "total-size",
        mangleWasmImports: true,
        moduleIds: "size",
        removeAvailableModules: true,
        runtimeChunk: "single",
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: "all",
            }),
        ],
        splitChunks: {
            chunks: "all",
        },
    },
    experiments,
};

module.exports = config;
