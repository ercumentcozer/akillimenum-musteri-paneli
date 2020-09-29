// Açıklama kalori ve hazırlanma süresi eklenecek

<template>
<div class="wrapper animate__animated animate__backInRight">
    <geridon :goTo="'masa-' + $route.params.masa + '/' + $route.params.kategori"></geridon>
    <div class="image">
        <img :src="getPhoto" width="100%" style="border-radius: 20px; margin-top:10px;" />
    </div>
    <p style="text-align:center; font-size:20px; font-weight:900" class="name">{{ Urun.name }}</p>
    <p class="aciklama" style="text-align:center; width:100%; height:50px; word-wrap: break-word;" v-if="Urun.commentary">{{ Urun.commentary }}</p>
    <div style="display:flex;">
        <div class="left">
            <i class="fas fa-star" v-for="star in 5" :key="star"></i>
            <div class="icons">
                <i class="fas fa-stopwatch"></i>
                <p>{{sure}} DK</p>
            </div>
            <div class="icons">
                <i class="fas fa-fire"></i>
                <p>{{kalori}} kcal</p>
            </div>

            <textarea class="yorum" style="width:90%; height:100px; margin-top:30px; margin-bottom:20px" placeholder="Ekstralar.." v-model="yorum"></textarea>
        </div>
        <div class="fiyat">
            <br />
            <br />
            <br />
            <br />
            <p class="yeniFiyat">{{ fiyat }}TL</p>
        </div>
    </div>
    <div style="width:90px; margin:0 auto; ">
        <div style="display:flex; align-items:center;">
            <button class="urunButon" style="background:#0a3d62; border:none; border-radius:3px; outline:0; color:white; height:20px" @click="arttir">
                <i class="fas fa-plus"></i>
            </button>
            <span>
                <p class="inline" style="width: 30px; text-align: center;">{{ miktar }}</p>
            </span>
            <button class="urunButon" style="background:#0a3d62; border:none; border-radius:3px;  outline:0; color:white; height:20px" @click="azalt">
                <i class="fas fa-minus"></i>
            </button>
        </div>
    </div>
    <button class="ekle" @click="AddOrder">Siparişe Ekle</button>
    <maruqee />



</div>
</template>

<script>
import geridon from "@/components/geridon";
import maruqee from "@/components/marquee";
import {
    mapGetters
} from "vuex";

export default {
    name: "urunDetay",
    data() {
        return {
            miktar: 1,
            fiyat: 0,
            yorum: "",
            sure: "15",
            kalori: "232",
        };
    },
    components: {
        geridon,
        maruqee,
    },
    computed: {
        Urun: function () {
            return this.$store.getters.Urun(
                this.$route.params.kategori,
                this.$route.params.urun
            );
        },

        getPhoto: function () {
            return process.env.VUE_APP_AWS + this.Urun.photo + "." + this.$store.state.webpSupport;
        },
    },
    mounted() {
        this.fiyat = this.Urun.price;
    },
    methods: {
        AddOrder() {
            this.$store.dispatch("SepetSet", {
                id: this.$route.params.kategori,
                products: {
                    id: this.$route.params.urun,
                    count: this.miktar,
                    comment: this.yorum,
                },
            });
            this.$router.push({
                name: "menuler",
                params: {
                    masa: this.$route.params.masa,
                    kategori: this.$route.params.kategori,
                },
            });
        },
        arttir() {
            const _fiyat = this.Urun.price;
            this.fiyat += _fiyat;
            this.miktar++;
        },
        azalt() {
            const _fiyat = this.Urun.price;
            if (this.miktar == 1) this.miktar = 1;
            else this.miktar--;

            if (this.fiyat == _fiyat) this.fiyat = _fiyat;
            else this.fiyat -= _fiyat;
        },
    },
};
</script>

<style scoped>
.wrapper {
    font-family: arial;
}

.image {
    width: 100%;
    margin: 0 auto;
}

.left {
    width: 40%;
    margin-left: 10%;
    margin-top: 10%;
    font-size: 18px;
}

.left .fa-star {
    color: #ff9f43;
}

.left .fa-fire {
    color: orangered;
}

.left .fa-stopwatch {
    color: #5b7aa0;
}

.fiyat {
    width: 40%;
}

.eskiFiyat {
    margin-left: 40%;
    margin-top: 25%;
    font-family: arial;
    font-weight: 600;
    font-size: 20px;
    color: #ee5253;

    text-decoration: line-through;
}

.yeniFiyat {
    text-align: center;
    margin-left: 10px;
    margin-top: 10%;

    font-weight: 900;
    font-size: 30px;
    color: rgb(22, 22, 22);
    color: white;
    /* Dark */
}

.ekle {
    width: 100%;
    height: 40px;
    background: #28a745;
    border: #28a745;
    color: white;
    font-size: 20px;
    font-family: calibri;
    font-weight: 500;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    cursor: pointer;
}

.name,
.aciklama {
    color: white;
    /* Dark */
}

.yorum {
    /* Dark */
    color: black !important;
    background: white;
    border: none;
}

.inline {
    /* Dark */
    color: white !important;
}

.icons p {
    display: inline-block;
    color: white;
    margin-left: 10px;
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 5px;
}

.icons i {
    font-size: 25px;
}

@media (max-width: 576px) {
    .image img {
        height: 250px;
    }

    .aciklama {
        font-size: 10px;
    }

    .yeniFiyat {
        font-size: 35px;

        text-decoration: underline crimson;
    }
}

@media (min-width: 576px) {
    .image img {
        height: 350px;
    }

    .left {
        font-size: 25px;
    }

    .eskiFiyat {
        font-size: 23px;
    }

    .yeniFiyat {
        font-size: 35px;
    }

    .aciklama {
        font-size: 15px;
    }
}

@media (min-width: 768px) {
    .image img {
        height: 450px;
    }

    .aciklama {
        font-size: 20px;
    }
}

@media (min-width: 992px) {
    .image img {
        height: 700px;
    }

    .aciklama {
        font-size: 25px;
    }
}

@media (min-width: 1200px) {
    .image img {
        height: 800px;
    }

    .aciklama {
        font-size: 30px;
    }
}
</style>
</style>
