// Vuex store file
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // Current state of the application lies here.
        allBooks: [{
            name: 'Abc',
            author: 'someone',
            isbn: '1234',
            bookTaken: false,
        }],
        openRequests: [{
            name: 'Animal!',
            author: 'Internet',
            isbn: '007',
            reason: undefined,
        }],
        users: [{
                id: 1,
                name: 'Fazaary',
                capacity: 1,
            },
            {
                id: 2,
                name: 'John',
                capacity: 1,
            },
            {
                id: 3,
                name: 'Max',
                capacity: 1,

            }
        ],
        usersWithBooks: [],

    },
    getters: {
        // Compute derived state based on the current state. More like computed property.
        getAllBooks(state) {
            console.log('getters all books ', state.allBooks)
            return state.allBooks.map(val => val);
        },
        getAllOpenBookRequests(state) {
            return state.openRequests.map(val => val);
        }
    },
    mutations: {
        // Mutate the current state
        addBook(state, payload) {
            return state.allBooks.unshift(payload);
        },
        bookRequests(state, payload) {
            return state.openRequests.unshift(payload);
        },
        assignUser(state, payload) {
            let bookStatus = state.allBooks.find(details => details.isbn === payload.isbn);
            if(!bookStatus) return;
            bookStatus.bookTaken = true;
            console.log('State books.. ', state.allBooks)
            return state.usersWithBooks.unshift(payload);
        }
    },
    actions: {
        // Get data from server and send that to mutations to mutate the current state
        addBook({
            commit
        }, newBookData) {
            // Firebase calls
            setTimeout(() => {
                console.log('Tf really, ', newBookData)
                commit('addBook', newBookData)
            }, 0);
        },
        bookRequests({
            commit
        }, newlyRequestedBook) {
            setTimeout(() => {
                commit('bookRequests', newlyRequestedBook)
            }, 0);
        },
        assignUser({ commit }, userId) {
            setTimeout(()=> {
                commit('assignUser', userId);
            }, 0);
        }
    }
})