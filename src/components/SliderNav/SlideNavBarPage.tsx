import * as React from 'react';

interface ISlideNavBarPageProps {
    children: React.ReactNode,
}

const SlideNavBarPage: React.FunctionComponent<ISlideNavBarPageProps> = ({children}) => {
    const [slideNavBarContent, mainContent] = React.Children.toArray(children);
    return (
        <div className="bg-background-default h-[100vh] flex flex-row p-0">
                {slideNavBarContent}
                {mainContent}
        </div>
    );
};

export default SlideNavBarPage;
