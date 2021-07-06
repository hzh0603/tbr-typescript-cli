import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/helloWorld';
import logo from '@/assets/logo.png';
import { userModule } from '@/store/modules'
import './index.less'
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
    get name() {
      // return userModule.firstName + userModule.lastName
      return userModule.fullName
    }

    public render() {
      return (
        <div class="home">
          <img alt="Vue logo" src={logo} />
          <p title="点击通过store切换名称" onclick={this.handleClick}>hello: {this.name}</p>
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        </div>
      )
    }

  public handleClick() {
    userModule.loadUser()
  }
}