import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AddBook from '@/components/features/AddBook';
import ShowAllBooks from '@/components/features/ShowAllBooks';
import RequestBooks from '@/components/features/RequestBooks';
import BorrowBook from '@/components/features/BorrowBook';

Vue.use(VueRouter)

export default new VueRouter ({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/addBook',
      name: 'AddBook',
      component: AddBook
    },
    {
      path: '/showAllBooks',
      name: 'ShowAllBooks',
      component: ShowAllBooks
    },
    {
      path: '/requestBooks',
      name: 'RequestBooks',
      component: RequestBooks
    },
    {
      path: '/borrowBook',
      name: 'BorrowBook',
      component: BorrowBook
    },
  ]
})