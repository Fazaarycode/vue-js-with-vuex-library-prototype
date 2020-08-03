<template>
  <div class="nav">
    <CustomButton @click="$router.push('/')">Go Home page</CustomButton>
  </div>
</template>

<script>
import CustomButton from './CustomButton';

export default {
  components: {
    CustomButton,
  }
};
</script>

<style>
.nav {
  padding-top: 20px;
  text-align: center;
  width:100vw;
  background:yellowgreen;
  height:80px;
  margin-bottom: 50px ;
}
</style>
