<template>
  <div class="container">
    <img :src="Src" style="width:100%;" class="kayanResim" />
    <div class="centered">{{ Name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    Src: String,
    Name: String,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  width: 30%;
  margin-bottom: 30px;
}

.centered {
  color: white;
  font-size: 2rem;
  font-family: Courgette;
}

.kayanResim {
  margin-top: 10px;
  cursor: pointer;
}

@media (max-width: 576px) {
  .kayanResim {
    height: 110px;
  }
  .centered{
    font-size:13px;
  }
}

@media (min-width: 576px) {
  .kayanResim {
    height: 150px;
  }
  .centered{
    font-size:18px;
  }
}

@media (min-width: 992px) {
  .kayanResim {
    height: 250px;
  }
   .centered{
    font-size:20px;
  }
}

@media (min-width: 1200px) {
  .kayanResim {
    height: 300px;
  }
    .centered{
    font-size:25px;
  }
}
</style>