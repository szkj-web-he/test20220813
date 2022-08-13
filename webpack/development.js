const { entry, plugins, moduleOption, resolve, output, experiments } = require("./common");
const exclude = require("./exclude");
const rootPath = require("./rootPath");
const path = require("path");

/**

 type ConfigProps = webpack.Configuration & {
    devServer: webpackDevServer.Configuration;
};
*/

moduleOption.rules = [
    ...moduleOption.rules,
    {
        test: /\.(sa|sc)ss$/,
        use: [
            {
                loader: "style-loader",
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
                loader: "style-loader",
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

const config = {
    entry,
    context: rootPath,
    resolve,
    plugins: [...plugins],
    output: {
        ...output,
        ...{
            publicPath: "/", 
            chunkFilename: "js/[name].js",
            filename: "js/[name].js",
        },
    },
    watchOptions: {
        ignored: exclude,
    },
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    optimization: {
        runtimeChunk: true,
        minimize: false,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        nodeEnv: false,
    },
    cache: {
        allowCollectingMemory: true,
        // memoryCacheUnaffected: true,
        // store: "pack",
        // buildDependencies: {
        //     // This makes all dependencies of this file - build dependencies
        //     config: [__filename],
        //     // 默认情况下 webpack 与 loader 是构建依赖。
        // },
    },
    experiments: Object.assign(
        {},
        experiments,
        // { cacheUnaffected: true }
        // { lazyCompilation: true }
    ),
    //测 包文件时打开
    // snapshot: {
    //     managedPaths:[],
    // },

    module: moduleOption,
    devServer: {
        compress: true,
        host: "0.0.0.0",
        port: "auto",
        historyApiFallback: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
};

module.exports = config;
