import * as React from 'react';
import GuerreroArmas from '../../assets/GuerreroDeArmas.jpg'
import GerreroTanque from '../../assets/GuerreroTanque.jpg'
import MagoFuego from '../../assets/MagoDeFuego.jpg'
import MagoHielo from '../../assets/MagoHielo.jpeg'
import PicaroMachete from '../../assets/PicaroMachete.jpg'
import PicaroVeneno from '../../assets/PicaroVeneno.png'
import Paginator from '../../components/Paginator/Paginator';
import HeroCard, { IHeroCardProps } from '../../components/Card/HeroeCard';

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


const ShowCasePage: React.FunctionComponent = () => {

    return (
        <div className='pr-2 flex flex-col justify-between h-full'>
            <div className='grid grid-cols-3 gap-[20px] justify-center items-center' style={{ height: 'calc(100vh - 150px)' }}>
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
    );
};

export default ShowCasePage;
