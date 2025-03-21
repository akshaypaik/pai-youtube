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
    'wow!!!!!!',
    'Waiting for this To See In Theathers',
    'Fire🎉',
    'Goosebumps',
    'super song i liked it',
    'This scene is amazing! 😍🔥',
    'Classic movie! Watching it for the 10th time!',
    '👌👌',
    'OMG, I forgot how good this movie is!',
    'that dialogue hit different! 💯',
    '💥',
    'Best part of the movie coming up! 👀',
    'did you know this scene was shot in one take? 🎥🔥',
    'Brace yourselves, plot twist incoming! 🤯',
    '🔥❤️‍🔥',
    'I will definitly watch this movie',
    'blockbuster movie',
    'best trailer and i hope to see this in theatres',
    'this is funny 🤣😆',
    'loved it',
    'best drama to watch',
    'awesome what a trailer',
    '💯 blockbuster',
    'suuuuuuperrrrrr'
];

const randomUserMesssageImages = [
    'https://yt4.ggpht.com/ytc/AIdro_mAGwdwqov5l0eUllY-vt3gzobBg09Dd9bm9bRE-2acqbQ=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ODhR0od-WTbOMQQK2ZzdbtbWBmifXpTSoiBmpEjw4PKeoj5k5DONII-FYEInhC8L67WBzIchyA=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_mbY-y-7oNY-FrmPzT_rs8pPAxZZV5hGfeOjIb6MQM=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_m5evfCF_YxC_lDCZai6PdDPi8RLB_PVhrL3a1ARTLFBM2x9-KClsWFWW2FfUzwIrVBkQ=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_kQEcAhxjXJ8dmfmXiUL0BgQEiWIGAkws4ib4-yyibf5jQ=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_lZ9jWDUHiEewTMPaL05FoMhZC567_vN5MTviQSYHQ=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_nmVMA_55oGxbEVO-I96G-h1HVaAjxxidqo-rrX2Og=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_kz3GCqKBtTVcEIOrEeBrkd3zEGWkQEs6C-N1T-fEBGAI6BhyUrrDYcsm2hHsGELpLwLw=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/D4tYCPF1UsHcB6e8P2LxThBZLwswES_8seeGKPgVBfc4oNe_moxNAt4HKG82YznbTTnf6ihzMFI=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/euzN9lNZnQmcV_9W7ScF2NPPPPXn7jn0FPJKHc-BqTYTFqTXQIZxGcNfhC8gFRqqAtSjhF5O=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_mPjCumzmThrrzFZ57Ye28jHvg-DY1cuekCToTi1vh33A=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_lWD-SOhzfInY3UEukprvPiTfUW2OPWiMIAaGL_E7l0Sw=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/5pEASHoYTU6VWDWbVyg5HZ_KLc5OOCYtM8bqXxsG8C0DO1oaC2sBJsYpeeeesR4cAKDRyINU=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/nXUDyVr5O0oOWVQVfUaND0qXb67FTraeBRRbjyzBw4i7FX-hOePE244kf6o4D1DrXE2CWpqFog=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/6V7qFSr3YiKGLMJ8SYSbVuPOabOG3bTM2tbv2ad6ejLYroHbP7X-JOvuBSkbjOuc8ogU6uNzNQ=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_m4jJbEjL0SIaIOtfApQMcEAEbnC-hAy2naWEzpzZ-wcWvyVBEhmP2ZNn6PyBDPQpvKQA=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/smHll9uKXc4mqeKGcGqjOnwRUyfWQySVOC1xbq48EwmZ9oOZw14zzcP_EPRQu0dqOoemkf_w=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_lHl-MSXd7XwUwj7RON83So0hthlLBIKSq0r9RzHeKkVA=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/zqtyD1abwDyT-jwXTZhwdcc_31zIVbimNunzUqEVffGyuwBa5i6s4OGSxDq-HiIwpVQcnkbzFFA=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/ytc/AIdro_ntIewhqHLJ0jb4i8htlVqSetwgNKRcHmRn-O7k5fEhFy5geBaAVhx4v3nsZfmDVAxzbw=s32-c-k-c0x00ffffff-no-rj',
    'https://yt4.ggpht.com/PuhKtiSlcWVnRM7GzVwfc2MxvjhMnCz08eyVLobRx4OQBnsT2wLJXUec1dMRn4qFdgNWtqBl=s32-c-k-c0x00ffffff-no-rj'
]

export const generateRandomNamesForLiveChat = () => {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

export const generateRandomMessagesForLiveChat = () => {
    return randomChatMessage[Math.floor(Math.random() * randomChatMessage.length)];
};

export const generateRandomUserImagesForLiveChat = () => {
    return randomUserMesssageImages[Math.floor(Math.random() * randomUserMesssageImages.length)];
};