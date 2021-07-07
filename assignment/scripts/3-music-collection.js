console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished:yearPublished


  }
collection.push(album);
return album;


}
console.log(collection);

console.log(addToCollection('Marquee Moon', 'Television', '1979'));
console.log(addToCollection('Kid A', 'Radiohead', '2000'));
console.log(addToCollection('The White Album', 'The Beatles', '1968'));
console.log(addToCollection('Keep It Like a Secret', 'Built to Spill', '1998'));
console.log(addToCollection('A Hard Days Night', 'The Beatles', '1964'));
console.log(addToCollection('Tapestry', 'Carole King', '1971'));

console.log(collection);

function showCollection(array) {
  console.log(`There are ${array.length} albums in this collection`);
  for (let item of array){
    console.log(`${item.title}, by ${item.artist}, published in ${item.yearPublished}`);
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
    else {
      console.log([]);

  }
}
console.log(searchResult);
}

findByArtist('The Beatles');
findByArtist('Creed');
