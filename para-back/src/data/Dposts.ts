import { Post, User, Reactions  } from '../models/interfaces/post-interface.js'

// Arreglo de objetos que cumple con las interfaces Post, User y Reactions
const Dposts: Array<{ post: Post; user: User; reactions: Reactions }> = [
  {
    post: {
      title: "Si estás viendo esto, es porque funcionó el linkeo y estás viendo datos desde un json del back.",
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
      postImage: "https://ichef.bbci.co.uk/news/640/cpsprodpb/6D1E/production/_102143972_ghost.gif",
      typePost: ["Ghosts"]
    },
    user: {
      userName: "Alice Queen",
      userImage: "https://clipart-library.com/images/kc8oLrMMi.png",
      userTime: 14,
    },
    reactions: {
      likes: 20,
      comments: 5,
      views: 40,
    },
  },
  {
    post: {
      title: "Long Hair Lady",
      text: "Your post text goes here so talk and talk and blablablablablablablablablabalbalablablabalbalablablablabalablablablabalbalabl",
      postImage: "https://img2.rtve.es/i/?w=1200&i=https://img2.rtve.es/imagenes/negamos-paranormal-miedo-creer-existe-realmente/1644832335656.jpg",
      typePost: ["Ghosts"]
    },
    user: {
      userName: "Alice Queen",
      userImage: "https://clipart-library.com/images/kc8oLrMMi.png",
      userTime: 5,
    },
    reactions: {
      likes: 1,
      comments: 3,
      views: 10,
    },
  },
];

export default Dposts;