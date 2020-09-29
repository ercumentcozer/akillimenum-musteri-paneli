<template>
  <div class="wrapper" @click="comeBack">
    <i class="fas fa-arrow-left">
      <p style="display:inline-block; margin-left:10px; font-family:arial; ">Geri Dön</p>
    </i>
  </div>
</template>

<script>
export default {
  methods: {
    comeBack() {
      this.$router.push({ path: `/${this.goTo}` });
    },
  },
  props: {
    goTo: String,
  },
};
</script>

<style scoped>
.wrapper {
  background: #007bff;
  color: white;
  border-radius: 5px;
  width: 100px;
  text-align: center;
  cursor: pointer;
}
@media (max-width: 576px) {
  .wrapper {
    width: 70px;
    font-size: 8px;
  }
  p {
    margin-left: 4px !important;
  }
}
@media (min-width: 576px) {
  .wrapper {
    width: 90px;
    font-size: 12px;
  }
  p {
    margin-left: 5px !important;
  }
}
@media (min-width: 768px) {
  .wrapper {
    width: 100px;
    font-size: 15px;
  }
  p {
    margin-left: 6px !important;
  }
}
@media (min-width: 992px) {
  .wrapper {
    width: 120px;
    font-size: 17px;
  }
  p {
    margin-left: 8px !important;
  }
}
@media (min-width: 1200px) {
  .wrapper {
    width: 140px;
    font-size: 19px;
  }
  p {
    margin-left: 9px !important;
  }
}
</style>
