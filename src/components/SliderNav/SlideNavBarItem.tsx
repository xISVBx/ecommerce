import React, { ReactElement } from 'react';

export interface ISlideNavBarItemProps {
    itemName: string;
    icon: ReactElement
    onClick: () => void;
}

const SlideNavBarItem: React.FC<ISlideNavBarItemProps> = ({ itemName, onClick, icon }) => {

    return (
        <button className='px-2 py-2 bg-background-default hover:bg-background-light w-full overflow-hidden flex rounded-md' onClick={onClick}>
            <div className='text-white font-light flex flex-row w-full items-center overflow-hidden text-ellipsis whitespace-nowrap'>
                <div className='flex flex-row'>
                    {icon}
                    <span className='pl-[8px]'>{itemName}</span>
                </div>
            </div>
        </button>
    );
};

export default SlideNavBarItem;
