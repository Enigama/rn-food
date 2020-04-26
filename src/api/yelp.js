import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer pz4lPY7oO82v0oQxKNn5IK8IdKWRwZGcIZAiis0dsnwFJ5zIQE0OfPby97tLkBUsIKqN-AWxQKJWesuE8MkOGHwDuv-El1iZmV6U9CZ0W_5Uklvj_P5MSXwJV6elXnYx',
  }
});
