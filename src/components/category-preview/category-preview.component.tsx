import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles'
import ProductCard from '../product-card/product-card.component';
import { useNavigate } from "react-router-dom";
import { CategoryItem } from '../../store/categories/category.types';
import { FC } from 'react';

type CategoryPreviewProps = {
    title: string;
    products: CategoryItem[];
  };

const CategoryPreview: FC<CategoryPreviewProps> = ({title, products}) => {

const navigate = useNavigate();
const categorySelectHandler = () => {
    navigate(`/shop/${title}`);
}

return(
    <CategoryPreviewContainer>
        <h2>
            <Title onClick={categorySelectHandler}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
            {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
                ))}
        </Preview>
    </CategoryPreviewContainer>
)
};

export default CategoryPreview;