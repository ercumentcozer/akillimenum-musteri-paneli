<template>
  <div
    class="card animate__animated animate__swing animate__repeat-2"
    :style="{ 'background-image': 'url(' + getPhoto + ')' }"
    @click="goToProducts"
  >
    <p class="baslik">{{ Name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    Id: String,
    bgImg: String,
    Name: String,
  },
  methods: {
    goToProducts() {
      this.$router.push({
        name: "menuler",
        params: {
          kategori: this.Id,
        },
      });
    },
  },
  computed: {
    getPhoto: function () {
      return (
        process.env.VUE_APP_AWS + this.bgImg + "." + this.$store.state.webpSupport
      );
    },
  },
};
</script>
<style scoped>
.card {
  background-image: url("https://i.ibb.co/VpmT4n2/Jznsq-BNXq7.jpg");
  cursor: pointer;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-top: 4%;
  margin-bottom: 5%;
  width: 48%;
  box-shadow: 4px 2px 10px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 0px 0px white; /* Dark */
}
.baslik {
  margin-top: 20%;
  font-size: 25px;
  text-align: center;
  font-family: caveat;
  color: white;
  text-shadow: 2px 2px 6px black;
}

@media (max-width: 576px) {
  .card {
    height: 140px;
    background-size: 100% 140px;
  }
}
@media (min-width: 576px) {
  .card {
    height: 200px;
    background-size: 100% 200px;
  }
  .baslik {
    font-size: 30px !important;
  }
}
@media (min-width: 768px) {
  .card {
    height: 225px;
    background-size: 100% 225px;
  }
  .baslik {
    font-size: 40px !important;
  }
}
@media (min-width: 992px) {
  .card {
    height: 305px;
    background-size: 100% 305px;
  }
  .baslik {
    font-size: 50px !important;
  }
}

@media (min-width: 1200px) {
  .card {
    height: 375px;
    background-size: 100% 375px;
  }
  .baslik {
    font-size: 60px !important;
  }
}
</style>