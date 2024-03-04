import axios from "axios";

export const loadArticles = async (cancelToken) => {
    try{
        const response = await axios.get('http://localhost:3000/articles', {
            cancelToken,
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        if (axios.isCancel(error)){
            throw new Error('Loaded cancel')
        } else {
            throw new Error('Error loaded articles')
        }
    }
};