import { FaShoppingCart } from 'react-icons/fa';
import SlideNavBar from './components/SliderNav/SlideNavBar';
import SlideNavBarGroupItems from './components/SliderNav/SlideNavBarGroupItems';
import { ISlideNavBarHeaderProps } from './components/SliderNav/SlideNavBarHeader';
import SlideNavBarPage from './components/SliderNav/SlideNavBarPage';
import SlideNavBarItem from './components/SliderNav/SlideNavBarItem';
import { FaHome } from 'react-icons/fa';


const header: ISlideNavBarHeaderProps = {
  logo: '',
  name: 'Nexus Battle'
}
export default function App() {
  const handleOptionClickPopo = (option:string):void =>{
    console.log(option)
}
  return (
    <SlideNavBarPage >
      <SlideNavBar header={header}>
        <SlideNavBarItem itemName={'Home'} icon={<FaHome size={20} />} onClick={()=>{console.log('oprimiste home')}} />
        <SlideNavBarGroupItems itemName={'Store'}
          options={['Featured', 'Categories', 'Discover', 'Wishlist']}
          onOptionClick={handleOptionClickPopo}
          icon={<FaShoppingCart size={20} />} />
      </SlideNavBar>
      <div>
        xd
      </div>
    </SlideNavBarPage>
  )
}