import Vue from 'vue'
import _ from 'lodash'

export default {
  get (url, arrParams) {
    if (arrParams && arrParams.length) {
      _.each(arrParams, param => {
        url += '/' + param
      })
    }

    return Vue.http.get(url, ['test'])
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
