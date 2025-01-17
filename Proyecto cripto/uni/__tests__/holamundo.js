describe('consultarCriptomonedas', () => {
  it('debe llamar a la API de criptomonedas', async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    expect(resultado).toBeDefined();
  });
});

+
describe('leervalor', () => {
  it('debe actualizar el objeto de búsqueda', () => {
    const evento = { target: { name: 'moneda', value: 'USD' } };
    const objBusqueda = {};
    objBusqueda[evento.target.name] = evento.target.value;
    expect(objBusqueda.moneda).toBe('USD');
  });
});




