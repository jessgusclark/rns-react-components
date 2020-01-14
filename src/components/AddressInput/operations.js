export default (address) => {
  // eslint-disable-next-line no-console
  console.log('operations file hit', address);

  //dispatch(searchingFor());

  return {
    type: 'SEARCH',
    result: address,
  };
};
