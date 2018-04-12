<template>
  <div id="app">
    <search-form v-on:searchQuery="handleSearch" />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
export default {
  data () {
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    handleSearch (q) {
      alert(q)
      fetch(`https://jsonplaceholder.typicode.com/users/${q}`)
        .then((res) => { return res.json() })
        .then((res) => { console.log(res) })
    }
  },
  components: {
    SearchForm
  }
}
</script>

<style lang="scss">
</style>
