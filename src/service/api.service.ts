const GET = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${page}`
  );
  const data = await response.json();
  return data;
};

const GETSOME = async (key: string, ids: number[]) => {
  if (key === "listOfLatestEpisodes") {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${ids}`
    );
    const data = await response.json();
    return data;
  }
};

const GETONE = async (key: string, id: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/${key}/${id}`);
  const data = await response.json();
  return data;
};

const ApiService = {
  GET,
  GETONE,
  GETSOME,
};

export default ApiService;
