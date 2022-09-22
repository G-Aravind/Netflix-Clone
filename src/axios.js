import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;



// when we fetch this it will be like
//what ever we pass inside get will get appped to the baseURL

//instance.get('/foo-bar)

//https://api.themoviedb.org/3/foo-bar


// const url = "https://api.themoviedb.org/3"

