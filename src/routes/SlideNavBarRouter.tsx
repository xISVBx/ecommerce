import * as React from 'react';
import GuerreroArmas from '../assets/GuerreroDeArmas.jpg'
import GerreroTanque from '../assets/GuerreroTanque.jpg'
import SlideNavBarPage from '../components/SliderNav/SlideNavBarPage';
import SlideNavBar from '../components/SliderNav/SlideNavBar';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { IoPeopleSharp } from 'react-icons/io5';
import { IoPeopleCircleSharp } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import FloatingShoppingCar, { IShoppingCarProduct } from '../components/FloatingShoppingCar/FloatingShoppingCar';
import { ISlideNavBarHeaderProps } from '../components/SliderNav/SlideNavBarHeader';
import SlideNavBarItem from '../components/SliderNav/SlideNavBarItem';
import SlideNavBarGroupItems from '../components/SliderNav/SlideNavBarGroupItems';
import SlideNavBarContent from '../components/SliderNav/SlideNavBarContent';
import SlideNavBarContentHeader from '../components/SliderNav/SlideNavBarContentHeader';
import SearchInput from '../components/Inputs/SearchInput';
import CircleAvatar from '../components/Avatar/CirlceAvatar';
import SlideNavBarContentBody from '../components/SliderNav/SlideNavBarContentBody';
import { Outlet } from 'react-router-dom';




const items: IShoppingCarProduct[] = [
    { id: 1, name: "Guerrero de Armas", price: 10, image: GuerreroArmas },
    { id: 2, name: "Guerrero Tanque", price: 20, image: GerreroTanque },
    // Añade más productos aquí
];

const header: ISlideNavBarHeaderProps = {
    logo: '',
    name: 'Nexus Battle'
}

interface ISlideNavBarRouterProps {
}

const SlideNavBarRouter: React.FunctionComponent<ISlideNavBarRouterProps> = () => {
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

            <SlideNavBarContent>
                {/** Header */}
                <SlideNavBarContentHeader>
                    <div className='w-full max-w-[50%]'>
                        <SearchInput onSearch={handleSearchInput} />
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <FloatingShoppingCar items={items} />
                        <MdMailOutline size={25} className='text-white mx-1' />
                        <div className='pr-1'>
                            <CircleAvatar size={40} firstName='Ivan' lastName='Vasquez' color='background-light' />
                            <span className='text-white mx-1 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis'>Ivan Vasquez</span>
                        </div>
                    </div>
                </SlideNavBarContentHeader>

                {/** Vitrina */}
                <SlideNavBarContentBody>
                    <Outlet/>
                </SlideNavBarContentBody>
            </SlideNavBarContent>
        </SlideNavBarPage>
    );
};

export default SlideNavBarRouter;
