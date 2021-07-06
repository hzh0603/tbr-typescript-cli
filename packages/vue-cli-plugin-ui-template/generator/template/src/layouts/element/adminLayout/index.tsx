import {Vue, Component} from 'vue-property-decorator'
import './index.less'
@Component
export default class AdminLayout extends Vue {
    public collapsed: boolean = false;
    public render() {
        return (
            <el-container class="admin-layout">
                <el-menu 
                    class="el-menu-vertical-demo"
                    collapse={this.collapsed}
                    background-color="#545c64"
                    text-color="#fff"
                    router="true"
                    >
                    <el-menu-item index="/adminLayout/home" >
                            <i class="el-icon-menu"></i>
                            <span slot="title">home</span>
                    </el-menu-item>
                    <el-menu-item index="/adminLayout/error/403">
                            <i class="el-icon-menu"></i>
                            <span slot="title">403</span>
                    </el-menu-item>
                    <el-menu-item index="/adminLayout/error/404">
                        <i class="el-icon-menu"></i>
                        <span slot="title">404</span>
                    </el-menu-item>
                </el-menu>
                <el-container class="right-container">
                    <el-header>
                    </el-header>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        )
    }
}