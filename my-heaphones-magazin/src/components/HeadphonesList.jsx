import { useMemo } from "react";

const HeadphonesList = ({ products, maxPrice }) => {
    const priceFilter = useMemo(() => {
        return products.filter(product => product.price <= maxPrice);
    }, [products, maxPrice]);
    return (
        <ul>
            {priceFilter.map(product => (
                <li key={product.id}>{product.name} — ${product.price} </li>
            ))}
        </ul>
    );
};
export default HeadphonesList;