const GET = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${page}`
  );
  const data = await response.json();
  return data;
};

const GETONE = async (id?: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();
  return data;
};

const ApiService = {
  GET,
  GETONE,
};

export default ApiService;
