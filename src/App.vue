<template lang="pug">
#app
  om-header

  router-view
  
  om-footer
</template>

<script>
import OmFooter from '@/components/layout/Footer.vue'
import OmHeader from '@/components/layout/Header.vue'

export default {
  'name': 'app',  
  components:{
    OmFooter,
    OmHeader
  }
}
// En Vue.js
// $set es una función del framework
// Ej. this.$set(<objeto a agregar una propiedad>, <nombre de la propiedad>, <valor de esa propiedad>) 
//    this.$set(this.person, 'lastName', 'Anaya')

// En ES6
// Esto va a crear un objeto nuevo y se va a asignar al objeto deseado. agregando lo que hacia falta
// Ej. this.person = Object.assign({}, <Objeto que quiero mezclar> , { <Que se va a incorporar> })
//    this.person = Object.assign({}, this.person, { a: 1, b: 2 })
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results{
  	margin-top: 50px;
  }

  .is-active{
    border: 3px #23d160 solid;
  }
</style>
