import { reactive } from 'vue';

const store = reactive({
    debug: true,
    state: {
        articles: [],
    },
    setMessageAction(newValue) {
        if (this.debug) console.log("setMessageAction вызвано с ", newValue);
        this.state.message = newValue;
    },
    clearMessageAction() {
        if (this.debug) console.log("clearMessageAction вызвано");
        this.state.message = "";
    },
    setArticle(article) {
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
    async getArticleList() {
        const response = await fetch('./articles.json');
        const articles = await response.json();
        this.state.articles = articles["articles"];
        console.log('Fetch data');
    },
});

store.getArticleList();

export default store;