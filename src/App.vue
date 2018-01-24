<template>
  <div id="app">
    <v-header/>

<el-container>
  <el-aside width="241px" style="background-color: #f8f8f8">
    <v-menu/>
  </el-aside>
  <el-main style="background-color: #f8f8f8">
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
  </el-main>
</el-container>

    <!--<v-footer/>-->
  </div>
</template>

<script>
import VHeader from 'base/Header'
import VFooter from 'base/Footer'
import VMenu from 'base/Menu'
export default {
  name: 'app',
  components: {
    VHeader,
    VFooter,
    VMenu
  }
}
</script>

<style lang="stylus" scoped>
#app
  min-height 100%
  position relative
</style>

