<script>
export default {
  name: 'Example6',
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      response: '—',
      error: null,
      rules: {
        name: [
          {
            required: true,
            message: 'Please tell me your name',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: 'Please enter a valid email address',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please enter a valid email address',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sendFormToFunction()
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async sendFormToFunction() {
      try {
        const res = await this.$axios.$post('/.netlify/functions/mailgun', {
          name: this.form.name,
          recipient: this.form.email
        })
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
  <ElForm ref="mailgunForm" :rules="rules" :model="form" label-width="80px" label-position="left">
    <h2>6. Send form submission with <a href="https://www.mailgun.com/" target="_blank">Mailgun</a></h2>
    <ElFormItem label="Name" prop="name">
      <ElInput v-model="form.name" placeholder="Your name" required />
    </ElFormItem>
    <ElFormItem label="Email" prop="email">
      <ElInput v-model="form.email" placeholder="Your email" required />
    </ElFormItem>
    <ElButton type="primary" @click="submitForm('mailgunForm')">💌 Send form</ElButton>
    <ElButton type="info" @click="resetForm('mailgunForm')">Reset</ElButton>
    <p>Response: {{ response }}</p>
    <p v-if="error" style="color:red;"><strong>Error {{ error.status }}</strong><br>{{ error.data }}</p>
  </ElForm>
</template>
