import Vue from 'vue';
<% if(options.importStyle === 'global') {%>
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
<%} else {%>
import { Button, Select } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
<%}%>