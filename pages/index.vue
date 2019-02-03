<script>
export default {
  data() {
    return {
      examples: {
        helloWorld: {
          response: '—',
          error: null
        },
        helloName: {
          name: '',
          response: '—',
          error: null
        }
      }
    }
  },
  methods: {
    async helloWorld() {
      try {
        const res = await this.$axios.$get('/.netlify/functions/hello-world')
        this.examples.helloWorld.response = res
        this.examples.helloWorld.error = null
      } catch (e) {
        this.examples.helloWorld.error = e.response
      }
    },
    async helloName(name) {
      try {
        const res = await this.$axios.$get(
          `/.netlify/functions/hello-name?name=${name}`
        )
        this.examples.helloName.response = res
        this.examples.helloName.error = null
      } catch (e) {
        this.examples.helloName.error = e.response
      }
    }
  }
}
</script>

<template>
  <div>
    <hr class="separator">
    <h2>Hello, World!</h2>
    <ElButton slot="append" type="primary" :loading="false" @click="helloWorld()">Ok cool</ElButton>
    <p>Response: {{ examples.helloWorld.response }}</p>
    <p v-if="examples.helloWorld.error" style="color:red;"><strong>Error {{ examples.helloWorld.error.status }}</strong><br>{{ examples.helloWorld.error.data }}</p>
    <hr class="separator">
    <h2>Hello, {name}</h2>
    <ElInput v-model="examples.helloName.name" placeholder="Your name">
      <ElButton slot="append" type="primary" @click="helloName(examples.helloName.name)">👋 Say hello</ElButton>
    </ElInput>
    <p>Response: {{ examples.helloName.response }}</p>
    <p v-if="examples.helloName.error" style="color:red;"><strong>Error {{ examples.helloName.error.status }}</strong><br>{{ examples.helloName.error.data }}</p>
    <hr class="separator">
  </div>
</template>

<style lang="scss">
.separator {
  margin: 3em 0;
  border-color: lightgray;
  border-width: 0.5px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
