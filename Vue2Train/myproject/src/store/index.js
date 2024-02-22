
var store = { 

    debug: true, 
    state: {
        articles: [],
    },
    setMessageAction (newValue) {
        if (this.debug) console.log("setMessageAction Bызвано с ", newValue); 
        this.state.message = newValue;
    },
    clearMessageAction() {
        if (this.debug) console.log("clearMessageAction BызBано");
        this.state.message = ""
    },
    setArticle(article){
        let newArticle = {
            id: 0,
            ...article
        };
      
         // Увеличиваем id существующих элементов на 1
        this.state.articles.forEach((item) => {
            item.id += 1;
        });
      
        // Вставляем новый элемент в начало массива
        this.state.articles.unshift(newArticle);
    },
    getArticleList(){ 
        fetch('./articles.json')
        .then(response => response.json())
        .then(articles => this.state.articles = articles["articles"]);
        console.log('Fetch data');
    },
}

store.getArticleList()
export default store

