export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    config.headers['Content-Type'] = 'application/json'
    const token = store.getters['auth/getToken']

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
  })

  $axios.onError((error) => {
    if (error.response) {
      if (error.response.status === 401) {
        redirect('/sign-in?message=error')
      } else if(error.response.status === 500) {
        redirect('error')
      }
    }
  })
}
