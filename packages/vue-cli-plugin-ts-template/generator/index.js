const chalk = require('chalk');
const path = require('path')
const {extendPackage} = require('./utils/extend-package')
const {deleteFile} = require('./utils/file')
module.exports = (api) => {
    api.render('./template');
    // 添加依赖包
    extendPackage(api);

    api.afterInvoke(() => {
        // 删除 main.js App.vue HelloWorld.vue
        deleteFile(path.join(api.resolve(api.entryFile), '../main.js'))
        deleteFile(path.join(api.resolve(api.entryFile), '../App.vue'))
        deleteFile(path.join(api.resolve(api.entryFile), '../components/HelloWorld.vue'))
        console.log(chalk.blue('--------------执行完毕--------------'))
    })
}