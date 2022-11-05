import axios from "axios";

export const cookiesApi = () => {
const options = {
  method: 'GET',
  url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
  headers: {
    'X-RapidAPI-Key': '427d7c672bmsh62cfbde15ce95cbp1d69d2jsn6dfa1b691600',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
  }
};

const api = axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}