export default function({ store, redirect }) {
  console.log(store.getters['auth/getToken'])
  if (store.getters['auth/getToken'] == null) {
    redirect('/sign-in?error=login')
  }
}
