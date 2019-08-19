<script>
export default {
  name: 'Example2',
  data() {
    return {
      form: {
        name: ''
      },
      response: '—',
      error: null
    }
  },
  methods: {
    async helloName(name) {
      try {
        const res = await this.$axios.$get(
          `/.netlify/functions/hello-name?name=${name}`
        )
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
  <ElForm
    ref="form"
    :model="form"
    inline
    label-width="auto"
    label-position="left"
    @submit.native.prevent="helloName(form.name)"
  >
    <h2>2. Hello, {name}</h2>
    <ElFormItem label="Name">
      <ElInput v-model="form.name" placeholder="Your name" required />
    </ElFormItem>
    <ElButton type="primary" @click="helloName(form.name)">
      👋 Say hello
    </ElButton>
    <p>Response: {{ response }}</p>
    <p v-if="error" style="color:red;">
      <strong>Error {{ error.status }}</strong>
      <br />
      {{ error.data }}
    </p>
  </ElForm>
</template>
