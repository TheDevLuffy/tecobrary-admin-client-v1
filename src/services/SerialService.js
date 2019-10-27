import Api from '@/services/Api'

export default {
  showBookSerials(param) {
    return Api.serials().post('/book', param)
  },

  addSerial(param) {
    return Api.serials().post('/', param)
  },

  removeSerial(queryParam) {
    return Api.serials().delete('/', { params: queryParam })
  }
}