<template>
  <div id="app">
    <v-header/>
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
    <v-footer/>
  </div>
</template>

<script>
import VHeader from 'base/Header'
import VFooter from 'base/Footer'
export default {
  name: 'app',
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style lang="stylus" scoped>
#app
  min-height 100%
  position relative
</style>

