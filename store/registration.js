import apiRoutes from '~/plugins/apiRoutes'

export const actions = {
  async signUpByEmail (ctx, data) {
    try {
      const res = await this.$axios.$post(`${this.$axios.defaults.baseURL + apiRoutes.signUpByEmail}`, data, { headers: {
        'Content-Type': 'application/json', 'X-CSRF-TOKEN': 'eyJpdiI6InRCZzIxVTlqV01NWWs0R2ZsbG5lbnc9PSIsInZhbHVlIjoiVzYzZ3ZkWGJic2ZscDdTamxGOTY3SXljcTRLZDhNcjJ2VzRXQXlzaE1tcVlkaVRFL2dpNFYzM2NvbENXQ01tTERQUUZkUUk4dDA5NGRNdEVET2Y0UUJhckw3RXFDb3JiQ1ZvbWFBWkdJVXNuVVcwa2NZZEVxTEFyMkE3QlpRNXgiLCJtYWMiOiI0ZWUyOTdiNGM1OTM1MzU5NjhmOWQyYTQ1ZmMyYjQ2ZTJkODUxMjYxOWVhNjQ0ZWMyN2U3YTdmYWFhZmMzNDZiIn0%3D'
        } })
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
