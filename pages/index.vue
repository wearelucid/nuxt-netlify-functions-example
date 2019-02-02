<script>
export default {
  data() {
    return {
      response: '–'
    }
  },
  mounted() {
    this.fetchyFetchy()
  },
  methods: {
    async fetchyFetchy() {
      const res = await this.$axios.$get('/.netlify/functions/hello')
      this.response = res
    }
  }
}
</script>

<template>
  <div class="Page">
    Response: {{ response }}
  </div>
</template>
