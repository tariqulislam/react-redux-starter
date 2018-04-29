class RequestHeaderHelper {
    static jsonHeaderWithAuth () {
      return {
        headers: {
          'Content-Type': 'application/json',
          'accessToken': localStorage.getItem('accessToken')
        }
      }
    }
  
    static muitlpartHeaderWithAuth () {
      return {
        headers: {
          'Content-Type': 'multipart/form-data',
          'accessToken': localStorage.getItem('accessToken')
        }
      }
    }
  
    static jsonHeaderWithoutAuth () {
      return {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
  }
  
export default RequestHeaderHelper