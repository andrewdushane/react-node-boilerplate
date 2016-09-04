export default () => fetch('/api/example', {
  method: 'get',
}).then(response => response.json().then(data => data)
).catch((error) => {
  throw error;
});
