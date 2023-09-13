import './categories.scss';

interface CategoriesProps {
    cat: string;
    setCat: React.Dispatch<React.SetStateAction<string>>;
  }
  
const Categories = ({ cat, setCat }: CategoriesProps) => {

  return (
    <div className="categoryMenu">
    <h3>Category</h3> 
    <div className="categories">
        
        <div className="catInput">
          <label htmlFor="ghosts">Ghosts</label>
          <input type="radio" checked={cat === 'ghosts'} name="cat" value='ghosts' id="ghosts" onChange={e => setCat(e.target.value)} /> 
        </div>

        <div className="catInput">
          <label htmlFor="witchcraft">Witchcraft</label>
          <input type="radio" checked={cat === 'witchcraft'} name="cat" value='witchcraft' id="witchcraft" onChange={e => setCat(e.target.value)} /> 
        </div>

        <div className="catInput">
          <label htmlFor="demons">Demons</label>
          <input type="radio" checked={cat === 'demons'} name="cat" value='demons' id="demons" onChange={e => setCat(e.target.value)} /> 
        </div>

        <div className="catInput">
          <label htmlFor="mythological/oldfolklore">Mythological / Old Folklore</label>
          <input type="radio" checked={cat === 'mythological_oldfolklore'} name="cat" value='mythological_oldfolklore' id="mythological/oldfolklore" onChange={e => setCat(e.target.value)} />
        </div>
                        
        <div className="catInput">
          <label htmlFor="shadow_people">Shadow People</label>
          <input type="radio" checked={cat === 'shadowPeople'} name="cat" value='shadowPeople' id="shadow_people" onChange={e => setCat(e.target.value)} />
        </div>
        
        <div className="catInput">
          <label htmlFor="premonitions_and_prophecies">Premonitions and Prophecies</label>
          <input type="radio" checked={cat === 'premonitionsAndProphecies'} name="cat" value='premonitionsAndProphecies' id="premonitions_and_prophecies" onChange={e => setCat(e.target.value)} /> 
        </div>
    </div>
</div>
  )
};
  
export default Categories;