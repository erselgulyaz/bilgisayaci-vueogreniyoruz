<template>
  <div id="app">
    {{message}}
    <hr>
    <span>Toplam Ürün Sayısı: {{productTotal}}</span>
    <button @click="addNewItem()">SEPETE EKLE</button>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <basic-component itemTitle="Başlık Alanı" itemContent="İçerik Alanı" />
  </div>
</template>

<script>
import BasicComponent from './components/BasicComponent.vue'
export default {
  data () {
    return {
      message: 'Hello World!',
      products: [
        {
          name: 'Ürün 1'
        }
      ]
    }
  },
  methods: {
    alertFunc () {
      alert('Hello World!')
    },
    addNewItem () {
      let item = {
        name: 'Ürün x'
      }
      this.products.push(item)
    }
  },
  computed: {
    productTotal () {
      return this.products.length
    }
  },
  created () {
    alert('sayfa yüklendi')
  },
  components: {
    BasicComponent
  }
}
</script>

<style lang="scss">
</style>
