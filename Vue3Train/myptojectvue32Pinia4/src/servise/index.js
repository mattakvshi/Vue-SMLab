import axios from "axios";

let controller =  new AbortController();

export const canselLoaded = async() => {
    console.log('Check canselLoaded servise')
    controller.abort()
};

export const loadArticles = async () => {
    console.log('Check loadArticles servise')
    controller = new AbortController();
    const signal = controller.signal
    try{
        const response = await axios.get('http://localhost:3000/articles', {
            signal,
        });
        console.log(response.data)
        return response.data.reverse();
    } catch (error) {
        if (axios.isCancel(error)){
            throw new Error('Loaded cancel')
        } else {
            throw new Error('Error loaded articles')
        }
    }
};

export const addArticle = async (article) => {
    try {
        const response = await axios.post('http://localhost:3000/articles', article);
        console.log(response.data);
        this.articles.unshift(response.data); // Добавление новой статьи в массив статей
      } catch (error) {
        console.error('Error adding article:', error);
      }
};