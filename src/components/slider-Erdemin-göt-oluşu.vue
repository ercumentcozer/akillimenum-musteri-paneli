<template>
  <div class="slider" style="text-align:center;">
    <transition name="fade">
      <img :src="sliderSrc" v-on:load="onLoaded" v-show="loaded" class="sliderImg"/>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: 0,
      sliderArray: [
        "https://i4.hurimg.com/i/hurriyet/75/1200x675/5c0bb8df0f25441214fbfe93.jpg",
        "https://cdn.yemek.com/mncrop/600/315/uploads/2014/07/sutlac-yemekcom.jpg",
        "https://i12.haber7.net//haber/haber7/photos/2019/27/ejder_meyvesi_nedir_ejder_meyvesinin_faydalari_nelerdir_hangi_hastaliklara_iyi_gelir_1561988529_4389.png",
      ],
      loaded: false,
    };
  },
  created() {
    setInterval(() => {
      this.sliderChange();
    }, 10000);
  },
  methods: {
    sliderChange() {
      if (this.img == this.sliderArray.length - 1) return (this.img = 0);
      this.img++;
    },

    onLoaded() {
      console.log('loaded')
      this.loaded = true;
    }
  },
  computed: {
    sliderSrc: function () {
      return this.sliderArray[this.img];
    },
  },
};
</script>

<style scoped>
.slider {
  width: 100%;
  margin: 0 auto;
}
.sliderImg {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.fade-enter-active {
  transition: opacity 3s ease-in-out;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter{
  opacity: 0;
}
</style>