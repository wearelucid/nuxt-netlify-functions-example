<template>
  <ElContainer direction="vertical" class="layout">
    <ElHeader height="auto">
      <h1>nuxt-netlify-functions-example</h1>
      <a
        href="https://github.com/wearelucid/nuxt-netlify-functions-example"
        target="_blank"
      >
        GitHub Repo
      </a>
    </ElHeader>
    <ElMain>
      <nuxt />
    </ElMain>
    <ElFooter>
      Created by
      <a href="https://github.com/wearelucid" target="_blank">Lucid</a>
    </ElFooter>
  </ElContainer>
</template>

<style>
/* NUXT default transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.layout {
  max-width: 600px;
  margin: 0 auto;
}
</style>
