<template>
  <div style="font-family: arial">
    <sepet-card
      class="animate__animated animate__jackInTheBox"
      v-for="(urun, index) in SepettekiUrunler"
      :key="urun._id"
      :urun="urun"
      :index="index"
    />
    <p class="toplam">{{ toplam }} TL</p>
    <div class="butonlar">
      <button
        style="margin-top: 10px; background: #28a745; color: white"
        @click="SiparisiTamamla"
      >
        Siparişi Tamamla
      </button>
      <button
        style="background: #dc3545; color: white; margin-bottom: 10px"
        @click="DigerUrunler"
      >
        Diğer ürünlerimiz
      </button>
    </div>
    <modal name="example" width="75%" :scrollable="true" height="auto">
      <div class="modal">
        <div style="width: 100%; height: 30px">
          <a
            @click="closeModal"
            style="
              float: right;
              margin: 20px 20px 0px 0px;
              font-size: 20px;
              text-decoration: none;
              color: crimson;
              cursor: pointer;
            "
            >x</a
          >
        </div>
        <center>
          <p id="message">Siparişiniz Alındı.En kısa sürede getiriyoruz.</p>
        </center>
        <Rating :grade="star" :maxStars="5" :hasCounter="true" />
        <center>
          <p id="degerlendir">Bizi değerlendirmek ister misiniz?</p>
        </center>
        <center>
          <textarea v-model="comment"></textarea>
        </center>
        <center>
          <button @click="YorumGonder">Gönder</button>
        </center>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState } from "vuex";

import sepetCard from "@/components/sepetCard";
import Rating from "@/components/Rating.vue";
export default {
  name: "sepet",
  data() {
    return {
      toplam: 0,
      star: 5,
      comment: "",
    };
  },
  components: {
    sepetCard,
    Rating,
  },
  created() {
    if (!this.$store.state.Masa) {
      this.$router.push("/not-found");
    }
  },
  methods: {
    SiparisiTamamla() {
      if (this.toplam < 1) return alert("Lütfen sepete ürün ekleyiniz.");

      const Siparis = {
        org: this.$store.state.Organization._id,
        table: Number(this.$store.state.Masa.No),
        cat: this.$store.state.Sepet,
      };

      let loader = this.$loading.show({
        container: null,
        canCancel: false,
        color: "#ffffff",
        loader: "spinner",
        width: 64,
        blur: "5px",
        height: 64,
        backgroundColor: "#1D1D1D",
        opacity: 1,
        zIndex: 999,
      });
      fetch(process.env.VUE_APP_SERVER + "ord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Siparis),
      })
        .then((res) => res.json())
        .then((data) => {
          loader.hide();
          if (data.ok) {
            this.$store.state.Sepet = [];
            this.$store.state.SepettekiUrunler = [];
            this.toplam = 0;
            //                        return alert("Sipariş Alındı. En kısa sürede getiriyoruz.");
          }
          this.$modal.show("example");
        });
    },

    closeModal() {
      this.$modal.hide("example");
    },

    DigerUrunler() {
      this.$router.push({
        name: "Anasayfa",
        params: {
          masa: this.$store.state.Masa.No,
        },
      });
    },
    YorumGonder() {
      this.$modal.hide("example");

      const Yorum = {
        org: this.$store.state.Subdomain,
        star: this.star,
        comment: this.comment,
      };

      fetch(process.env.VUE_APP_SERVER + "com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Yorum),
      })
        .then((res) => res.json())
        .then((data) => (data.ok ? alert("ok") : alert("false")));
    },
  },
  computed: {
    ...mapState(["SepettekiUrunler"]),
  },
};
</script>

<style lang="scss" scoped>
.butonlar button {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  box-shadow: none;
  line-height: 0px;
  border: 0px;
  margin-top: 10px;
}

.toplam {
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  color: #333;
  color: white;
  /* Dark */
}

.modal {
  height: 100%;

  #message {
    width: 90%;
  }

  #degerlendir {
    font-size: 13px;
  }

  textarea {
    height: 50px;
  }

  button {
    background-color: #007bff;
    outline: 0;
    border: 1px;
    color: white;
    width: 30%;
    height: 30px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.5);
    }
  }
}
</style>
