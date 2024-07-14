import React, { useState, useEffect } from 'react';
import propertyListingApi from '../../api/propertyListing';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [propertyListing, setPropertyListing] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            setIsLoading(true);
            const data = await propertyListingApi();
            setPropertyListing(data);
            setIsLoading(false);
        })();
    }, []);

    return (<>
        {isLoading
            ? <div>Loading...</div>
            : <ul className="PropertyListing">
                {propertyListing.map((property) => (
                    <li key={property.id}>
                        <PropertyCard {...property} />
                    </li>
                ))}
            </ul>
        }
    </>);
};

export default PropertyListing;
