export const setHeaders = (accessToken: string) => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${accessToken}`,
});
