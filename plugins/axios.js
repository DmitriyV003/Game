export default function ({ $axios }) {
  $axios.onRequest(config => {
    config.headers.common['Content-Type'] = 'application/json';
  })
}
