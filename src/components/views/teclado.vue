<template>
   <div class="teclado">
      <div class="teclado-linha">
        <div class="teclado-botao" onclick="clicou('1')">1</div>
        <div class="teclado-botao" onclick="clicou('2')">2</div>
        <div class="teclado-botao" onclick="clicou('3')">3</div>
      </div>
      <div class="teclado-linha">
        <div class="teclado-botao" onclick="clicou('4')">4</div>
        <div class="teclado-botao" onclick="clicou('5')">5</div>
        <div class="teclado-botao" onclick="clicou('6')">6</div>
      </div>
      <div class="teclado-linha">
        <div class="teclado-botao" onclick="clicou('7')">7</div>
        <div class="teclado-botao" onclick="clicou('8')">8</div>
        <div class="teclado-botao" onclick="clicou('9')">9</div>
      </div>
      <div class="teclado-linha">
        <div class="teclado-botao" onclick="clicou('0')">0</div>
      </div>
      <div class="teclado-linha">
        <div class="teclado-botao btn-branco" onclick="branco()">BRANCO</div>
        <div class="teclado-botao btn-corrige" onclick="corrige()">CORRIGE</div>
        <div class="teclado-botao btn-confirma" onclick="confirma()">CONFIRMA</div>
      </div>
    </div>
</template>

<script>


export default {
  
}
</script>

<style scoped>
  .teclado {
        background-color: #403A3A;
        margin-left: 30px;
}

.teclado-linha {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.teclado-botao {
  width: 70px;
  height: 40px;
  background-color: #000;
  color:#fff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px;
  cursor: pointer;
  box-shadow: 3px 3px 0px #555;
}

.btn-branco {
  background-color: #fff;
  color:#000;
  font-size: 16px;
}

.btn-corrige {
  background-color: #f09046;
  color:#000;
  font-size: 16px;
}

.btn-confirma {
  background-color: #15a539;
  color: #000;
  font-size: 16px;
  width: 90px;
  height: 50px;
}

</style>>


