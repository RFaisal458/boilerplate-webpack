const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Untuk render sass
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Untuk render html
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack"); // to access built-in plugins

module.exports = {
    mode: "development",

    devtool: "inline-source-map",
    /*When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if                                      you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack                                        trace will simply point to bundle.js. This isn't always helpful as you probably want to know exactly which source file the error came from*/

    entry: ["./src/js/script.js", "./src/sass/main.scss"], // Entry File yang akan di gunakan atau template yang akan di gunakan
    devServer: {
        // Untuk membuat server lokal
        contentBase: [path.join(__dirname, "dist"),
            // path.join(__dirname, "src")
        ],
        compress: true,
        watchContentBase: true,
        port: 4580,
        hot: true,
        inline: true,
        writeToDisk: true,
        watchOptions: {
            poll: true,
            ignored: "/node_modules/"
        },
        open: true
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "./script.js", // Output dari javascriptnya
        hotUpdateChunkFilename: 'hot/hot-update.js', // membuat file hot-update.js dimasukan terlebih dahulu ke folder hot agar rapih
        hotUpdateMainFilename: 'hot/hot-update.json' // membuat file hot-update.json dimasukan terlebih dahulu ke folder hot agar rapih
    },
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/, // rule untuk sass dan css
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./dist"
                        },
                    },
                    "css-loader",
                    "sass-loader", // kita akan menggunakan sass loader untuk convert sass ke css
                ],
            },
            {
                test: /\.(png|jpe?g|svg|gif|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    publicPath: "asset/images",
                    outputPath: 'asset/images',
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    publicPath: "asset/fonts",
                    outputPath: 'asset/fonts',
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(es6|js|jsx)$/, // rule untuk js
                exclude: /node_modules/,
                loader: "babel-loader", // menggunakan babel loader
                query: {
                    presets: ["@babel/preset-env"], // Menggunakan preset env
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(), // untuk mengetahui sejauh mana progress compiled
        new MiniCssExtractPlugin({
            filename: "./style.css", // output nama apa yang kita inginkan dari sass yang di atas
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/html/index.html"), // template html mana yang akan kita render
            filename: path.resolve(__dirname, "dist/index.html"), // file yang akan di hasilkan
        }),
    ],
};