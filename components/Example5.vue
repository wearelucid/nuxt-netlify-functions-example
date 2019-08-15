<script>
export default {
  name: 'Example5',
  data() {
    return {
      form: {},
      response: '—',
      error: null,
      ip: null
    }
  },
  mounted() {
    this.getBrowserIp()
  },
  methods: {
    async getBrowserIp() {
      try {
        const res = await this.$axios.$get('https://icanhazip.com')
        this.ip = res
        this.error = null
      } catch (e) {
        this.error = e.response
        this.ip = null
      }
    },
    async icanhazip() {
      try {
        const res = await this.$axios.$get(
          '/.netlify/functions/icanhazip/icanhazip'
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
    @submit.native.prevent="icanhazip()"
  >
    <h2>5. icanhazip.com</h2>
    <p><em>API call done by lambda function</em></p>
    <p>Your IP: {{ ip }}</p>
    <ElButton type="primary" @click="icanhazip()">
      🤖 Haz AWS IP please
    </ElButton>
    <ElButton type="info" @click="response = '—'">Clear</ElButton>
    <p>Response: {{ response }}</p>
    <p v-if="error" style="color:red;">
      <strong>Error {{ error.status }}</strong>
      <br />
      {{ error.data }}
    </p>
  </ElForm>
</template>
