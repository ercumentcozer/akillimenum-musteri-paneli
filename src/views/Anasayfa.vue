<template>
  <div>
    <slider2></slider2>

    <div class="container">
      <p class="kategoriler" style="text-align:center; font-size:50px" >Kategoriler</p>
    </div>

    <div class="cardlar">
      <card
        v-for="Kategori in Organization.menu"
        :key="Kategori._id"
        :Id="Kategori._id"
        :Name="Kategori.name"
        :bgImg="Kategori.photo"
      />
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import slider2 from "@/components/slider2";

import { mapState } from "vuex";

export default {
  name: "Anasayfa",
  data() {
    return {};
  },
  components: {
    card,
    slider2,
  },
  computed: {
    ...mapState(["Organization"]),
  },
};
</script>

<style>
.slider {
  width: 80%;
  margin: 0 auto;
}

.sliderImg {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.cardlar {
  display: flex;
  margin-right: 10%;
  margin-left: 10%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.kategoriler {
  font-family: "Courgette", cursive;
  color: white; /* Dark */
}
</style>
