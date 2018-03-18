<template>
    <div>
        <p>{{customText}}</p>
    </div>
</template>

<script>
export default {
  props: {
    customText: { type: String, required: true }
  }
}
</script>

<style scoped>
</style>
