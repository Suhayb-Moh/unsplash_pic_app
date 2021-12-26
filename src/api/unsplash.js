import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MgjkCQR3WI17XoGkvx3amMh4sQtWfkxuZAAZ_oom23w'
    }
});