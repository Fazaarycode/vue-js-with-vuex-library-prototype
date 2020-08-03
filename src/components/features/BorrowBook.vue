<template>
  <div class="borrowBookContainer">
    <Nav />
    <div class="borrowBook">
      <h1 class="info">Borrow a book</h1>
      <div class="searchArea">
        <div class="label">Name of the book</div>
        <FormulateInput
          type="text"
          placeholder="Book name"
          v-model="searchByValue"
          @keypress="searchNow"
        />
      </div>
      <div class="resultsFromSearch" v-if="filteredData.length > 0">
        <div class="suggestions">
          <h1>Below are matching your search</h1>
          <div class="lists" v-for="(book, index) in filteredData" :key="index">
            <p class="book-names-available">
              {{ book.name }} by <i>{{ book.author }}</i>
            </p>
            <p v-if="book.bookTaken" class="taken-message-alert">
              Book is taken by {{ findUserWithBookTaken(book.isbn) }}
            </p>
            <button
              class="choose-book"
              @click="takeBook(book.isbn)"
              v-if="!book.bookTaken"
            >
              Choose book
            </button>

            <div
              class="showUsersSelection"
              v-if="
                !book.bookTaken &&
                  showUsersSelection &&
                  book.isbn === selectedISBN
              "
            >
              <ul class="user-selection-list">
                <li v-for="(user, index) in users" :key="index">
                  <span class="userNameChoice">{{ user.name }} </span>
                  <button class="selectUserButton" @click="assignUser(user.id)">
                    Select User
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "../utlities/Nav";
import { setFormStyle, errorLabelsHightlight } from "../styles-workload/styles";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      searchByValue: "",
      filteredData: [],
      showUsersSelection: false,
      selectedISBN: undefined,
    };
  },
  computed: {
    ...mapState(["allBooks", "users", "usersWithBooks"]),
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
    takeBook(isbn) {
      this.showUsersSelection = !this.showUsersSelection;
      this.selectedISBN = isbn;
    },
    assignUser(userId) {
      let config = {
        isbn: this.selectedISBN,
        userId,
      };
      this.$store.dispatch("assignUser", config);
    },
    findUserWithBookTaken(isbn) {
      let userObj = this.usersWithBooks.find((val) => val.isbn === isbn);
      let userDetails = this.users.find(
        (details) => details.id === userObj.userId
      );
      return userDetails.name;
    },
  },
  mounted() {
    setFormStyle();
  },
  updated() {
    this.$nextTick(() => {
      errorLabelsHightlight;
    });
  },
};
</script>

<style lang="scss" scoped>
.borrowBook {
  text-align: center;
}
.h1 {
  text-align: center;
}
.searchArea {
  text-align: center;
  padding: 20px;
  .label {
    margin-bottom: 5px;
    font-weight: 700;
  }
}
.suggestions {
  text-align: center;
}
.book-names-available {
  display: inline-block;
  margin-right: 40px;
  background-color: purple;
  width: 100%;
  height: 30px;
  padding: 15px;
  color: gold;
  font-weight: 800;
  font-size: 1.75em;
}
.user-selection-list {
  display: flex;
  justify-content: space-evenly;
  li {
    list-style-type: none;
    .userNameChoice {
      margin-right: 40px;
      font-size: 1.2em;
      font-weight: 600;
    }
  }
}
.taken-message-alert {
  color: white;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
}
// Refactor when you have time
.choose-book {
  display: inline-block;
  margin: 0.5em 0;
  padding: 1em 2em;

  border: none;
  border-radius: 3px;
  color: blue;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
  font-size: 0.9em;
  &:hover {
    font-size: 1.3em;
  }
}
.selectUserButton {
  display: inline-block;
  margin: 0.5em 0;
  padding: 1em 2em;
  background: #fff;
  border: none;
  border-bottom: 2px solid tomato;
  border-radius: 3px;
  color: tomato;
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 0.65;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    font-size: 1.3em;
  }
}
</style>
