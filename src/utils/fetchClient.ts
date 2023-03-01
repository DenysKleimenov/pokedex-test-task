const BASE_URL = 'https://pokeapi.co/api/v2/';

const wait = (delay: number) => new Promise((resolve) => {
  setTimeout(resolve, delay);
});

const request = async <T>(url: string): Promise<T> => {
  const options = { method: 'GET' };
  await wait(300);
  const response = await fetch(BASE_URL + url, options);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};

export const client = {
  get: <T>(url: string) => request<T>(url),
};
