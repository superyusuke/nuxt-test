<template>
  <div>
    <h2>/:userName</h2>
    <div>userName: {{ userName }}</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    userName() {
      return this.$route.params.userName
    }
  }
}
</script>

<style scoped></style>
