export default function({ store, redirect }) {
  if (store.getters['auth/getToken'] == null) {
    redirect('/sign-in?error=login')
  }
}
