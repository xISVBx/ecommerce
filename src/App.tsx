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
import SlideNavBarContent from './components/SliderNav/SlideNavBarContent';
import HeroCard, { IHeroCardProps } from './components/Card/HeroeCard';

import GuerreroArmas from './assets/GuerreroDeArmas.jpg'
import GerreroTanque from './assets/GuerreroTanque.jpg'
import MagoFuego from './assets/MagoDeFuego.jpg'
import MagoHielo from './assets/MagoDeHielo.jpg'
import PicaroMachete from './assets/PicaroMachete.jpg'
import PicaroVeneno from './assets/PicaroVeneno.png'
import Paginator from './components/Paginator/Paginator';
import FloatingShoppingCar, { IShoppingCarProduct } from './components/FloatingShoppingCar/FloatingShoppingCar';


const heroCards: IHeroCardProps[] = [
  {
    name: "Guerrero de Armas",
    image: GuerreroArmas,
    power: 500,
    life: 600,
    defense: 560,
    attack: 5454,
    damage: 2200,
    price: 100 // Precio de la carta Guerrero de Armas
  },
  {
    name: "Guerrero Tanque",
    image: GerreroTanque,
    power: 500,
    life: 600,
    defense: 560,
    attack: 5454,
    damage: 2200,
    isInShoppingCart: true,
    price: 120 // Precio de la carta Guerrero Tanque
  },
  {
    name: "Mago de Fuego",
    image: MagoFuego,
    power: 500,
    life: 600,
    defense: 560,
    attack: 5454,
    damage: 2200,
    price: 90 // Precio de la carta Mago de Fuego
  },
  {
    name: "Mago de Hielo",
    image: MagoHielo,
    power: 500,
    life: 600,
    defense: 560,
    attack: 5454,
    damage: 2200,
    price: 95 // Precio de la carta Mago de Hielo
  },
  {
    name: "Picaro Machete",
    image: PicaroMachete,
    power: 500,
    life: 600,
    defense: 560,
    attack: 5454,
    damage: 2200,
    isInShoppingCart: true,
    price: 80 // Precio de la carta Picaro Machete
  },
  {
    name: "Picaro Veneno",
    image: PicaroVeneno,
    power: 500,
    life: 600,
    defense: 560,
    attack: 5454,
    damage: 2200,
    price: 85 // Precio de la carta Picaro Veneno
  }
];

const items: IShoppingCarProduct[] = [
  { id: 1, name: "Guerrero de Armas", price: 10, image: GuerreroArmas },
  { id: 2, name: "Guerrero Tanque", price: 20, image: GerreroTanque },
  // Añade más productos aquí
];

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

      <SlideNavBarContent>
        {/** Header */}
        <div className='w-full flex flex-row justify-between items-center h-[50px]'>
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
        </div>
        {/** Vitrina */}
        <div className='pr-2 flex flex-col justify-between ' style={{ height: 'calc(100vh - 50px)' }}>
          <div className='grid grid-cols-3 gap-[10px] justify-center items-center' style={{ height: 'calc(100vh - 150px)' }}>
            {heroCards.map((items, index) =>
              <HeroCard key={index}
                name={items.name}
                image={items.image}
                power={items.power}
                life={items.life}
                defense={items.defense}
                attack={items.attack}
                damage={items.damage}
                price={items.price}
                isInShoppingCart={items.isInShoppingCart} />)}
          </div>
          <Paginator currentPage={10} pages={55} />
        </div>
      </SlideNavBarContent>
    </SlideNavBarPage>
  )
}