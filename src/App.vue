<template>
  <div>

    <router-view></router-view>
    <Footer />
  </div>

</template>
<script>
// footer
import Footer from './components/Footer/Footer'
import { reqAutoRecommendData } from './api'
export default {
  components: {
    Footer
  },
  mounted () {
    // const result = await reqAutoRecommendData(1, 5)
    // console.log(result)
    // this.$store.dispatch('getFindData', { page: 1, size: 5 })
    // this.$store.dispatch('getTabs')
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'></style>
 