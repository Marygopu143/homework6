const app = Vue.createApp({
  data() {
    return {
      showDetails: false,
      edit: false,
      message: 'My Contacts',
      contacts: [
        
        {
         name: 'James Gordon',
         email: 'james.aydin@franklin.edu',
         age: 24,
         link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
           name: 'Jane Obrian',
           email: 'jane.aydin@franklin.edu',
           age: 25,
           link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
         name: 'Joan Winifred',
         email: 'kemal.aydin@franklin.edu',
         age: 26,
         link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
         name: 'Winnie Edwards',
         email: 'kemal.aydin@franklin.edu',
         age: 34,
         link: 'https://www.linkedin.com/in/kaydin/'
        },
        {
         name: 'Ann Some',
         email: 'kemal.aydin@franklin.edu',
         age: 30,
         link: 'https://www.linkedin.com/in/kaydin/'
        }

      ]
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleEdit() {
      this.edit = !this.edit;
    },
  }
})

app.mount('#app')
