const RAPIDAPI_KEY = '4621deb6a9msh7a4489e3de96da3p1f5098jsn7fb616c05a6a';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': RAPIDAPI_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

// The API no longer returns a gifUrl on exercise objects; images now live
// behind an authenticated endpoint that requires the key as a query param
// since <img> tags can't send custom headers.
export const getExerciseGifUrl = (id, resolution = 180) =>
  `https://exercisedb.p.rapidapi.com/image?exerciseId=${id}&resolution=${resolution}&rapidapi-key=${RAPIDAPI_KEY}`;

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};