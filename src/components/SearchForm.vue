<template>
  <div class="search-parent-selector">
    <div class="search-child-selector">
      <div class="search-form">
        <input type="text" class="form-input" v-model="query" />
        <button class="form-button" @click="triggerSearch()">ARA</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    triggerSearch () {
      this.$emit('searchQuery', this.query)
    }
  }
}
</script>

<style lang="scss">
.search {
  &-parent-selector {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  &-child-selector {
    display: inline-block;
    width: 600px;
  }
  &-form {
    >* {
      float: left;
    }
    .form-input {
      width: 65%;
      height: 45px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 0 10px;
      outline: none;
    }
    .form-button {
      float: right;
      width: 30%;
      height: 47px;
      border: none;
      background-color: #27ae60;
      color: #ffffff;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
    }
  }
}
</style>
