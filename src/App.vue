<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="(foto, index) in fotos" :key="index"><img :src="foto.url" :alt="foto.titulo"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alura Pic",
      fotos: []
    }
  },
  created(){
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => {
        this.fotos = res.body;
      }, err => console.log(err));
  }
}
</script>

<style>
</style>
