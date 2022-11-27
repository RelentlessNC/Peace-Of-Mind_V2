const nouns = [
  "ardvark",
  "Alpacca",
  "Albatross",
  "Ant",
  "Anteater",
  "Antelope",
  "Armadillo",
  "Badger",
  "Babboon",
  "Bear",
  "Bumblebee",
  "Buffalo",
  "Bobcat",
  "Camel",
  "Capybara",
  "Chameleon",
  "Chinchilla",
  "Dingo",
  "Dinosaur",
  "Dragonfly",
  "Duck",
  "Elk",
  "Egret",
  "Emu",
  "Ferret",
  "Fish",
  "Firefly",
  "Fox",
  "Gecko",
  "Gazelle",
  "Giraffe",
  "Goat",
  "Goose",
  "Guppy",
  "Hawk",
  "Heron",
  "Husky",
  "Iguana",
  "Impalla",
  "Jellyfish",
  "Koala",
  "Kestral",
  "Lemur",
  "Lizzard",
  "LLama",
  "Liger",
  "Meercat",
  "Newt",
  "Owl",
  "Platypus",
  "Quail",
  "Rhinoceros",
  "Squid",
  "Tapir",
  "Wallaby",
  "Yeti",
  "Tree",
  "Bush",
  "Cloud",
  "Daisy",
  "Breeze",
  "Rock",
  "Mountain",
  "River",
  "Stream",
  "Pebble",
  "Geode",
  "Gemstone",
  "Brooke",
  "Ocean",
  "Pond",
  "Meadow",
  "Glade",
  "Sky",
  "Hill",
  "Waterfall",
  "Petal",
  "Grove",
  "Beach",
  "Moon",
  "Sun",
  "Star",
  "Planet",
  "Cliff",
  "Cave",
  "Forest",
  "Island",
  "Meadow",
  "Sea",
  "Branch",
  "Leaf",
  "Rain",
  "Valley",
  "Okra",
  "Cucumber",
  "Avocado",
  "Melon",
  "Banana",
  "Grapefruit",
  "Noodle",
];

const descriptors = [
  "Amazing",
  "Dancing",
  "Flittering",
  "Bouncing",
  "Tiny",
  "Giant",
  "Adorable",
  "Kind",
  "Ticklish",
  "Silly",
  "Spirited",
  "Cute",
  "Lovable",
  "Happy",
  "Bubbling",
  "Babbling",
  "Bright",
  "Chirping",
  "Skiping",
  "Soaring",
  "Shimmering",
  "Wild",
  "Glittering",
  "Glistening",
  "Sparkling",
  "Delightful",
  "Entertaining",
  "Incredible",
  "Marvellous",
  "Clever",
  "Calm",
  "Colorful",
  "Brave",
  "Courageous",
  "Eager",
  "Gentle",
  "Gifted",
  "Fancy",
  "Graceful",
  "Glorious",
  "Hungry",
  "Joyous",
  "Jolly",
  "Lively",
  "Shy",
  "Proud",
  "Powerful",
  "Precious",
  "Smiling",
  "Sleepy",
  "Talented",
  "Thoughtful",
  "Vivacious",
  "Witty",
  "Galloping",
  "Sleeping",
  "Laughing",
  "Singing",
  "Playful",
  "Creative",
  "Hopeful",
  "Mindful",
  "Leaping",
  "Creative",
  "Lively",
  "Purple",
  "Blue",
  "Pink",
  "Red",
  "Yellow",
  "Orange",
  "Green",
  "Golden",
  "Silver",
  "Articulate",
  "Adept",
  "Adventurous",
  "Agreeable",
  "Amusing",
  "Ambitious",
  "Confident",
  "Courteous",
  "Dazzling",
  "Dependable",
  "Diligent",
  "Exuberant",
  "Focused",
  "Gregarious",
  "Honest",
  "Humerous",
  "Inquisitive",
  "Intuitive",
  "Intellectual",
  "Inventive",
  "Lustrous",
  "Modest",
  "Observant",
  "Patient",
  "Optimistic",
  "Plucky",
  "Polite",
];

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const generateName = () => {
  const descriptor = random(descriptors);
  const noun = random(nouns);
  const randomName = descriptor + " " + noun;
  return `${randomName}`;
};
