const load = {
    state: {
        loadError: false,
    },
    mutations: {
        setErrorFalse(state) {
            state.loadError = false;
        },
        setErrorTrue(state) {
            state.loadError = true;
        },
    },
      actions: {
        fetchArticles(context) {
          fetch('./articles.json')
            .then(response => response.json())
            .then(articles => context.commit('fetchArticles', articles["articles"]))
            .then(context.commit('setErrorTrue'))
            .then(console.log('Fetch data'))
            .catch(error => {
              console.error('Error parsing JSON:', error);
              context.commit('setErrorFalse');
              console.log('Not fetch data');
            })
        },
      },
      modules: {
      }
}

export default load;