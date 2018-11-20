<template >

</template>

<script>
export default {
  created(){
    this.$store.dispatch('destroyToken')
    .then(response=>{
      this.$router.push('/auth/login')})
      .catch(error=>{
          this.$router.push('/auth/login')
      })
  }
}
</script>

<style lang="css">
</style>
