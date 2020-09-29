<template>
  <div class="wrapper">
    <div class="sol">
      <router-link
        :to="{
        name: 'urun',
        params: {
          isletme: $route.params.isletme,
          kategori: $route.params.kategori,
          urun: id,
        },
      }"
      >
        <img :src="urunImg" class="image" style="border-radius:5px;" />
      </router-link>
    </div>
    <div class="orta">
      <div class="ustKapsayici">
        <p class="ad">{{ad}}</p>
        <p class="fiyat">{{fiyat}} TL</p>
      </div>
      <p class="aciklama">{{aciklama}}</p>
    </div>
    <div class="sağ">
      <router-link
        id="plusButton"
        :to="{
          name: 'urun',
          params: {
            isletme: $route.params.isletme,
            kategori: $route.params.kategori,
            urun: id,
          },
        }"
        tag="button"
        class="ekle"
      >
        <i class="fas fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    urunImg: function () {
      return process.env.VUE_APP_AWS + this.foto + "." + this.$store.state.webpSupport;
    },
  },
  props: {
    id: String,
    kalori: Number,
    aciklama: String,
    ad: String,
    foto: String,
    fiyat: Number,
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 90px;

  margin-top: 10px;
  display: flex;
}

.ustKapsayici {
  width: 100%;
  height: 30px;
  display: flex;
}

.image {
  width: 90px;
  height: 90px;
  border-radius: 10px;
}

.ad,
.fiyat,
.aciklama {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  color: white; /* Dark */
}

.orta {
  margin-left: 10px;
  width: 62%;
}

.orta .ad {
  width: 70%;
  height: 30px;

  font-size: 12px;
  margin-top: 10px;
  font-weight: 900;
  word-wrap: break-word;
}

.orta .fiyat {
  margin-bottom: 10px;
  width: 20%;
  height: 30px;
  margin-left: 15px;
  font-size: 12px;
  color: rgb(247, 56, 56);
  font-weight: 900;
  margin-top: 10px;
  text-align: left;
}

.orta .aciklama {
  margin-top: 10px;
  font-size: 10px;
  width: 70%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ekle {
  color: white;
  background: #28a745;
  border: none;
  width: 150%;
  height: 90px;
}

@media (min-width: 0px) {
}

@media (min-width: 576px) {
  .orta .ad {
    font-size: 15px;
  }

  .orta .fiyat {
    font-size: 17px;
  }

  .orta .aciklama {
    font-size: 12px;
    margin-top: 20px;
  }
  .image {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
  .orta {
    margin-left: 10px;
    width: 68%;
  }

  .wrapper {
    margin-top: 60px;
  }
  .ekle {
    height: 120px;
    width: 180%;
  }
}

@media (min-width: 768px) {
  .orta {
    margin-left: 10px;
    width: 75%;
  }
 
}

@media (min-width: 992px) {
  .orta {
    margin-left: 10px;
    width: 80%;
  }
}

@media (min-width: 1200px) {
  .orta {
    margin-left: 10px;
    width: 84%;
  }
}
</style>