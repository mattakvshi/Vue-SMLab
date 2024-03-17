import axios from "axios";

export const loadArticles = async (signal) => {
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