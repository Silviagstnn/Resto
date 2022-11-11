import RestSource from '../../data/rest-source';
import UrlParser from '../../routes/url-parser';

// eslint-disable-next-line no-unused-vars
const Detail = {
  async render() {
    return `
          <h2>Daftar Restoran</h2>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestSource.detailRest(url.id);
    console.log(resto);
  },
};

export default Detail;
