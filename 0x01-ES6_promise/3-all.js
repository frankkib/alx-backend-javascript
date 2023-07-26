import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
