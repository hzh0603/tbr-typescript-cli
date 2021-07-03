module.exports = (api) => {
    let renderPage = {};
    // 获取选择的UI组件类型
    const { ui } = api.options
    let dependencies = {}
    if(ui === 'element') {
        dependencies['element-ui'] = '2.15.3'
        renderPage['./src/plugins/element.js'] = './template/src/plugins/element.js'
    } else {
        dependencies['ant-design-vue'] = '1.7.6'
        renderPage['./src/plugins/antdv.js'] = './template/src/plugins/antdv.js'
    }
    api.extendPackage({
        dependencies
    })
    api.render(renderPage, api.options);

    api.injectImports('src/main.ts', `import './plugins/${ui}.js'`)
}