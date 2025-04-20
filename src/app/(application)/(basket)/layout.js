import RoadMap from '@/components/layout/basket/shared/RoadMap';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className="container w-full">
            <RoadMap />
            {children}
        </div>
    );
};

export default layout;
