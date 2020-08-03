<template>
  <div class="addBookContainer">
    <div class="bg-image"></div>
    <Nav class="nav" />
    <div class="addBooks-container">
      <h1 class="info">Add book here</h1>
      <div class="forms-container">
        <fieldset>
          <formulate-form v-model="values" @submit="submitHandler">
            <div class="book-name">
              <div class="label">Name of the book</div>
              <FormulateInput
                class="wtf"
                type="text"
                validation="required"
                validation-name="book-name"
                placeholder="Book name"
              />
            </div>
            <div class="author-name">
              <div class="label">Author of the book</div>
              <FormulateInput
                type="text"
                validation="required"
                validation-name="author-name"
                placeholder="author name"
              />
            </div>
            <div class="ISBN">
              <div class="label">ISBN of the book</div>
              <FormulateInput
                type="number"
                validation="required"
                validation-name="ISBN-number"
                placeholder="ISBN#"
              />
            </div>
            <CustomButton type="submit" class="place-order"
              >Place order
            </CustomButton>
          </formulate-form>
        </fieldset>
      </div>
      <CustomButton @click="showAllBooks">Show all books page</CustomButton>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "../utlities/Nav";
import CustomButton from "../utlities/CustomButton";
import { setFormStyle, errorLabelsHightlight } from "../styles-workload/styles";
export default {
  components: {
    Nav,
    CustomButton,
  },
  data() {
    return {
      values: {},
    };
  },
  mounted() {
    setFormStyle();
  },
  updated() {
    this.$nextTick(() => {
      errorLabelsHightlight;
    });
  },
  methods: {
    submitHandler() {
      let config = {
        name: this.values.text_1,
        author: this.values.text_2,
        isbn: this.values.number_3,
        bookTaken: false,
      };
      this.$store.dispatch("addBook", config);
      alert(`Thank you for your order!`);
    },
    showAllBooks() {
      this.$router.push("showAllBooks");
    },
  },
  computed: {
    ...mapState({
      allBooks: (state) => state.allBooks,
    }),
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oxygen&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oxygen&family=Shadows+Into+Light&display=swap");
#formulate--addBook-1 {
  height: 200px;
  color: green;
}
.nav {
  margin: 0;
  position: absolute;
  top: 0px;
}
.bg-image {
  position: relative;
  text-align: center;
  font-family: "Oxygen", sans-serif;
  height: 100vh;
  background: url("../../assets/add-book.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
}
.addBooks-container {
  position: absolute;
  top: 90px;
  text-align: center;
  width: 100%;
  .info {
    color: orange;
  }
  fieldset {
    border: 0;
    margin-bottom: 2em;
    border-radius: 0.25em;
    .formulate-form {
      margin-bottom: 15px;
      .label {
        font-family: "Shadows Into Light", cursive;
        color: lightseagreen;
        padding: 10px;
        font-size: 30px;
        font-weight: 800;
      }
      .place-order {
        display: inline-block;
        margin-top: 10px;
        padding: 1em 2em;
        border: none;
        border-bottom: 2px solid black;
        border-radius: 3px;
        color: blue;
        font-family: "Quicksand", sans-serif;
        font-size: 1em;
        font-weight: 600;
        line-height: 0.5;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background: lightgreen;
          border: 2px solid black;
        }
      }
    }
  }
}
</style>
