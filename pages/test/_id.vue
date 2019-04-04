<template>
  <div>
    <h2>test/:id</h2>
    <div>id: {{ id }}</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped></style>
