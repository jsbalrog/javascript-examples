var drink = "Rootbeer";
var lyrics = "";
var cans = 99;

while (cans > 0) {
  lyrics = lyrics + cans + " cans of " + drink + " on the wall\n";
  lyrics = lyrics + cans + " cans of " + drink + "\n";
  lyrics = lyrics + "Take one down, pass it around,\n";

  if (cans < 1) {
    lyrics = lyrics + (cans-1) + " cans of " + drink + " on the wall\n";
  } else {
    lyrics = lyrics + "No more cans of " + drink + " on the wall\n";
  }

  cans = cans - 1;
}

console.log(lyrics);
