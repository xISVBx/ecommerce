import * as React from 'react';
import SlideNavBarHeader, { ISlideNavBarHeaderProps } from './SlideNavBarHeader';


interface ISlideNavBarProps {
    header:ISlideNavBarHeaderProps;
    children: React.ReactNode,
}

const SlideNavBar: React.FunctionComponent<ISlideNavBarProps> = ({header, children}) => {
    
    return (
        <div className='py-10 px-2 flex flex-col w-[200px] '>
            <SlideNavBarHeader logo={header.logo} name={header.name} />
            {children}
        </div>

    );
};

export default SlideNavBar;
