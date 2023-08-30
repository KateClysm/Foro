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



//typeof PostTypes: Esta parte obtiene el tipo subyacente de la variable PostTypes, que es un arreglo de cadenas de texto que representan diferentes tipos de publicaciones.

//.number: Agregar .number al final de typeof PostTypes permite que TypeScript infiera los índices numéricos del arreglo. Esto es esencial para crear un tipo que incluya todas las opciones posibles del arreglo.

//type PostType: Esto declara un nuevo tipo llamado PostType que se basa en los índices numéricos del arreglo PostTypes.

//En conjunto, esta línea de código define un nuevo tipo llamado PostType que representa una de las opciones disponibles en el arreglo PostTypes. Esto permite establecer restricciones y asegurarse de que cualquier variable o parámetro que utilice PostType solo puede tomar valores que correspondan a los tipos de publicación definidos en el arreglo PostTypes.

