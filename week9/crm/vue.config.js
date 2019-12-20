module.exports = {
    publicPath: './',
    devServer: {
        // proxy代理
        proxy: 'http://localhost:3000'
    },
    lintOnSave: false, // 不让eslint报错
    configureWebpack: {
        module: {
            // rules: [{

            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     use: [{
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 10000,
            //                 name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //             }
            //         },
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 bypassOnDebug: true,
            //             }
            //         }
            //     ]
            // }]
        }
    }
}