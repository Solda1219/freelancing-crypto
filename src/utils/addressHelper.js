export const minAddress = (address, number = 5) =>
  address ? `${address.slice(0, number)}...${address.slice(number * -1)}` : '';
