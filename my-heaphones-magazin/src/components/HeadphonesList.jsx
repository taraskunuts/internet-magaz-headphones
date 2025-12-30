import { useMemo } from "react";
import "./HeadphonesList.css";

const HeadphonesList = ({ products, maxPrice }) => {
    const priceFilter = useMemo(() => {
        return products.filter(product => product.price <= maxPrice);
    }, [products, maxPrice]);
    return (
        <ul className="headphonesList">
            {priceFilter.map(product => (
                <li key={product.id} className="headphonesItem">
                    <span className="headphonesName">{product.name}</span>
                    <span className="headphonesPrice">${product.price}</span>
                </li>
            ))}
        </ul>
    );
};
export default HeadphonesList;