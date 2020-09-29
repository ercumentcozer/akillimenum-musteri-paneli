<template>
  <marquee style="margin-top: 10px;" scrollamount="15">
    <textInImage
      style="margin-left:20px; margin-top:5px; border-radius:10px; display: inline-block"
      v-for="(urun, index) in Urunler($route.params.kategori)"
      :Src="getPhoto(urun.photo)"
      :Name="urun.name"
      :key="index"
    />
  </marquee>
</template>

<script>
import { mapGetters } from "vuex";
import textInImage from "@/components/TextInImage";

export default {
  components: {
    textInImage,
  },

  computed: {
    ...mapGetters(["Urunler"]),
  },

  methods: {
    getPhoto: function (id) {
      return process.env.VUE_APP_AWS + id + "." + this.$store.state.webpSupport;
    },
  },
};
</script>

<style scoped>
  
</style>