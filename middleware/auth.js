export default function({ store, redirect }) {
  if (store.getters['auth/token'] === null) {
    redirect('/sign-in?error=login')
  }
}
