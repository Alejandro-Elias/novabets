let current = {
  id: 0,
  path: null,
  metadata: {
    title: "NovaBets",
    artist: "Music Player",
    duration: "00:00",
    cover: ""
  },
};

export const setCurrent = (data) => {
  current = { ...current, ...data };
};

export const getCurrent = () => current;
