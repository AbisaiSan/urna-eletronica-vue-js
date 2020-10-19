<template>
  <div id="app">
    <app-urna/>
    <app-tela/>
    <app-teclado/> 
  </div>
</template>

<script>
import Urna from './components/views/Urna'
import Tela from './components/views/Tela'
import Teclado from './components/views/Teclado'

export default {
components: {'app-urna':Urna,'app-tela':Tela,'app-teclado':Teclado},
data(){
return {
			componente:{Urna,Tela,Teclado}
		}
	}
}

</script>

<style >

</style>