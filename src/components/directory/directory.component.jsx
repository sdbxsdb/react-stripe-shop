import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map(( category, i ) => (
        <DirectoryItem key={i} category={category}/>
      ))}
    </div>
  )
}

export default Directory;