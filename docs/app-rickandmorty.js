new Vue({
  el: "#app",

  data: {
    characters: [],
    counter: 0,
    next: "https://rickandmortyapi.com/api/character",
    loading: false,
  },

  computed: {
    charactersCounter() {
      return this.characters.length;
    },
  },

  methods: {
    getMoreCaracters() {
      this.loading = true;

      window
        .fetch(this.next)
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
        })
        .then((data) => {
          this.characters = [...this.characters, ...(data.results || [])];
          this.next = data.info.next;
          this.counter++;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
