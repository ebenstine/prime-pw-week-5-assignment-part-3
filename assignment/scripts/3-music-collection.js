console.log('***** Music Collection *****')
let collection = [];
//creating empty arrays for individual tracklists
let tracksMarqueeMoon = [];
let tracksKidA = [];
let tracksTheWhiteAlbum = [];
let tracksKeepItLikeaSecret = [];
let tracksRevolver = [];
let tracksTapestry = [];
let tracksEditedWhiteAlbum = [];


//creating function to add individual tracks to tracklist arrays, and assigning the tracks properties of 'name' and 'duration'
function addToTracks(tracks, name, duration, designation) {
  let track = {
    name: name,
    duration: duration,
    designation: designation
  }
  tracks.push(track);
  return track;
}


//running the function by the track array, the track name and the track duration individually for each album
addToTracks(tracksMarqueeMoon, 'See No Evil', '3:56');
addToTracks(tracksMarqueeMoon, 'Venus', '3:48');
addToTracks(tracksMarqueeMoon, 'Friction', '4:43');
addToTracks(tracksMarqueeMoon, 'Marquee Moon', '9:58');
addToTracks(tracksMarqueeMoon, 'Elevation', '5:08');
addToTracks(tracksMarqueeMoon, 'Guiding Light', '5:36');
addToTracks(tracksMarqueeMoon, 'Prove It', '5:04');
addToTracks(tracksMarqueeMoon, 'Torn Curtain', '7:00');
console.log(tracksMarqueeMoon);
//again
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
console.log(tracksKidA);
//again
//The designate property in the tracks object will eventually serve a function
//which will determine which tracks the band might have kept and discarded if they had tried to - or agreed upon how to - eliminate the weaker material.
//this property and the coming function will only be used for this album right now, although it does clutter up the logging of tracklists for the other albums.
//I could work around that somehow I'm sure but didn't figure out how.
addToTracks(tracksTheWhiteAlbum, 'Back In the USSR', '2:43', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Dear Prudence', '3:54', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Glass Onion', '2:17', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Obladi Oblada', '3:09', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Wild Honey Pie', '0:53', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Buffalo Bill', '3:14', 'discard');
addToTracks(tracksTheWhiteAlbum, 'While My Guitar Gently Weeps', '4:45', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Happiness Is A Warm Gun', '2:43', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Martha My Dear', '2:28', 'keep');
addToTracks(tracksTheWhiteAlbum, 'So Tired', '2:03', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Blackbird', '2:18', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Piggies', '2:03', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Rocky Raccoon', '3:32', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Dont Pass Me By', '3:46', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Do It In the Road', '1:41', 'discard');
addToTracks(tracksTheWhiteAlbum, 'I Will', '1:45', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Julia', '2:54', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Birthday', '2:43', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Yer Blues', '4:12', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Mother Natures Son', '2:46', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Everybodys Got Something To Hide', '2:25', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Sexy Sadie', '3:14', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Helter Skelter', '3:39', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Long Long Long', '3:05', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Revolution 1', '4:15', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Honey Pie', '2:41', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Savoy Truffle', '2:54', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Cry Baby Cry', '3:02', 'keep');
addToTracks(tracksTheWhiteAlbum, 'Revolution 9', '8:23', 'discard');
addToTracks(tracksTheWhiteAlbum, 'Good Night', '3:12', 'discard');
console.log(tracksTheWhiteAlbum);
//again
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
console.log(tracksKeepItLikeaSecret);

//again
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
console.log(tracksRevolver);
//and again

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
console.log(tracksTapestry);
//endaddToTracks

//Next, creating a function to add albums to the collection with properties of title, artist, year published, and tracks
function addToCollection(title, artist, yearPublished, tracks) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks


  } //pushing the album to the collection array and returning the result
  collection.push(album);
  return album;


}
console.log(collection, 'A Mix of Most-Loved Albums');
//Testing the addToCollection function by inputting the object properties and the previously established track arrays
console.log(addToCollection('Marquee Moon', 'Television', '1977', tracksMarqueeMoon));
console.log(addToCollection('Kid A', 'Radiohead', '2000', tracksKidA));
console.log(addToCollection('The White Album', 'The Beatles', '1968', tracksTheWhiteAlbum));
console.log(addToCollection('Keep It Like a Secret', 'Built to Spill', '1999', tracksKeepItLikeaSecret));
console.log(addToCollection('Revolver', 'The Beatles', '1966', tracksRevolver));
console.log(addToCollection('Tapestry', 'Carole King', '1971', tracksTapestry));
console.log(addToCollection('The Edited White Album', 'The Beatles', '2021', tracksEditedWhiteAlbum));
//Timeouthis will end up logging a redundant copy of the collection in the log but for the assignment purpose, it was successful.
//Testing this function in this random spot just to see what it does - it should print the collection.
//Console.log(search());
//Commented it out keep the log organized and clean.
//Creating a showCollection function to list the items we've added, including all their property information in a neatly ordered way.
function showCollection(collection) {

  console.log(`There are ${collection.length} records in this collection:`);
  //Looping through the collection and logging the items as outlined in Readme.md
  for (let items of collection) {
    console.log(`${items.title}, by ${items.artist}, published in ${items.yearPublished}`);
    for (let i = 0; i < items.tracks.length; i++) {
      console.log(`${i+1}. ${items.tracks[i].name}: ${items.tracks[i].duration}`);

    }
  }
}
//Testing the function.
showCollection(collection);



//Running an experimental function to separate and reassign tracks to a new array based on the designation they are given;
//the goal is to log a new array of tracks selected from the original album.
function findByDesignation(designation) {

  for (let track of tracksTheWhiteAlbum) {
    if (track.designation === designation) {
      tracksEditedWhiteAlbum.push(track);
    }
  }
  //This tracklist shows an edited version of the White Album, with egregious filler tracks and many cringey McCartney genre-appropriation attempts removed.
  console.log(tracksEditedWhiteAlbum); //!!!reminder to remove this log once I've figured out why the showCollection isn't working for this (I haven't).

}
findByDesignation('keep');
//I intended to have this tracklist print like the others do following the 'showCollection' syntax and logic,
//but after trying a fair bit I could not figure it out.  I would welcome a tip on what I might be missing or doing wrong,
//even though this has nothing to do with the actual assignment.

//Creating a findByArtist function which inputs an artist name and returns any matches found after looping through the collection.
//If there are no matches, the search returns an empty array.
function findByArtist(artist) {
  let searchResult = [];
  for (let item of collection) {
    if (item.artist === artist) {
      searchResult.push(item);
      console.log('Artist match found');
    }
  }

  console.log(searchResult);
}
//Testing the function with an artist that is represented in the collection, and with one that is not.
findByArtist('The Beatles');
findByArtist('Ted Nugent');

//Creating a function to search the collection by artist, year, and track name, with an array to hold the results.
function search(artist, year, trackName) {
  let results = [];
  let searchObject = {
    searchArtist: artist,
    searchYear: year,
    trackName: trackName
  }
  //If no search parameter is defined, the function returns the entire collection.
  //If the none of the search parameters are found to match in the collection, the search returns an empty array.
  if (searchObject.searchArtist === undefined && searchObject.searchYear === undefined && searchObject.trackName === undefined) {
    return collection;
  } else {
    for (let item of collection) {
      if (searchObject.searchYear === item.yearPublished && searchObject.searchArtist === item.artist) {
        for (let i = 0; i < item.tracks.length; i++) {
          if (searchObject.trackName === item.tracks.name) {
            results.push(item.artist);
            results.push(item.tracks[i].name);
          }
        }
      }
    }
  }
  return results;
}
//Testing with parameters that will not be found in the collection.
console.log(search('Ray Charles', '1957')); 
//Testing an empty search.
console.log(search());
//Below is a commented test for parameters that will be found in the collection; it is successful but looks horrible when printed -
//therefore I am leaving it out.
//console.log(search('Carole King', '1971'))
