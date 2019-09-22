import Home from './components/home/Home';
import Cadastro from './components/cadastro/Cadastro';

export const routes = [
    { path: '', component: Home, titulo: 'Home'},
    { path: '/cadastro', component: Cadastro, titulo: "Cadastro"},
];