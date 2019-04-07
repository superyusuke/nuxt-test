<template>
  <div>
    <h2>top</h2>
    <div>{{ myName }}</div>
    <button @click="commit">changeName commit mutation</button>
    <button @click="dispatch">changeName dispatch action</button>
  </div>
</template>

<script>
export default {
  computed: {
    myName() {
      return this.$store.state.user.userName
    }
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
