import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body);
      console.log(userResponse.firstName);
      console.log(userResponse.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
