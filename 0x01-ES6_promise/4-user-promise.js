export default function singUpUser(firstName, lastName) {
  const userObject = {
    firstName,
    lastName,
  };
  return Promise.resolve(userObject);
}
