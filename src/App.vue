<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" placeholder="Filtre pelo titulo..." @input="filtro = $event.target.value">
    {{ filtro }}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="(foto, index) in fotosComFiltro" :key="index">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel';
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data() {
    return {
      titulo: "Alura Pic",
      fotos: [],
      filtro: ''
    }
  },
  computed: {
    fotosComFiltro() {
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
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
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
  .centralizado {
    text-align: center;
  }
  .lista-fotos {
    list-style: none;
  }
  .lista-fotos-item {
    display: inline-block;
  }
  .filtro {
    display: block;
    width: 100%;
  }
</style>
