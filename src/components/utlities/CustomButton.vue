<template>
    <button  @click="callback($event)" class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style scoped>
  .button {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 2em;
    background: #fff;
    border: 2px solid tomato;
    border-radius: 3px;
    color: tomato;
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button:hover {
    background: tomato;
    color: #fff;
  }
</style>
