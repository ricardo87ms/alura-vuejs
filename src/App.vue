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
      fotos: [
        {
          url: "https://www.petz.com.br/blog/wp-content/uploads/2019/04/como-saber-se-o-cachorro-esta-com-febre-doencas.jpg",
          titulo: "cachorro"
        },
        {
          url: "https://www.petlove.com.br/dicas/wp-content/uploads/2018/05/golden-idoso.jpg",
          titulo: "cachorrão"
        },
      ]
    }
  }
}
</script>

<style>
</style>
