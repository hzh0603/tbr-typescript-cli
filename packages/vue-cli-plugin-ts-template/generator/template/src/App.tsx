import { Component, Vue } from 'vue-property-decorator';
import './App.less'

@Component
export default class App extends Vue {
    render() {
      return (
      <div id="app">
        <router-view/>
     </div>
    )
    }
}

