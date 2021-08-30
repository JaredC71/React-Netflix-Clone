// export const base_Url = 'https://api.themoviedb.org/3/';
// export const API_KEY = 'bc1c9a5ab38dd0bb8ab27e7d1ff66895';
// export const trending_Now_URL = `${base_Url}trending/all/week?api_key=${API_KEY}`;
// export const netflix_Originals_URL = `${base_Url}discover/tv?api_key=${API_KEY}&with_networks=213`;
// export const top_Rated_URL = `${base_Url}movie/top_rated?api_key=${API_KEY}&language=en-US`;
// export const action_Movies_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=28discover/movie?api_key=${API_KEY}&with_genres=28`;
// export const comedy_Movies_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=35`;
// export const horror_Movies_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=27`;
// export const romance_Movies_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=10749`;
// export const documentaries_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=99`;
// export const base_Image_URL = 'https://image.tmdb.org/t/p/original/';



import axios from "axios";
const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
});

export default instance;


