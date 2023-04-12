import axios from "axios";

const apiKey = "?api_key=%3D=9a240e0e-3f3e-4ee4-9e74-a63463faa2f9";

const baseURL = "https://project-2-api.herokuapp.com";

const videos = "/videos";

// function getVideosFromDatabase(){

// axios.get(baseURL + videos + apiKey).then((response) => {
//     const shows = response.data

//     shows.forEach(show => {
//         const showElement = createShowElement(show)
//         showsContainer.appendChild(showElement)
//     });
//   })
// }

export {apiKey, baseURL, videos}