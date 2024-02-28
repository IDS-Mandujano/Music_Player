// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDLyA3wmyLwCz6vuAjrx5wgyEaC-svtCYOTcbOm6S-B-j1bP3gXVAbsWvm3pLeO1AySUpixQ7jkeijObDb5euQEYXH2XgzUUf7I3Rav2M1YhSfVUap-g9cye-mdOLcn7-4UdnFprpNzikn3iXd0qMkKR78k9Py3X3pT984VlaOPx51jfg8OYUOJ_cxvA5ncOO27TXMzYQfZHmQ_wi9O2zZaIoZfvBHTWi9fjPO5cPM8Fd9Q9t8OBmyAdn2cFViEoOKmVUePODFyBaHz2rYNJHWd';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const tracksUri = [
  'spotify:track:6dBUzqjtbnIa1TwYbyw5CM','spotify:track:4Ol6lxivp7pR7voovl8vKI','spotify:track:3a6PN6BRB8PP3ms48s7kU1','spotify:track:2fWSJxOHKSqXOkhxyo3Gly','spotify:track:1nULBrlzWatdcjA2ZctIMv','spotify:track:6TqXieeBcZZHyaO14hQpKx','spotify:track:0q6LuUqGLUiCPP1cbdwFs3','spotify:track:2fyIS6GXMgUcSv4oejx63f','spotify:track:3HOKxuTDmNVmIlCIpBiD8m','spotify:track:7ss0vnlNgbpUSYd5f5UyhD'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')

  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My recommendation playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);
