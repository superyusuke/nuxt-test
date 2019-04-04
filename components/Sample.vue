<template lang="html">
  <button type="button" name="button" @click="plus">
    click times: {{ num }}
  </button>
</template>
​
<script>
export default {
  data() {
    return {
      name: 'takanorip',
      num: 0
    }
  },
  methods: {
    plus() {
      this.num++
    }
  }
}
</script>
