<script>
export default {
  name: 'Example3',
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
    async helloNamePost(name) {
      try {
        const res = await this.$axios.$post(
          '/.netlify/functions/hello-name-post',
          { name }
        )
        this.response = res
        this.error = null
      } catch (e) {
        this.error = e.response
        this.response = '—'
      }
    },
    async helloNamePostError(name) {
      try {
        const res = await this.$axios.$get(
          `/.netlify/functions/hello-name-post?name=${name}`
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
    @submit.native.prevent="helloNamePost(form.name)"
    inline
    label-width="auto"
    label-position="left"
  >
    <h2>3. Hello, {name} (POST version)</h2>
    <ElFormItem label="Name">
      <ElInput
        v-model="form.name"
        placeholder="Your name"
        data-cy="input-hello-name-post"
      />
    </ElFormItem>
    <ElButton
      @click="helloNamePost(form.name)"
      type="primary"
      data-cy="btn-hello-name-post"
    >
      👋 Say hello
    </ElButton>
    <ElButton
      @click="helloNamePostError(form.name)"
      type="danger"
      data-cy="btn-hello-name-post-error"
    >
      .$get() Error
    </ElButton>
    <p>Response: {{ response }}</p>
    <p v-if="error" style="color:red;">
      <strong>Error {{ error.status }}</strong>
      <br />
      {{ error.data }}
    </p>
  </ElForm>
</template>
