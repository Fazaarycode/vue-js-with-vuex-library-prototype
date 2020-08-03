<template>
  <div class="actions-container">
    <div class="actions-1">
      <div class="actions">
        <CustomButton @click="addBook">
          Add a book
        </CustomButton>
      </div>
      <div class="actions">
        <CustomButton @click="requestBooks">
          Request for book addition
        </CustomButton>
      </div>
      <div class="actions">
         <CustomButton @click="borrowBook">
          Borrow Book
        </CustomButton>
      </div>
    </div>
    <div class="actions-2">
      <div class="actions returnBook-not-allowed" >
        <CustomButton>
          Return a book
        </CustomButton>
      </div>
      <div class="actions">
        <CustomButton @click="showAllBooks">
          All Book Status
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './utlities/CustomButton';
export default {
  components:{
    CustomButton,
  },
  methods: {
    addBook() {
      this.$router.push("addBook");
    },
    showAllBooks() {
      this.$router.push("showAllBooks");
    },
    requestBooks() {
      this.$router.push("requestBooks");
    },
    borrowBook() {
        this.$router.push("borrowBook");
    }
  },
};
</script>

<style lang="scss" scoped>
.actions-container {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  flex-grow: 1;
  .actions-1,
  .actions-2 {
    margin-top: 50px;
    padding: 40px;
    .actions {
      margin-bottom: 40px;
    }
    .returnBook-not-allowed  {
      button {
              cursor: not-allowed;
      }
    }
  }
}
</style>

// Import fonts, fix button stylings
