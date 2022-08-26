const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "5ae90234ca32507c2fe1cd157d640613",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig