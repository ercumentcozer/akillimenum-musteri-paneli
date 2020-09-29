<template>
  <div id="app">
    <navigasyon  v-show="$store.state.Masa"/>
    <router-view />
  </div>
</template>
<script>
import navigasyon from "@/components/navigasyon";
export default {
  components: {
    navigasyon,
  },
};
</script>
<style>
body{
  background: rgb(29, 29, 29); /* Dark */

}

#app {
  max-width: 950px;
  margin: 0 auto;
}
.container {
  width: 100%;
  margin: 0 auto;
}
@media (min-width: 576px) {
  #app {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  #app {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  #app {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  #app {
    max-width: 1140px;
  }
}
</style>