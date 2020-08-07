const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Untuk render sass
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Untuk render html

module.exports = {
    mode: "development",
    
    devtool: "inline-source-map",/*When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if                                      you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack                                        trace will simply point to bundle.js. This isn't always helpful as you probably want to know exactly which source file the error came from*/
    
    entry: ["./src/js/script.js", "./src/sass/main.scss"], // Entry File yang akan di gunakan atau template yang akan di gunakan
    devServer: { // Untuk membuat server lokal
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        watchContentBase: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "js/script.js" // Output dari javascriptnya
    },
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/, // rule untuk sass dan css
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./dist/",
                        },
                    },
                    "css-loader",
                    "sass-loader" // kita akan menggunakan sass loader untuk convert sass ke css
                ],
            },
            {
                test: /\.js?$/, // rule untuk js
                exclude: /node_modules/,
                loader: "babel-loader", // menggunakan babel loader
                query: {
                    presets: ["@babel/preset-env"], // Menggunakan preset env
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/style.css", // output nama apa yang kita inginkan dari sass yang di atas
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/html/index.html"),// template html mana yang akan kita render
            filename: path.resolve(__dirname, "dist/index.html")
        })
    ],
};
