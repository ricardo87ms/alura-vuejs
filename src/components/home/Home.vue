<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" placeholder="Filtre pelo titulo..." @input="filtro = $event.target.value">
    {{ filtro }}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="(foto, index) in fotosComFiltro" :key="index">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao tipo="button"
                     rotulo="REMOVER"
                     @botaoAtivado="remove(foto)"
                     :confirmacao="true"
                     estilo="perigo"/>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva';
import Botao from '../shared/botao/Botao';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {
    return {
      titulo: "Alura Pic",
      fotos: [],
      filtro: ''
    }
  },

  methods: {
    remove(foto){
        alert('remover foto ' + foto.titulo);
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

<style scoped>
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
