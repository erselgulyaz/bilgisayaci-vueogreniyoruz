<template>
  <div>
    {{ itemTitle }}
    <hr>
    {{ itemContent }}
  </div>
</template>

<script>
export default {
  props: {
    itemTitle: { type: String, required: true },
    itemContent: { type: String }
  }
}
</script>

<style scoped>
</style>
