# tbr-typescript-cli 
> 一套生成vue typescript 项目模板代码

# 本地项目生成

## 使用远程preset
``` shell
vue create -p github:hzh0603/tbr-typescript-cli --clone your-project-name
```

## 使用本地preset
> 本地新建preset.json, 内容如下
```json
{
    "plugins": {
      "vue-cli-plugin-ts-template": {
        "prompts": true
      },
      "vue-cli-plugin-ui-template": {
        "prompts": true
      }
    }
}
```

> 生成项目
``` shell
// -p 后面是新建的preset.json 地址
vue create -p ./preset.json --clone your-project-name

```
