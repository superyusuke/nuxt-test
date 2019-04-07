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
  },
  async asyncData({ $axios, route }) {
    const url = 'https://api.myjson.com/bins/159wqn'
    const res = await $axios.get(url)
    console.log(route.params.id, 'routes')
    return res.data
  }
}
</script>

<style scoped></style>
