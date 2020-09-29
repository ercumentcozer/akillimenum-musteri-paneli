<template>
  <div class="wrapper">
    <div class="left">
      <router-link to="/urun">
        <img :src="GetPhoto" class="image" style="border-radius:5px;" />
      </router-link>
    </div>
    <div class="orta">
      <div class="ust">
        <p class="name">{{ urun.name }}</p>

        <span class="mainRight">
          <button class="urunButon" @click="arttir">
            <i class="fas fa-plus"></i>
          </button>
          <p class="ucret">{{ count }}</p>
          <button class="urunButon" @click="azalt">
            <i class="fas fa-minus"></i>
          </button>
          <p
            class="toplam"
            style="font-weight:900; margin-top:0px; margin-left: 10px;"
          >{{ toplam }}TL</p>
        </span>
      </div>

      <span class="alt">
        <p class="aciklama">{{ urun.comment }}</p>
      </span>
    </div>
    <span
      style="float:right; font-size:12px; height:10px; cursor:pointer; color:white;"
      @click="urunSil"
    >x</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: this.urun.count,
      price: this.urun.price,
    };
  },
  props: {
    urun: Object,
    index: Number,
  },
  methods: {
    arttir() {
      this.count++;
      this.$parent.toplam += this.price;
      this.$store.dispatch("SepetUrunCountSet", {
        cat: this.urun.id,
        id: this.urun._id,
        count: this.count,
      });
    },
    azalt() {
      if (this.count != 1) {
        this.count--;
        this.$parent.toplam -= this.price;
        this.$store.dispatch("SepetUrunCountSet", {
          cat: this.urun.id,
          id: this.urun._id,
          count: this.count,
        });
      }
    },

    urunSil() {
      this.$store.dispatch("DeleteSepetItem", {
        cat: this.urun.id,
        id: this.urun._id,
        index: this.index,
      });
      this.$parent.toplam -= this.toplam;
    },
  },
  computed: {
    GetPhoto: function () {
      return process.env.VUE_APP_AWS + this.urun.photo + "." + this.$store.state.webpSupport;
    },

    toplam: function () {
      return this.count * this.price;
    },
  },
  created() {
    this.$parent.toplam += this.count * this.price;
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 20px;
  height: 90px;
  display: flex;
}

.image {
  width: 90px;
  height: 90px;
}

.orta {
  width: 70%;
  margin-left: 10px;
}

.name {
  width: 50%;
  word-wrap: break-word;
  display: inline-block;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  margin-top: 10px;
}

.ucret {
  display: inline-block;
  margin-top: 2px;
  width: 20px;
  font-size: 10px;
  text-align: center;
}

.toplam {
  display: inline-block;
  font-size: 13px;
  width: 35px;
  color: orangered;
}

.mainRight {
  float: right;
  margin-top: 11px;
  display: flex;
}

.aciklama {
  white-space: pre;
  line-height: 16px;
  width: 60%;
  word-wrap: break-word;
  margin-top: 0px;
  font-size: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: inline-block;
}

.name,
.ucret,
.aciklama {
  color: white;
}

button {
  font-size: 8px;
  height: 15px;
  width: 10px;
  padding-right: 12px;
  border: 0px;
  background-color: teal;
  color: white;
}

@media (min-width: 0px) {
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>
