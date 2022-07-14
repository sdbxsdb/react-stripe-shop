import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from './directory.styles.jsx';

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
      {categories.map(( category, i ) => (
        <DirectoryItem key={i} category={category}/>
      ))}
    </DirectoryContainer>
  )
}

export default Directory;