import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
// 解决报错 https://blog.csdn.net/weixin_35456031/article/details/112271642
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
 
    [propName: string]: any;
 
  }
}

