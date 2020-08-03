<template>
  <div class="showAllBooksContainer">
    <Nav />
    <div class="allbooks-display">
      <div class="existing-books">
        <div class="message">
          <h1>Books in Inventory</h1>
        </div>
        <div class="lists">
          <div class="books" :key="index" v-for="(item, index) in getAllBooks">
            <div>Book name: {{ item.name }}</div>
            <div>Author: {{ item.author }}</div>
            <div>ISBN: {{ item.isbn }}</div>
          </div>
        </div>
      </div>

      <div class="open-requests">
        <h1 class="pending-books-heading">Open pending book requests:</h1>
        <div class="lists">
          <div
            class="books"
            :key="index"
            v-for="(item, index) in getAllOpenBookRequests"
          >
            <div>Book name: {{ item.name }}</div>
            <div>Author: {{ item.author }}</div>
            <div>ISBN: {{ item.isbn }}</div>
            <div v-if="item.reason !== undefined">Reason {{ item.reason }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Nav from "../utlities/Nav";
export default {
  components: {
    Nav,
  },
  computed: {
    ...mapGetters(["getAllBooks", "getAllOpenBookRequests"]),
  },
};
</script>

<style scoped lang="scss">
.message,
.pending-books-heading {
  text-align: center;
}
.lists {
  display: flex;
  justify-content: center;
  .books {
    border: 1px solid black;
    width: 500px;
    text-align: center;
  }
  .books > div {
    // background-color: yellow;
    margin-bottom: 20px;
    // height:20px;
    padding: 10px;
    min-width: 70px;
    color: yellowgreen;
    font-weight: 500;
    font-size: 1.2em;

  }
}
</style>
