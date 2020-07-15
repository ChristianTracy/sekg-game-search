/**
 @module services/httpClient
*/

const axios = require('axios');

/**
 * Wrapper of axios get method
 * @param {String} url - request url
 * @param {String} params - query params
 */ 
const get = (url, params) => axios.get(url, { params });

module.exports = {
    get
}