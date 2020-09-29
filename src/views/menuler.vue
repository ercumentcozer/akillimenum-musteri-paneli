<template>
  <div style="margin:0 auto;" class="card animate__animated animate__backInUp">
    <slider2></slider2>
    <geridon :goTo="'masa-' + $route.params.masa"></geridon>
    <div class="content">
      <h2 style="text-align:center; font-family: Courgette;">{{ Urunler.name }}</h2>
      <div v-for="urun in Urunler($route.params.kategori)" class="ddd" :key="urun._id">
        <menuler-card
          :id="urun._id"
          :kalori="urun.calori"
          :aciklama="urun.commentary"
          :ad="urun.name"
          :foto="urun.photo"
          :fiyat="urun.price"
        />
      </div>
    </div>
  </div>
</template>
<script>
import menulerCard from "@/components/menulerCard";
import slider2 from "@/components/slider2";
import geridon from "@/components/geridon";
import { mapGetters } from "vuex";
export default {
  components: {
    slider2,
    menulerCard,
    geridon,
  },
  computed: {
    ...mapGetters(["Urunler"]),
  },
};
</script>
<style scoped>
.content {
  width: 100%;
  margin: 0 auto;
  background-size: 100%;
  color: #333;
}
.ddd {
  width: 100%;
  margin: 0 auto;
}
</style>
