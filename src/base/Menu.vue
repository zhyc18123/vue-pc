<template>
    <el-menu default-active="1-1" class="el-menu-vertical-demo">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>后台管理</span>
            </template>
            <router-link to="/student">
                <el-menu-item index="1-1">
                    学员管理
                </el-menu-item>
            </router-link>
            <router-link to="/">
                <el-menu-item index="1-2">
                    导师管理
                </el-menu-item>
            </router-link>
            <router-link to="/course">
                <el-menu-item index="1-3">
                    课程管理
                </el-menu-item>
            </router-link>
            <router-link to="/pass-rule">
                <el-menu-item index="1-4">
                    通关规则管理
                </el-menu-item>
            </router-link>
            <router-link to="/">
                <el-menu-item index="1-5">
                    系统管理
                </el-menu-item>
            </router-link>
            <el-submenu index="1-6">
          <template slot="title">勋章管理</template>
            <router-link to="/medal-type">
                <el-menu-item index="1-6-1">
                    勋章类别管理
                </el-menu-item>
            </router-link>
            <router-link to="/medal">
                <el-menu-item index="1-6-2">
                    勋章列表
                </el-menu-item>
            </router-link>
        </el-submenu>
            <router-link to="/question">
                <el-menu-item index="1-7">
                    题库管理
                </el-menu-item>
            </router-link>
            <router-link to="/exam">
                <el-menu-item index="1-8">
                    试卷管理
                </el-menu-item>
            </router-link>
            <router-link to="/source">
                <el-menu-item index="1-9">
                    资源管理
                </el-menu-item>
            </router-link>
            <router-link to="/">
                <el-menu-item index="1-10">
                    信息管理
                </el-menu-item>
            </router-link>
        </el-submenu>
    </el-menu>
    </div>
</template>

<script>
export default {
    name: 'v-menu'
}
</script>

<style lang="stylus" scoped>
</style>
