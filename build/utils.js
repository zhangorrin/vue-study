// 用于做相应的merge处理
const merge = require('webpack-merge')

// 多页面路径
let entryFiles = [
    'src/pages/index/index.js',
    'src/pages/page1/page1.js'
];

// pages 多入口配置
exports.setPages = function(configs) {

    let map = {};

    entryFiles.forEach(filePath => {

        console.log( "js:" + filePath)

        let filename = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
        let tmp = filePath.substring(0, filePath.lastIndexOf('.'));

        let conf = {
            // page 的入口
            entry: filePath, 
            // 模板来源
            template: tmp + '.html', 
            // 在 dist/index.html 的输出
            filename: filename + '.html', 
            // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
            chunks: ['chunk-vendors', 'chunk-common', filename], 
            //inject: false,
        };

        if (configs) {
            conf = merge(conf, configs)
        }

        if (process.env.NODE_ENV === 'production') {
            conf = merge(conf, {
                minify: {
                    removeComments: true, // 删除html中的注释代码
                    collapseWhitespace: true, // 删除html中的空白符
                },
                chunksSortMode: 'manual'// 按manual的顺序引入
            })
        }

        map[filename] = conf;
    })
    console.log(map)
    return map
}