<template>
  <div class="urna">
    <Tela/>
    <Teclado/>
  </div>
</template>

<script>

import Tela from './Tela'
import Teclado from './Teclado'
export default {
  components:{Tela,Teclado}
}
</script>

<style scoped>
  .urna {
      margin-top: 25px;
      background-color: #dbd5c9;
      padding: 30px;
      display: flex;
}
</style>>


