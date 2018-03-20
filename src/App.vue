<template>
  <div id="app">
    <div class="if-kullanimi" v-if="ifControl">Bu alan ifControl isimli seçicinin true/false değerine göre görüntülenebilir.</div>
    <hr>
    <div class="for-kullanimi" v-for="item in forArray" :key="item">
      {{item.id}} - {{item.name}} {{item.surname}}
    </div>
    <hr>
    <div class="show-kullanimi" v-show="showControl">Bu alan showControl isimli seçicinin true/false değerine göre görüntülenebilir.</div>
    <hr>
    <basic-component v-bind:list=bindArray />
    <hr>
    <div class="on-kullanimi">
      <button v-on:click="helloFunc('deneme mesajı')">Click Me!</button>
    </div>
  </div>
</template>

<script>
import BasicComponent from './components/BasicComponent.vue'
export default {
  data () {
    return {
      ifControl: true,
      forArray: [
        {
          id: 1,
          name: 'Ahmet',
          surname: 'CAN'
        },
        {
          id: 2,
          name: 'Veli',
          surname: 'KARA'
        },
        {
          id: 3,
          name: 'Fatma',
          surname: 'NUR'
        },
        {
          id: 4,
          name: 'Mamadou',
          surname: 'Niang'
        }
      ],
      showControl: false,
      bindArray: [
        {
          id: 1,
          name: 'Ahmet',
          surname: 'CAN'
        },
        {
          id: 2,
          name: 'Veli',
          surname: 'KARA'
        },
        {
          id: 3,
          name: 'Fatma',
          surname: 'NUR'
        },
        {
          id: 4,
          name: 'Mamadou',
          surname: 'Niang'
        }
      ]
    }
  },
  components: {
    BasicComponent
  },
  methods: {
    helloFunc: function (parameter) {
      alert(parameter)
    }
  }
}
</script>

<style lang="scss">
</style>
