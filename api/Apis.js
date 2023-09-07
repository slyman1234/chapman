const apikey = 'Bearer veaxLaEE5uG57slAMSBA-Rc3';

const url = 'https://spinitron.com/api';

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${apikey}`,
  },
};

export const getItems = async () => {
  return await fetch(`${url}/shows`, options).then(response => response.json());
};

export const getsingleItems = async id => {
  return await fetch(`${url}/playlists?show_id=${id}`, options).then(response =>
    response.json(),
  );
};

export const getPlaylist = async () => {
  return await fetch(`${url}/playlists`, options).then(response =>
    response.json(),
  );
};

export const Assets = {
  lottieFiles: {
    planePath: require('../components/showscomponents/radiohead.json'),
  },
};
