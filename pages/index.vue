<template>
  <div>
    <h2>top</h2>
    <div>{{ myName }}</div>
    <button @click="commit">changeName commit mutation</button>
    <button @click="dispatch">changeName dispatch action</button>
    <template v-for="(o, index) in member">
      <div :key="index">{{ o }}</div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    myName() {
      return this.$store.state.user.userName
    }
  },
  async asyncData({ $axios }) {
    const url = 'https://api.myjson.com/bins/159wqn'
    const res = await $axios.get(url)
    return res.data
  },
  methods: {
    commit() {
      this.$store.commit('user/changeName', 'changedName')
    },
    dispatch() {
      this.$store.dispatch('user/changeName', 'changedName')
    }
  }
}
</script>

<style></style>
