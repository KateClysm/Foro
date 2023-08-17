export const PostTypes = [
    "Ghosts",
    "Witchcraft",
    "Demons",
    "Mythological",
    "Past Life Regression",
    "Shadow People",
    "Fairy Folklore",
    "Premonitions and Prophecies",
    "Zombies",
    "Black Magic",
    "Vudu Magic",
    "Sleep Paralysis",
    "Vampires"
] as const;

export type PostType = typeof PostTypes[number];

export type PostTypeSelection =
    | [PostType]
    | [PostType, PostType]
    | [PostType, PostType, PostType];