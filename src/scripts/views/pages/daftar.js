import RestSource from '../../data/rest-source';

// eslint-disable-next-line no-unused-vars
const Daftar = {
  async render() {
    return `
        <h2>Daftar Restoran!!</h2>
    `;
  },

  async afterRender() {
    const resto = await RestSource.daftarRest();
    console.log(resto);
  },
};

export default Daftar;
