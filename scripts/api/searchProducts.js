import fetchData from './fetchData.js';
import {API_URL} from './constants.js';

const searchProducts = async () => {

  return await fetchData(`${API_URL}`);
  
};

export default searchProducts;
