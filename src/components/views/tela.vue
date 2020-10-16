<template>
  <div class="tela">

      <div class="d-1">
        <div class="d-1-left">
          <div class="d-1-text">
            <span>SEU VOTO PARA</span>
          </div>
          <div class="d-1-title-candidato">
            <span>VEREADOR</span>
          </div>
          <div class="d-1-numeros">
            <div class="numeros"></div>
            <div class="numeros "></div>
          </div>
          <div class="d-1-info-candidato">
            <p>Nome: Tal</p>
            <p>Partido: KKK</p>
            <p>Vice-Prefeito: Fulano</p>

          </div>
        </div>
        <div class="d-1-right">

         <div class="d-1-img-candidato">
           <img src="img/candidatoPrefeito1.jpg" alt="">
           <span>Prefeito</span>
          </div>
          <div class="d-1-img-candidato small">
            <img src="img/candidatoPrefeito1.jpg" alt="">
            <span>Vice-Prefeito</span>
          </div>
         
        </div>
      </div>
      <div class="d-2">
        <p>Aperte a tecla:</p>
        <p>CONFIRMA para Confirmar este voto</p>
        <p>CORRIGE para REINICIAR este voto</p>
      </div>
    </div>
</template>

<script>


export default {
  
}
</script>

<style scoped>
  .tela {
      width: 500px;
      height: 320px;
      background: linear-gradient(to right, #E8E8E8, #C1C1C1);
      border: 2px solid #555;
      display: flex;
      flex-direction: column;
     
}

.d-1 {
  flex: 1;
  display: flex;
}

.d-1-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
}

.d-1-text {
      height: 50px;
      display: flex;
      align-items: center;
     
     
}

.d-1-title-candidato {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
}

.d-1-numeros {
      height: 50px;
} 

.numeros {
  display: inline-block;
  width: 30px;
  height: 40px;
  border: 1px solid #000;
  text-align: center;
  line-height: 40px;
  font-size: 25px;
}

.pisca {
  animation-name: pisca;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;

}
.d-1-info-candidato {
  flex: 1;
 
  line-height: 30px;
  
}
.d-1-right {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.d-1-img-candidato img {
  width: 100%;
  height: 101px;
}

.d-1-img-candidato {
  border: 1px solid #000;
  background-color: #FFF;
  text-align: center;
  font-size: 14px;
}

.d-1-img-candidato.small {
  width: 80%;
  font-size: 12px;
}

.d-2{
  height: 50px;
  font-size: 15px;
  border-top: 2px solid #000;
  padding: 10px;
}

.aviso--grande {
  font-size: 40px;
  font-weight: bold;
  line-height: 80px;
}

</style>