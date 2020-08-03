<template>
  <div class="requestBooksContainer">
    <div class="bg-image"></div>
    <Nav class="nav" />
    <div class="request-books-container">
      <div class="forms-container">
        <div class="info">Request Books</div>
        <fieldset>
          <formulate-form @submit="submitHandler">
            <div class="book-name">
              <div class="label">Book Name</div>
              <FormulateInput
                v-model="bookName"
                type="text"
                validation="required"
                placeholder="Book name"
              />
            </div>
            <div class="author-name">
              <div class="label">Author Name</div>
              <FormulateInput
                type="text"
                v-model="authorName"
                label="Author name"
                validation="required"
                placeholder="author name"
              />
            </div>
            <div class="ISBN">
              <div class="label">ISBN#</div>

              <FormulateInput
                type="number"
                v-model="isbnNumber"
                validation="required"
                placeholder="978-3-16-148410-0"
              />
            </div>
            <div class="reason">
              <div class="label">Benefits</div>
              <div class="ISBN">
                <FormulateInput
                v-model="reason"
                  type="textarea"
                  validation="max:50,length"
                  error-behavior="live"
                  placeholder="Benefits of this book!"
                  help="Help us understand why!"
                />
              </div>
            </div>
            <CustomButton type="submit">
              Place Order
            </CustomButton>
          </formulate-form>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "../utlities/Nav";
import CustomButton from "../utlities/CustomButton";
import {
  setFormStyle,
  setFormStyleTextArea,
  errorLabelsHightlight,
} from "../styles-workload/styles";

export default {
  components: {
    Nav,
    CustomButton,
  },
  data() {
    return {
      bookName:'', authorName:'', isbnNumber: '', reason: '',
    };
  },
  methods: {
    submitHandler() {
      let config = {
        name: this.bookName,
        author: this.authorName,
        isbn: this.isbnNumber,
        reason: this.reason || undefined,
      };
      this.$store.dispatch("bookRequests", config);
      alert(`Thank you for your order!`);
    },
  },
  mounted() {
    setFormStyle();
    setFormStyleTextArea();
  },
  updated() {
    this.$nextTick(() => {
      errorLabelsHightlight;
    });
  },
  computed: {
    ...mapState({
      openRequests: (state) => state.openRequests,
    }),
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oxygen&display=swap");
.bg-image {
  position: relative;
  background: url("../../assets/book-request.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(10px);
  position: relative;
  text-align: center;
  font-family: "Oxygen", sans-serif;
  height: 100vh;
}
.nav {
  margin: 0;
  position: absolute;
  top: 0px;
}
.request-books-container {
  position: absolute;
  top: 90px;
  text-align: center;
  width: 100%;
  .info {
    color: navy;
    font-size: 40px;
    font-weight: 600;
  }
  .label {
    font-size: 24px;
    color: black;
    font-weight: 700;
  }
}
.forms-container {
  fieldset {
    border: none;
  }
  text-align: center;
  padding: 20px;
  line-height: 2;
}
</style>
