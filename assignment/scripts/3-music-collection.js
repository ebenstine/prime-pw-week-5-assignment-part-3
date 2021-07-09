console.log('***** Music Collection *****')
let collection = [];
//creating empty arrays for individual tracklists
let tracksMarqueeMoon = [];
let tracksKidA = [];
let tracksTheWhiteAlbum = [];
let tracksKeepItLikeaSecret = [];
let tracksRevolver = [];
let tracksTapestry = [];


//creating function to add individual tracks to tracklist arrays, and assigning the tracks properties of 'name' and 'duration'
function addToTracks(tracks, name, duration){
  let track = {
    name: name,
    duration: duration
    }
  tracks.push(track);
  return track;
}
addToTracks(tracksMarqueeMoon, 'See No Evil', '3:56');
addToTracks(tracksMarqueeMoon, 'Venus', '3:48');
addToTracks(tracksMarqueeMoon, 'Friction', '4:43');
addToTracks(tracksMarqueeMoon, 'Marquee Moon', '9:58');
addToTracks(tracksMarqueeMoon, 'Elevation', '5:08');
addToTracks(tracksMarqueeMoon, 'Guiding Light', '5:36');
addToTracks(tracksMarqueeMoon, 'Prove It', '5:04');
addToTracks(tracksMarqueeMoon, 'Torn Curtain', '7:00');

console.log(tracksMarqueeMoon);

addToTracks(tracksKidA, 'Everything In Its Right Place', '4:11');
addToTracks(tracksKidA, 'Kid A', '4:45');
addToTracks(tracksKidA, 'The National Anthem', '5:52');
addToTracks(tracksKidA, 'How To Disappear Completely', '5:56');
addToTracks(tracksKidA, 'Treefingers', '3:43');
addToTracks(tracksKidA, 'Optimistic', '5:16');
addToTracks(tracksKidA, 'In Limbo', '3:31');
addToTracks(tracksKidA, 'Idioteque', '5:09');
addToTracks(tracksKidA, 'Morning Bell', '4:36');
addToTracks(tracksKidA, 'Motion Picture Soundtrack', '6:59');


addToTracks(tracksTheWhiteAlbum, 'Back In the USSR','2:43');
addToTracks(tracksTheWhiteAlbum, 'Dear Prudence','3:54');
addToTracks(tracksTheWhiteAlbum, 'Glass Onion','2:17');
addToTracks(tracksTheWhiteAlbum, 'Obladi Oblada','3:09');
addToTracks(tracksTheWhiteAlbum, 'Wild Honey Pie','0:53');
addToTracks(tracksTheWhiteAlbum, 'Buffalo Bill','3:14');
addToTracks(tracksTheWhiteAlbum, 'While My Guitar Gently Weeps','4:45');
addToTracks(tracksTheWhiteAlbum, 'Happiness Is A Warm Gun','2:43');
addToTracks(tracksTheWhiteAlbum, 'Martha My Dear','2:28');
addToTracks(tracksTheWhiteAlbum, 'So Tired','2:03');
addToTracks(tracksTheWhiteAlbum, 'Blackbird','2:18');
addToTracks(tracksTheWhiteAlbum, 'Piggies','2:03');
addToTracks(tracksTheWhiteAlbum, 'Rocky Raccoon','3:32');
addToTracks(tracksTheWhiteAlbum, 'Dont Pass Me By','3:46');
addToTracks(tracksTheWhiteAlbum, 'Do It In the Road','1:41');
addToTracks(tracksTheWhiteAlbum, 'I Will','1:45');
addToTracks(tracksTheWhiteAlbum, 'Julia','2:54');
addToTracks(tracksTheWhiteAlbum, 'Birthday','2:43');
addToTracks(tracksTheWhiteAlbum, 'Yer Blues','4:12');
addToTracks(tracksTheWhiteAlbum, 'Mother Natures Son','2:46');
addToTracks(tracksTheWhiteAlbum, 'EGSTHCFMAMB','2:25');
addToTracks(tracksTheWhiteAlbum, 'Sexy Sadie','3:14');
addToTracks(tracksTheWhiteAlbum, 'Helter Skelter','3:39');
addToTracks(tracksTheWhiteAlbum, 'Long Long Long','3:05');
addToTracks(tracksTheWhiteAlbum, 'Revolution 1','4:15');
addToTracks(tracksTheWhiteAlbum, 'Honey Pie','2:41');
addToTracks(tracksTheWhiteAlbum, 'Savoy Truffle','2:54');
addToTracks(tracksTheWhiteAlbum, 'Cry Baby Cry','3:02');
addToTracks(tracksTheWhiteAlbum, 'Revolution 9','8:23');
addToTracks(tracksTheWhiteAlbum, 'Good Night','3:12');


addToTracks(tracksKeepItLikeaSecret, 'The Plan', '3:29')
addToTracks(tracksKeepItLikeaSecret, 'Center Of The Universe', '2:43')
addToTracks(tracksKeepItLikeaSecret, 'Carry The Zero', '5:44')
addToTracks(tracksKeepItLikeaSecret, 'Sidewalk', '3:51')
addToTracks(tracksKeepItLikeaSecret, 'Bad Light', '3:22')
addToTracks(tracksKeepItLikeaSecret, 'Time Trap', '5:22')
addToTracks(tracksKeepItLikeaSecret, 'Else', '4:09')
addToTracks(tracksKeepItLikeaSecret, 'You Were Right', '4:45')
addToTracks(tracksKeepItLikeaSecret, 'Temporarily Blind', '4:48')
addToTracks(tracksKeepItLikeaSecret, 'Broken Chairs', '8:40')



addToTracks(tracksRevolver, 'Taxman', '2:41');
addToTracks(tracksRevolver, 'Eleanor Rigby', '2:09');
addToTracks(tracksRevolver, 'Only Sleeping', '3:04');
addToTracks(tracksRevolver, 'Love You To', '3:03');
addToTracks(tracksRevolver, 'Here There And Everywhere', '2:27');
addToTracks(tracksRevolver, 'Yellow Submarine', '2:41');
addToTracks(tracksRevolver, 'She Said She Said', '2:39');
addToTracks(tracksRevolver, 'Good Day Sunshine', '2:12');
addToTracks(tracksRevolver, 'And Your Bird Can Sing', '2:02');
addToTracks(tracksRevolver, 'For No One', '2:03');
addToTracks(tracksRevolver, 'Doctor Robert', '2:17');
addToTracks(tracksRevolver, 'I Want To Tell You', '2:32');
addToTracks(tracksRevolver, 'Got To Get You Into My Life', '2:33');
addToTracks(tracksRevolver, 'Tomorrow Never Knows', '2:58');

addToTracks(tracksTapestry, 'I Feel The Earth Move', '3:00');
addToTracks(tracksTapestry, 'So Far Away', '3:56');
addToTracks(tracksTapestry, 'Its Too Late', '3:54');
addToTracks(tracksTapestry, 'Home Again', '2:29');
addToTracks(tracksTapestry, 'Beautiful', '3:08');
addToTracks(tracksTapestry, 'Way Over Yonder', '4:46');
addToTracks(tracksTapestry, 'Youve Got A Friend', '5:10');
addToTracks(tracksTapestry, 'Where You Lead', '3:20');
addToTracks(tracksTapestry, 'Will You Love Me Tomorrow', '4:13');
addToTracks(tracksTapestry, 'Smackwater Jack', '3:43');
addToTracks(tracksTapestry, 'Tapestry', '3:15');
addToTracks(tracksTapestry, 'Natural Woman', '3:49');


function addToCollection(title, artist, yearPublished, tracks) {
  let album = {
    title: title,
    artist: artist,
    yearPublished:yearPublished,
    tracks: tracks


  }
collection.push(album);
return album;


}
console.log(collection);

console.log(addToCollection('Marquee Moon', 'Television', '1979', tracksMarqueeMoon));
console.log(addToCollection('Kid A', 'Radiohead', '2000', tracksKidA));
console.log(addToCollection('The White Album', 'The Beatles', '1968', tracksTheWhiteAlbum));
console.log(addToCollection('Keep It Like a Secret', 'Built to Spill', '1998', tracksKeepItLikeaSecret ));
console.log(addToCollection('Revolver', 'The Beatles', '1966', tracksRevolver));
console.log(addToCollection('Tapestry', 'Carole King', '1971', tracksTapestry));

console.log(collection);

function showCollection(collection) {
  console.log(`There are ${collection.length} records in this collection`);
  for (let record of collection){
    console.log(`${record.title}, by ${record.artist}, published in ${record.yearPublished}`);
    //for (let track of tracks){
    //  console.log(`${track.name}, ${track.duration}`);
    }
  }
showCollection(collection);



function findByArtist(artist) {
  let searchResult = [];
  for (let item of collection){
    if (item.artist === artist){
    searchResult.push(item);
    console.log('Artist match found');
    }
  }

console.log(searchResult);
}

findByArtist('The Beatles');
findByArtist('Creed');

function search(){

}
