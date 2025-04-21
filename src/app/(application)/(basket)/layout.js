import RoadMap from '@/components/layout/basket/shared/RoadMap';
import BasketContext from '@/context/BasketContext';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className="container w-full">
            <BasketContext>
                <RoadMap />
                {children}
            </BasketContext>
        </div>
    );
};

export default layout;
