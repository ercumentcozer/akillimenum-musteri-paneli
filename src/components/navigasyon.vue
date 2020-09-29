<template>
<div class="wrapper">
    <div class="icons">
        <span class="orta" style="text-align:center; margin-left:20px;">
            <a :href="Facebook" target="_blank">
                <i style="margin-right:20px" class="fab fa-facebook"></i>
            </a>
            <a :href="Instagram" target="_blank">
                <i style="margin-right:20px;" class="fab fa-instagram"></i>
            </a>
            <i class="fab fa-foursquare" v-if="false"></i>
        </span>

        <div class="dropdown" @click="show = !show" style="float:left">
            <i class="fas fa-bars"></i>
            <transition name="fade">
                <div class="dropdown-content" v-show="show">
                    <div class="hoverla" @click="AnasayfayaGit">
                        <a class="hoverla">
                            <i class="fas fa-home" style="color:black;margin-left:20px;font-size:17px">
                                <p style="display:inline-block; margin-left:10px; font-size:15px ">Ana Sayfa</p>
                            </i>
                        </a>
                    </div>
                    <div class="hoverla" @click="garson">
                        <a class="hoverla">
                            <i class="fas fa-user-tie" style="color:black;margin-left:20px;font-size:17px">
                                <p style="display:inline-block; margin-left:10px; font-size:15px ">Garson Çağır</p>
                            </i>
                        </a>
                    </div>
                    <div class="hoverla" @click="hesap">
                        <a class="hoverla">
                            <i class="fas fa-receipt" style="color:black;margin-left:20px;font-size:17px">
                                <p style="display:inline-block; margin-left:10px; font-size:15px ">Hesabı İste</p>
                            </i>
                        </a>
                    </div>
                    <!-- <a @click="garson" class="hoverla" v-if="false">
              <i class="fas fa-user-tie" style="color:black; 
 margin-left:20px;
  font-size:17px">
                <p style="display:inline-block; margin-left:10px; font-size:15px ">Garson Çağır</p>
              </i>
            </a>
            <a @click="hesap" class="hoverla" v-if="false">
              <i class="fas fa-receipt" style="color:black; 
 margin-left:20px;
  font-size:17px">
                <p style="display:inline-block; margin-left:10px; font-size:15px ">Hesabı İste</p>
              </i>
            </a>-->
                </div>
            </transition>
        </div>
        <router-link to="/sepet">
            <i style="float:right; " class="fas fa-shopping-cart araba">
                <span style="margin-bottom:8px; margin-left:2px; font-size:18px; font-family:arial;">{{ ToplamSepet }}</span>
            </i>
        </router-link>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
export default {
    data() {
        return {
            show: false,
            Facebook: "https://facebook.com/AkilliMenum",
            Instagram: "https://instagram.com/akillimenumcom",

        };
    },
    methods: {
        garson() {
            alert("Masa no :" + this.$store.state.Masa.No + "\nGarson Geliyor");
        },
        hesap() {
            alert("Masa no :" + this.$store.state.Masa.No + "\nHesabınız Getiriliyor");
        },
        AnasayfayaGit() {
            this.$router.push({
                name: "Anasayfa",
                params: {
                    masa: this.$store.state.Masa.No,
                },
            });
        },
    },

    computed: {
        ...mapGetters(["ToplamSepet"]),
    },

    watch: {
        "$store.state.Organization": function (newVal) {
            this.Facebook =
                "https://facebook.com/" +
                this.$store.state.Organization.settings.Facebook;
            this.Instagram =
                "https://instagram.com/" +
                this.$store.state.Organization.settings.Instagram;
        },
    },
};
</script>

<style scoped>
.wrapper {
    width: 100%;
    margin: 0 auto;
    background: #db3948;
    height: 40px;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    -webkit-box-shadow: 0px 3px 15px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 15px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 15px -6px rgba(0, 0, 0, 0.75);
    margin-bottom: 5px;
}

.icons {
    text-align: center;
    width: 90%;
    margin: 0 auto;
}

.isletme {
    display: inline-block;
    color: white;
    margin-top: 7px;
    text-align: center;
    margin-bottom: 0px;
    font-size: 23px;
    font-family: "Bebas Neue", cursive;
}

i {
    font-size: 20px;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.araba {
    height: 30px !important;
    display: flex;

    align-items: flex-end;
    margin-top: 0px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    position: absolute;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #f9f9f9;
    width: 160px;
    /* height: 100px; */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    text-align: left;
}

.hoverla :hover {
    color: white;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

.hoverla {
    width: 100%;
    cursor: pointer;
}

.hoverla:hover {
    background-color: #303952;
    color: white;
}

.hoverla:hover a {
    color: white;
}

.hoverla:hover i {
    color: white !important;
}

@media (max-width: 290px) {
    i {
        font-size: 15px;
        margin-right: 19px;
    }

    .isletme {
        font-size: 20px;
    }
}
</style>
