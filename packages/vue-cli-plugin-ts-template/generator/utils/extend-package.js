function extendPackage(api) {
    api.extendPackage({
        dependencies: {
            "core-js": "^3.6.5",
            "vue": "^2.6.11",
            "vue-class-component": "^7.2.3",
            "vue-property-decorator": "^9.1.2",
            "vue-router": "^3.2.0",
            "vuex": "^3.4.0",
            "vuex-class-modules": "^1.3.0"
        },
        "devDependencies": {
            "@vue/cli-plugin-babel": "~4.5.0",
            "@vue/cli-plugin-router": "~4.5.0",
            "@vue/cli-plugin-typescript": "~4.5.0",
            "@vue/cli-plugin-vuex": "~4.5.0",
            "@vue/cli-service": "~4.5.0",
            "less": "^3.0.4",
            "less-loader": "^5.0.0",
            "typescript": "~4.1.5",
            "vue-template-compiler": "^2.6.11"
          }
    })
}

module.exports = {
    extendPackage
}