import API_ENDPOINT from '../globals/api-endpoint';

// eslint-disable-next-line no-unused-vars
class RestSource {
  static async daftarRest() {
    const response = await fetch(API_ENDPOINT.DAFTAR);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async detailRest(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestSource;
