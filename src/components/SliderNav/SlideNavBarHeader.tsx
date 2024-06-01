import * as React from 'react';

export interface ISlideNavBarHeaderProps {
    logo: string;
    name:string
}

const SlideNavBarHeader: React.FunctionComponent<ISlideNavBarHeaderProps> = ({logo, name}) => {
  return (
    <div className='mb-5 flex flex-row'>
            <img src={logo} alt="" className='w-10' />
            <div className='ml-2 '>
                <h5 className='text-white text-sm'>{name}</h5>
                <h6 className='text-xs text-gray-400'>Proyecto de Software</h6>
            </div>
        </div>
  );
};

export default SlideNavBarHeader;
