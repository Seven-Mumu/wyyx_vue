<template>
  <div>
    <HeaderNav />
    <router-view></router-view>
    <Footer />
  </div>

</template>
<script>
// 引入HeaderNav和footer
import HeaderNav from './components/HeaderNav/HeaderNav'
import Footer from './components/Footer/Footer'
export default {
  components: {
    HeaderNav,
    Footer
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'></style>
 