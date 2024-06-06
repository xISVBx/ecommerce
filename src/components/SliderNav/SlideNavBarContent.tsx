import * as React from 'react';

interface ISlideNavBarContentProps {
    children:React.ReactNode
}

const SlideNavBarContent: React.FunctionComponent<ISlideNavBarContentProps> = ({children}) => {
  return(
    <div className='h-[100vh] w-[calc(100vw-200px)] overflow-auto'>
        {children}
    </div>
  );
};

export default SlideNavBarContent;
