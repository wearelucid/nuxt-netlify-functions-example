<template>
  <ElForm
    ref="form"
    :model="form"
    inline
    label-width="auto"
    label-position="left"
    @submit.native.prevent="helloNamePost(form.name)"
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
      type="primary"
      data-cy="btn-hello-name-post"
      @click="helloNamePost(form.name)"
    >
      👋 Say hello
    </ElButton>
    <ElButton
      type="danger"
      data-cy="btn-hello-name-post-error"
      @click="helloNamePostError(form.name)"
    >
      .$get() Error
    </ElButton>
    <p>Response: {{ response }}</p>
    <p v-if="error" style="color: red">
      <strong>Error {{ error.status }}</strong>
      <br />
      {{ error.data }}
    </p>
  </ElForm>
</template>

<script>
export default {
  name: 'Example3',
  data() {
    return {
      form: {
        name: '',
      },
      response: '—',
      error: null,
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
    },
  },
}
</script>
