const chalk = require('chalk');
const {extendPackage} = require('./utils/extend-package')
module.exports = (api) => {
    api.render('./template');
    // 添加依赖包
    extendPackage(api)
    api.afterInvoke(() => {
       console.log(chalk.blue('--------------执行完毕--------------'))
    })
    // api.registerCommand(
    //     'greet',
    //     {
    //       description: 'Writes a greeting to the console',
    //       usage: 'vue-cli-service greet [options]',
    //       options: { '--name': 'specifies a name for greeting' }
    //     },
    //     args => {
    //       if (args.name) {
    //         console.log(`👋 Hello, ${args.name}!`);
    //       } else {
    //         console.log(`👋 Hello!`);
    //       }
    //     }
    //   )
}