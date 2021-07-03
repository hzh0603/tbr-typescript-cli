module.exports = pkg => {
    const prompts = [
      {
        type: 'list',
        name: 'ui',
        message: 'UI框架选择',
        choices: [
          {
            name: "Element UI",
            value: "element"
          },
          {
            name: 'Ant Design of Vue',
            value: 'antdv'
          }
        ],
        default: 'element'
      },
      {
        type: 'list',
        name: 'importStyle',
        message: '引入方式',
        choices: [
          {
            name: "全局引用",
            value: "global"
          },
          {
            name: '局部引用',
            value: 'part'
          }
        ],
        default: 'global'
      },
    ]
    return prompts
  }