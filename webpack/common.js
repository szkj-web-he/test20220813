const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const rootPath = require("./rootPath");
const exclude = require("./exclude");
const htmlPlugin = require("./htmlPlugin");
const BabelConfig = require("./findRootBabel");
// webpack.Entry
/**
 * 入口文件
 * core-js
 * regenerator-runtime/runtime
 * 做兼容处理
 */
const entry = {
    app: [path.join(__dirname, "../src/Assets/js/index.js"), "./src/index.tsx"],
};

//  webpack.ModuleOptions
const moduleOption = {
    rules: [
        {
            test: /.ico$/,
            type: "asset/resource",
            generator: {
                filename: "/[name][ext][query]",
            },
        },
        {
            test: /.(woff2?|pdf|eot|ttf|svg|opentype|otf)$/,
            type: "asset/resource",
            generator: {
                filename: "assets/[name][ext][query]",
            },
        },
        {
            test: /.(png|jpe?g|gif)$/,
            type: "asset",
            generator: {
                filename: "assets/[hash][ext][query]",
            },
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 10kb
                },
            },
        },
        {
            test: /.jsx?$/,
            exclude,
            use: [
                {
                    loader: "babel-loader",
                    options: BabelConfig,
                },
            ],
        },
        {
            test: /.(j|t)sx?$/,
            exclude,
            use: [
                {
                    loader: "babel-loader",
                    options: BabelConfig,
                },
                {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                },
            ],
        },
    ],
};

// webpack.ResolveOptions
const resolve = {
    alias: {
        "~": "/src",
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    modules: [path.resolve(rootPath, "./src"), "node_modules"],
    mainFields: ["main", "browser", "module"],
};

const plugins = [
    new HtmlWebpackPlugin(htmlPlugin),

    new ForkTsCheckerWebpackPlugin({
        eslint: {
            enabled: true,
            files: "./src/**/*.{ts,tsx,js,jsx}",
        },
        issue: {
            exclude: ({ file }) => {
                return file?.includes("node_modules") || false;
            },
        },
        typescript: {
            enabled: true,
            diagnosticOptions: {
                semantic: true,
                syntactic: true,
            },
        },
    }),
    new webpack.ProgressPlugin({ percentBy: "entries" }),
];

const output = {
    publicPath: "./",
    clean: true,
    path: path.join(rootPath, "/build"),
    pathinfo: false,
    charset: true,
};

module.exports = {
    entry,
    moduleOption,
    resolve,
    plugins,
    output,
    experiments: {
        asyncWebAssembly: true,
        syncWebAssembly: true,
    },
};
