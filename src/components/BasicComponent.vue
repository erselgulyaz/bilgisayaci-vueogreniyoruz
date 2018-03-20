<template>
    <div>
      <div :key="item" v-for="item in list">
        {{item.id}} - {{item.name}} {{item.surname}}
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    list: { type: Array, required: true }
  }
}
</script>

<style scoped>
</style>
