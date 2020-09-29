<template>
  <div style="display:flex; height:100vh; align-items:center; border:1px solid red; ">
    <div class="baslik">
      <h1>KAPALI MASA</h1>
      <p>Barkodunu okuttuğunuz masa şuanda kapalı veya kullanım dışı. Eğer başka bir sorunla karşılaştıysanız garson çağırarak durumu bildirebilirsiniz.</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Not-Found",
  created() {
    console.log("boş masa");
  },
  data() {
    return {
      myData: "asdasd",
    };
  },
};
</script>

<style lang="css" scoped>
div {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.baslik {
  background: #222f3e;
  width: 50%;
  height: 200px;
  color: white;
  margin: 0 auto;
  text-align: center;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

h1 {
  margin-top: 30px;
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 20px;
}
</style>