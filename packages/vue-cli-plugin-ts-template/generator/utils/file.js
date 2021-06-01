const {existsSync, unlinkSync} = require('fs')
const chalk = require('chalk');
function deleteFile(path) {
    // 判断文件是否存在
    const bool = existsSync(path);
    if(bool) {
        unlinkSync(path)
    }
    console.log(chalk.blue(`${path}删除成功！\n`))
}

module.exports = {
    deleteFile
}