import axios from 'axios'
import api from '../Services/api'

export const Request = async (request,share,typeSave,file) => {
    let formData = new FormData()
    formData.append('requestData', request)
    formData.append('numberOfShare', share)
    formData.append('cbTerms', 'checked')
    formData.append('typeSave', typeSave)
    file.allFile.map((fileList) => formData.append('uploadFile', fileList))
    const CancelToken = axios.CancelToken
    let source = CancelToken.source()
    setTimeout(() => {
      source.cancel()
    }, 10000)
    let response = await api.post("API/RequestForm_Line", formData)
    .then((res)=> res.data )
    .catch((err) => null)
    return response
  }

  export const CheckRequestStatus = async (lineId) => {
    let formData = new FormData()
    formData.append('SR_Line_ID', lineId)
    const CancelToken = axios.CancelToken
    let source = CancelToken.source()
    setTimeout(() => {
      source.cancel()
    }, 10000)
    let response = await api.post("API/CheckRequestForm_Line", formData)
    .then((res)=> res.data )
    .catch((err) => null)
    return response
  }