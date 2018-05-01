<template>
  <div id="app">
    {{$store.state.message}}
    <hr>
    {{ this.$store.getters.firstMessage }}
    <hr>
    <button @click="changeStateMessage">Mutations ile message değerini değiştir</button>
    <hr>
    <button @click="changeStateMessagewithAction">Actions ile message değerini değiştir</button>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    console.log(this.callMessage())
  },
  methods: {
    callMessage () {
      return this.$store.getters.firstMessage
    },
    changeStateMessage () {
      this.$store.commit('changeMessage', '#vueogreniyoruz eğitim serisi')
    },
    changeStateMessagewithAction () {
      this.$store.dispatch('triggerChangeMessage', 'Vuex kullanımı')
    }
  }
}
</script>

<style lang="scss">
</style>
