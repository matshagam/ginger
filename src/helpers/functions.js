export const fetchData = () => {
  return fetch('https://testapi.io/api/matshagam/data').then(data =>
    data.json()
  );
};
