const API_KEY = "d806a4ed00813c728049500831215151";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`
}

export default requests;