import { IPostJson } from '../models/post-interface-json'

// Arreglo de objetos que cumple con las interfaces Post, User y Reactions
const Dposts: Array<{ post: IPostJson;}> = [
  {
    post: {
      title: "Si estás viendo esto, es porque funcionó el linkeo y estás viendo datos desde un json del back.",
      text: "Your post text goes here so talk and talk and blablablablablablablablablabalbalablablabalbalablablablabalablablablabalbalabl",
      postImage: "https://img.lagaceta.com.ar/fotos/notas/2023/05/17/hoia-baciu-considerado-bosque-mas-tenebroso-mundo-991544-083744.png",
      typePost: ["Ghosts"],
      id: 1
    }
  },
  {
    post: {
      title: "Encounter in the Haunted Forest",
      text: "Your post text goes here so talk and talk and blablablablablablablablablabalbalablablabalbalablablablabalablablablabalbalabl",
      postImage: "https://ichef.bbci.co.uk/news/640/cpsprodpb/6D1E/production/_102143972_ghost.gif",
      typePost: ["Ghosts"],
      id: 2
    }
  },
  {
    post: {
      title: "Long Hair Lady",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et, officiis illum quia minus soluta quaerat quasi enim iste voluptate veritatis quos magni inventore maiores numquam deserunt delectus aliquid consequatur? Pariatur beatae neque dolore quas. Sapiente maiores ducimus consequatur veniam reiciendis hic alias illo delectus molestias sed blanditiis ad repudiandae, provident vel voluptatum culpa! Veritatis, perspiciatis. Laudantium eum quia veritatis minima accusantium dolores tempora quis ea fugiat cumque dicta exercitationem pariatur modi, tempore, temporibus dolorem incidunt quasi. Minus culpa ex maxime obcaecati deleniti aliquam consectetur aut. Unde voluptas libero ullam nobis vero mollitia quae, aspernatur, alias ad quo magni rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et, officiis illum quia minus soluta quaerat quasi enim iste voluptate veritatis quos magni inventore maiores numquam deserunt delectus aliquid consequatur? Pariatur beatae neque dolore quas. Sapiente maiores ducimus consequatur veniam reiciendis hic alias illo delectus molestias sed blanditiis ad repudiandae, provident vel voluptatum culpa! Veritatis, perspiciatis. Laudantium eum quia veritatis minima accusantium dolores tempora quis ea fugiat cumque dicta exercitationem pariatur modi, tempore, temporibus dolorem incidunt quasi. Minus culpa ex maxime obcaecati deleniti aliquam consectetur aut. Unde voluptas libero ullam nobis vero mollitia quae, aspernatur, alias ad quo magni rerum.",
      postImage: "https://img2.rtve.es/i/?w=1200&i=https://img2.rtve.es/imagenes/negamos-paranormal-miedo-creer-existe-realmente/1644832335656.jpg",
      typePost: ["Ghosts"],
      id: 3
    }
  },
];

export default Dposts;