import { Component, Prop, Vue } from 'vue-property-decorator';
import './index.less'
@Component
export default class HelloWorld extends Vue {
  @Prop() public msg!: string;
  
  public render() {
      return (
        <div class="hello">
            <h1>{ this.msg }</h1>
            <p>For a guide and recipes on how to configure / customize this project,<br/>check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
            </p>
        </div>
      )
  }
}