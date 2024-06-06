import * as React from 'react';

interface ISlideNavBarContentBodyProps {
    children: React.ReactNode
}

const SlideNavBarContentBody: React.FunctionComponent<ISlideNavBarContentBodyProps> = ({ children }) => {
    return (
        <div style={{ height: 'calc(100vh - 50px)' }}>
            {children}
        </div>
    );
};

export default SlideNavBarContentBody;
