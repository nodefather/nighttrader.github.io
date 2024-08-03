const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './sections/js/index.js', // Adjust entry point
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './exchange.html', // Path to your HTML file
            filename: 'exchange.html', // Output filename
            inject: 'body', // Inject all assets into the body
        }),
        new HtmlWebpackPlugin({
            template: './index.html', // Path to your index HTML file
            filename: 'index.html', // Output filename for index
            inject: 'body', // Inject all assets into the body
        }),
    ],
};
