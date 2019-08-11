<script>
export default {
  name: 'Example1',
  data() {
    return {
      response: '—',
      error: null
    }
  },
  methods: {
    async helloWorld() {
      try {
        const res = await this.$axios.$get('/.netlify/functions/hello-world')
        this.response = res
        this.error = null
      } catch (e) {
        this.error = e.response
        this.response = '—'
      }
    }
  }
}
</script>

<template>
  <div>
    <h2>1. Hello, World!</h2>
    <ElButton type="primary" data-cy="btn-hello-world" @click="helloWorld()">Hello</ElButton>
    <p>Response: {{ response }}</p>
    <p v-if="error" style="color:red;"><strong>Error {{ error.status }}</strong><br>{{ error.data }}</p>
  </div>
</template>
