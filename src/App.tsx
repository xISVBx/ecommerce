import { FaShoppingCart } from 'react-icons/fa';
import SlideNavBar from './components/SliderNav/SlideNavBar';
import SlideNavBarGroupItems from './components/SliderNav/SlideNavBarGroupItems';
import { ISlideNavBarHeaderProps } from './components/SliderNav/SlideNavBarHeader';
import SlideNavBarPage from './components/SliderNav/SlideNavBarPage';
import SlideNavBarItem from './components/SliderNav/SlideNavBarItem';
import { FaHome } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { IoPeopleSharp } from 'react-icons/io5';
import { IoPeopleCircleSharp } from 'react-icons/io5';
import SearchInput from './components/Inputs/SearchInput';
import CircleAvatar from './components/Avatar/CirlceAvatar';
import { MdMailOutline } from 'react-icons/md';





const header: ISlideNavBarHeaderProps = {
  logo: '',
  name: 'Nexus Battle'
}
export default function App() {
  const handleOptionClickPopo = (option: string): void => {
    console.log(option)
  }
  const handleSearchInput = (query: string): void => {
    console.log(query)
  }
  return (
    <SlideNavBarPage >
      <SlideNavBar header={header}>
        <SlideNavBarItem itemName={'Home'} icon={<FaHome size={20} />} onClick={() => { console.log('oprimiste home') }} />
        <SlideNavBarGroupItems itemName={'Store'}
          options={['Featured', 'Categories', 'Discover', 'Wishlist']}
          onOptionClick={handleOptionClickPopo}
          icon={<FaShoppingCart size={20} />} />
        <SlideNavBarItem itemName={'Library'} icon={<FaGamepad size={20} />} onClick={() => { console.log('oprimiste home') }} />
        <SlideNavBarItem itemName={'Fiends'} icon={<IoPeopleSharp size={20} />} onClick={() => { console.log('oprimiste home') }} />
        <SlideNavBarItem itemName={'Community'} icon={<IoPeopleCircleSharp size={20} />} onClick={() => { console.log('oprimiste home') }} />
      </SlideNavBar>
      {/**Container */}
      <div className='h-[100vh] w-[calc(100vw-200px)] overflow-auto'>
      <div className='w-full flex flex-row justify-between items-center h-[50px]'>
        <div className='w-full max-w-[50%]'>
          <SearchInput onSearch={handleSearchInput} />
        </div>
        <div className='flex flex-row items-center'>
          <MdMailOutline size={25} className='text-white mx-1'/>
          <CircleAvatar size={40} firstName='Ivan' lastName='Vasquez' color='background-light' />
          <span className='text-white mx-1 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis'>Ivan Vasquez</span>
        </div>
      </div>
      </div>
      
    </SlideNavBarPage>
  )
}