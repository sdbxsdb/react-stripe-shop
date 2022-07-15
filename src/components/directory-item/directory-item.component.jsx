import {DirectoryItemContainer, Body, BackgroundImage} from "./directory-item-styles";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imageUrl={imageUrl}
        className="background-image"
      />
      <Body>
        <Link className='flex flex-col justify-center items-center' to={`shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
