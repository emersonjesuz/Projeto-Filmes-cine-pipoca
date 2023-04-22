import axios from "axios";

const movieCarouselApi = axios.create({
  baseURL: "https://tmdb-proxy.cubos-academy.workers.dev/3/discover",
  timeout: 10000,
  headers: { "Content-Type": "Application/json" },
});

const movieSeachApi = axios.create({
  baseURL: "https://tmdb-proxy.cubos-academy.workers.dev/3/search",
  timeout: 10000,
  headers: { "Content-Type": "Application/json" },
});

const movieModalApi = axios.create({
  baseURL: "https://tmdb-proxy.cubos-academy.workers.dev/3/movie",
  timeout: 10000,
  headers: { "Content-Type": "Application/json" },
});

export { movieCarouselApi, movieSeachApi, movieModalApi };
