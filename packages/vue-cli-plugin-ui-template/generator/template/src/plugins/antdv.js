import Vue from 'vue';
<% if(options.importStyle === 'global') {%>
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
<%} else {%>
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
Vue.component(Button.name, Button);
<%}%>
