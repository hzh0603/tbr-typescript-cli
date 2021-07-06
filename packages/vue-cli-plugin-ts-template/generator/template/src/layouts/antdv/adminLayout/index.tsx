import {Vue, Component} from 'vue-property-decorator'
import './index.less'
@Component
export default class AdminLayout extends Vue {
    public collapsed: boolean = false;
    public render() {
        return (
            <a-layout class="admin-layout">
                <a-layout-sider collapsible collapsed={this.collapsed} trigger={null}>
                    <div class="logo">
                        <a-menu theme="dark" mode="inline" default-selected-keys={['1']}>
                            <a-menu-item key="1">
                                <router-link to="/adminLayout/home">
                                    <a-icon type="appstore" />
                                    <span>home</span>
                                </router-link>
                            </a-menu-item>
                            <a-menu-item key="2">
                                <router-link to="/adminLayout/error/403">
                                    <a-icon type="video-camera" />
                                    <span>403</span>
                                </router-link>
                            </a-menu-item>
                            <a-menu-item key="3">
                                <router-link to="/adminLayout/error/404">
                                    <a-icon type="upload" />
                                    <span>404</span>
                                </router-link>
                            </a-menu-item>
                        </a-menu>
                    </div>
                </a-layout-sider>
                <a-layout>
                    <a-layout-header style="background: #fff; padding: 0">
                        <a-icon class="trigger" type={this.collapsed ? 'menu-unfold' : 'menu-fold'} onclick={() => {this.collapsed = !this.collapsed}}>
                        </a-icon>
                    </a-layout-header>
                    <a-layout-content style={{ margin: '10px', padding: '10px', background: '#fff', minHeight: '280px' }}>
                        <router-view></router-view>
                    </a-layout-content>
                </a-layout>
            </a-layout>
        )
    }
}