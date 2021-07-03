import Vue from 'vue';
<% if(options.ui === 'element') { %>
    <% if(options.importStyle === 'global') {%>
        import ElementUI from 'element-ui';
        import 'element-ui/lib/theme-chalk/index.css';
        Vue.use(ElementUI);
        <% } else {%>
            // 局部引用
        <%}%>
<%} else if (options.importStyle === 'global') {%>
        import Antd from 'ant-design-vue';
        import 'ant-design-vue/dist/antd.css';
        Vue.use(Antd);
        <% } else {%>
            // 局部引用
        <%}%>