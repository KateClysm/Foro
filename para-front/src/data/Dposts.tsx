import { Post, User, Reactions  } from '../models/Ipost'

// Arreglo de objetos que cumple con las interfaces Post, User y Reactions
const Dposts: Array<{ post: Post; user: User; reactions: Reactions }> = [
  {
    post: {
      title: "Encounter in the Haunted Forest",
      text: "Your post text goes here so talk and talk and blablablablablablablablablabalbalablablabalbalablablablabalablablablabalbalabl",
      postImage: "https://img.lagaceta.com.ar/fotos/notas/2023/05/17/hoia-baciu-considerado-bosque-mas-tenebroso-mundo-991544-083744.png",
      typePost: ["Ghosts"]
    },
    user: {
      userName: "Alice Queen",
      userImage: "https://clipart-library.com/images/kc8oLrMMi.png",
      userTime: 3,
    },
    reactions: {
      likes: 2,
      comments: 9,
      views: 10,
    },
  },
  {
    post: {
      title: "Encounter in the Haunted Forest",
      text: "Your post text goes here so talk and talk and blablablablablablablablablabalbalablablabalbalablablablabalablablablabalbalabl",
      postImage: "https://img.lagaceta.com.ar/fotos/notas/2023/05/17/hoia-baciu-considerado-bosque-mas-tenebroso-mundo-991544-083744.png",
      typePost: ["Ghosts"]
    },
    user: {
      userName: "Alice Queen",
      userImage: "https://clipart-library.com/images/kc8oLrMMi.png",
      userTime: 3,
    },
    reactions: {
      likes: 2,
      comments: 9,
      views: 10,
    },
  },
];

export default Dposts;
