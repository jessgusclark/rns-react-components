export default (address) => {
  // eslint-disable-next-line no-console
  console.log('operations file hit', address);

  return {
    type: 'SEARCH',
    result: address,
  };
};
