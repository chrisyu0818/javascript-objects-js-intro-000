var playlist = { artistName :"songTitle"}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({},playlist, {playlist :["artistName","songTitle"]})
  updatePlaylist
} 
