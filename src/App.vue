<template>
  <div>

    <router-view></router-view>
    <Footer />
  </div>

</template>
<script>
// footer
import Footer from './components/Footer/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'></style>
 