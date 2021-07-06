const fs = require('fs')
module.exports = (api) => {
    let renderPage = {};
    // 获取选择的UI组件类型
    const { ui, importStyle } = api.options
    let dependencies = {}
    if(ui === 'element') {
        dependencies['element-ui'] = '2.15.3'
        renderPage['./src/plugins/element.js'] = './template/src/plugins/element.js'
    } else {
        dependencies['ant-design-vue'] = '1.7.6'
        renderPage['./src/plugins/antdv.js'] = './template/src/plugins/antdv.js'
    }
    if(importStyle === 'part') {
        dependencies['babel-plugin-component'] = '^1.1.1'
    }
    api.extendPackage({
        dependencies
    })
    api.render(renderPage, api.options);

    api.injectImports('src/main.ts', `import './plugins/${ui}.js'`)

    api.onCreateComplete(() => {
        // 局部引用处理按需加载
        if(importStyle === 'part') {
            let pluginComponent = [];
            if(ui === 'Element') {
                pluginComponent = ['component', { 'libraryName': 'element-ui', 'styleLibraryName': 'theme-chalk'}] 
            } else {
                pluginComponent = ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]
            }
            const rcPath = api.resolve('./babel.config.js')
            const bableConfig = require(rcPath)
            // 配置添加按需加载配置
            bableConfig.plugins = bableConfig.plugins || []
            bableConfig.plugins.push(pluginComponent)
            // 重新写入babel.config.js
            fs.writeFileSync(rcPath, JSON.stringify(bableConfig, null, 2), {encoding: 'utf8'})
        }
    })
}