import axios from 'axios';
import config from '@/config.json';

axios.defaults.baseURL = config.api_url;

export default axios;
