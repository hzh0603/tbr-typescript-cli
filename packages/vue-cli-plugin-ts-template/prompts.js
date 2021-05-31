module.exports = pkg => {
    const prompts = [
      {
        type: 'input',
        name: 'publicPath',
        message: '请输入项目的上下文',
        // validate: input => input === "en" ? true : '请输入正确的文字。。。',
        default: '/'
      },
    ]
    return prompts
  }