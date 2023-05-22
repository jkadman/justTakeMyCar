import { load } from 'google-maps';


const loadGoogleMaps = () => {
  return new Promise((resolve, reject) => {
    load({
      key: process.env.REACT_APP_GOOGLE_API_KEY,
      libraries: ['places'], // Optional: Add any additional libraries you need
    }, (err) => {
      if (err) {
        console.log('error', err)
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export default loadGoogleMaps;