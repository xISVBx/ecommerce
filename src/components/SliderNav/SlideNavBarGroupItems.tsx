import React, { ReactElement, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface ISlideNavBarGroupItemsProps {
  itemName: string;
  options: string[];
  icon: ReactElement;
  onOptionClick: (option: string) => void;
}

interface IToggleIconProps {
  isOpen: boolean;
}

const ToggleIcon: React.FC<IToggleIconProps> = ({ isOpen }) => {
  return isOpen ? <FaAngleUp /> : <FaAngleDown />;
};

const SlideNavBarGroupItems: React.FC<ISlideNavBarGroupItemsProps> = ({ itemName, options, icon, onOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onOptionClick(option);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button
        className='px-[8px] py-2 bg-background-dark hover:bg-background-light w-full overflow-hidden flex rounded-md'
        onClick={handleButtonClick}
      >
        <div className='text-white font-light flex flex-row w-full justify-between items-center overflow-hidden text-ellipsis whitespace-nowrap'>
          <div className='flex flex-row'>
            <div className='w-[20px]'>{icon}</div>
            <span className='pl-[8px]'>{itemName}</span>
          </div>
          <ToggleIcon isOpen={isOpen} />
        </div>
      </button>
      <div className={isOpen ? 'block' : 'hidden'}>
        {options.map((option, index) => (
          <button
            key={index}
            className='px-[36px] py-3 text-left text-white w-full hover:bg-background-light rounded-md'
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideNavBarGroupItems;
