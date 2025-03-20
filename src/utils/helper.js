const nameList = [
    'Akshay', 'Radhe', 'Future', 'Dev',
    'Fly', 'Flying', 'Krishnadas', 'Soaring', 'Kavitha', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Momo', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Akshay', 'Radhe', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Krishnadas', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Kavitha', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

const randomChatMessage = [
    '😁😁',
    'awesome 💘',
    'this movie is good pls do watch',
    'Outstanding blockbuster loading 🔥🔥',
    '💥',
    'Wow!!!!!!',
    '👌👌',
    'Waiting for this To See In Theathers',
    'Fire🎉',
    'Goosebumps',
    'super song i liked it',
    'This scene is amazing! 😍🔥',
    'Classic movie! Watching it for the 10th time!',
    '"OMG, I forgot how good this movie is!',
    'That dialogue hit different! 💯',
    '"Best part of the movie coming up! 👀',
    '"Did you know this scene was shot in one take? 🎥🔥',
    'Brace yourselves, plot twist incoming! 🤯',
    '🔥❤️‍🔥'
]

export const generateRandomNamesForLiveChat = () => {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

export const generateRandomMessagesForLiveChat = () => {
    return randomChatMessage[Math.floor(Math.random() * randomChatMessage.length)];
};