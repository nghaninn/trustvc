// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isV6EthersProvider = (provider: any): boolean => {
  return !!provider?.provider;
};
