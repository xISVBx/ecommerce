import * as React from 'react';

interface ISlideNavBarPageProps {
    children: React.ReactNode,
}

const SlideNavBarPage: React.FunctionComponent<ISlideNavBarPageProps> = ({ children }) => {
    const [slideNavBarContent, mainContent] = React.Children.toArray(children);
    return (
        <div className="bg-background-default h-[100vh] flex flex-row p-0">
            {slideNavBarContent}
            <div className='hover:cursor-col-resize px-1 w-1 flex 
                border-l-2 border-background-light select-none' />
            {mainContent}
        </div>
    );
};

export default SlideNavBarPage;
