<template>
<div>
    <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" :centerMode="true" :loop="true" :paginationSize="5" :paginationPadding="3" :speed="1000" :touchDrag="true">
        <slide>
            <img :src="Slider1" class="carosel" />
        </slide>
        <slide>
            <img :src="Slider2" class="carosel" />
        </slide>
        <slide>
            <img :src="Slider3" class="carosel" />
        </slide>
    </carousel>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";

export default {
    name: "Slider",
    computed: {
        ...mapGetters(["Slider1", "Slider2", "Slider3"]),
    },
};
</script>

<style scoped>
img {
    width: 100%;
    border-radius: 10px;
    height: 100%;
}

@media (min-width: 0px) {
    .carosel {
        max-height: 250px;
    }
}

@media (min-width: 576px) {
    .carosel {
        max-height: 350px;
    }
}

@media (min-width: 768px) {
    .carosel {
        max-height: 450px;
    }
}

@media (min-width: 992px) {
    .carosel {
        max-height: 550px;
    }
}

@media (min-width: 1200px) {
    .carosel {
        max-height: 650px;
    }
}
</style>
