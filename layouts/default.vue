<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>

</style>

<script>
export default {
  middleware: ['auth']
}
</script>
