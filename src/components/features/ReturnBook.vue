<template>
  <div class="returnBooksContainer">
    <Nav />
    <div class="return-books">
      <div class="searchBook">
        <formulate-form>
          <FormulateInput
            type="text"
            label="Name of the book?"
            validation="required"
            validation-name="search-book-name"
            help="Search by book or author name or ISBN number"
            placeholder="Book name"
            v-model="searchByValue"
            @keypress="searchNow"
          >
          </FormulateInput>
        </formulate-form>
      </div>
      <div class="processReturn"></div>
    </div>
  </div>
</template>

<script>
import Nav from "../utlities/Nav";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      searchByValue: "",
    };
  },
  methods: {
    searchNow({ target: { value } }) {
      this.filteredData = [];
      this.filteredData = this.allBooks.filter(
        (bookDetails) =>
          bookDetails.name.indexOf(value) !== -1 ||
          bookDetails.author.indexOf(value) !== -1 ||
          bookDetails.isbn.indexOf(value) !== -1
      );
    },
  },
};
</script>

<style></style>
