import { DirectoryItemContainer, BackgroundImage, Body} from './directory-item.styles';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { DirectoryCategory } from '../categories-menu/categories-menu.component'

type DirectoryItemProps = {
  category: DirectoryCategory;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const selectCategoryHandler = () => {
      navigate(route);
    };

    return (
      <DirectoryItemContainer onClick={selectCategoryHandler} >
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </Body>
      </DirectoryItemContainer> 
    )
};

export default DirectoryItem;