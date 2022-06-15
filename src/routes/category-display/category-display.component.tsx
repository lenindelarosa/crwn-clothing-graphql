import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from '../../components/spinner/spinner.component';

import { CategoryDisplayContainer, Title} from './category-display.styles'
import ProductCard from '../../components/product-card/product-card.component';

type CategoryRouteParams = {
    category: string;
}

const CategoryDisplay = () => {

const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
const categoriesMap = useSelector(selectCategoriesMap);
const isLoading = useSelector(selectCategoriesIsLoading);
const products = categoriesMap[category];

// useEffect(() => {
//     setProducts(categoriesMap[category]);
// }, [category, categoriesMap]);

return(
    <>
        <Title>{category.toUpperCase()}</Title>
            {
                isLoading ? <Spinner /> : (
                    <CategoryDisplayContainer>    
                        {
                            products && products        //safegard in case products is not loaded yet. 
                            .map((product) => (
                            <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </CategoryDisplayContainer> 
                )
            }

    </>
)};

export default CategoryDisplay;