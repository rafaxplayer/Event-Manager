var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {

    entry:{
        path: path.resolve(__dirname + '/app/index.js')
        
    },
    output:{
        path:path.resolve(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/(\.js|.jsx)$/,
                include:path.resolve(__dirname + '/app'),
                loader:'babel-loader',
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                        // path where the images will be saved
                            name: 'assets/img/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 65
                            },
                            pngquant:{
                                quality: "10-20",
                                speed: 4
                            },
                            svgo:{
                                plugins: [
                                {
                                    removeViewBox: false
                                },
                                {
                                    removeEmptyAttrs: false
                                }
                                ]
                            },
                            gifsicle: {
                                optimizationLevel: 7,
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 7,
                                interlaced: false
                            }
                        }
                    }
                ]
            }
            
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css','.less','.png']
    },
    plugins: [HtmlWebpackPluginConfig]
}