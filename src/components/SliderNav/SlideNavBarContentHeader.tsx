import * as React from 'react';

interface ISlideNavBarContentHeaderProps {
    children:React.ReactNode
}

const SlideNavBarContentHeader: React.FunctionComponent<ISlideNavBarContentHeaderProps> = ({children}) => {
  return (
    <div className='w-full flex flex-row justify-between items-center h-[50px]'>
        {children}
    </div>
  );
};

export default SlideNavBarContentHeader;
