/**
 @module services/games
*/

const httpClient = require('../utils/httpClient');
const BASE_URL = "https://rawg.io/api";

/**
 * Format raw results into useful internal shape
 * @param {Array} results - Raw rawg results
 * @return {Array<object>} The data from the URL.
 */    
const formatResults = (results) => 
    results.map((game) => ({
        name: game.name,
        imgSrc: game.background_image,
        releaseDate: game.released
    }))

/**
 * Calls rawg API to get a games list using a query string
 * @async
 * @param {String} query - Koa context
 * @return {Promise<array>} The data from the URL.
 */
const search = async (query) => {
    if (!query) return null;
    const url = `${BASE_URL}/games`;
    const response = await httpClient.get(url, {search: query});
    const results = response.data.results;
    return formatResults(results);
};

module.exports = { search };