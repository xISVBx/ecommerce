import * as React from 'react';
import { MdShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';

import Sword from '../../assets/Sword.png'
import Shield from '../../assets/Shield.png'
import Fire from '../../assets/Fire.png'
import Heart from '../../assets/Heart.png'
import Blood from '../../assets/Blood.png'

export interface IHeroCardProps {
    name: string
    image: string,
    power: number
    life: number
    defense: number
    attack: number
    damage: number
    price:number
    isInShoppingCart?: boolean
}

const HeroCard: React.FunctionComponent<IHeroCardProps> = ({ image, power, life, defense, attack, damage, isInShoppingCart = false, name, price }) => {
    return (
        <div className='flex flex-col w-full justify-center items-center h-full mx-auto bg-background-light rounded-xl'>
            <div className="bg-cover bg-center h-full w-full rounded-t-xl relative" style={{ backgroundImage: `url(${image})`, backgroundPosition: 'top center' }}>
                <div className='absolute top-0 left-0  bg-background-light py-3 px-3 rounded-tl-xl rounded-br-xl'>
                    {isInShoppingCart ? (
                        <MdShoppingCart className='text-white text-lg' />
                    ) : (
                        <MdOutlineShoppingCart className='text-white text-lg' />
                    )}
                </div>
                <div className='absolute -bottom-[1px] right-0 bg-background-light py-1 px-2 rounded-tl-xl'>
                    <span className='text-white text-lg font-semibold'>{price}$</span>
                </div>
            </div>
            <div className='bg-background-light flex justify-center p-0 m-0 items-center text-white text-lg font-bold h-auto w-full' >
                <span>{name}</span>
            </div>
            <div className='bg-background-light flex flex-wrap gap-2 justify-center items-center rounded-b-2xl px-1 pb-1 text-gray-400 h-auto w-full' >
                <div className='flex flex-row'>
                    <img src={Fire} alt="" className='h-[22px]' />
                    <span>{power}</span>
                </div>
                <div className='flex flex-row'>
                    <img src={Heart} alt="" className='h-[20px]' />
                    <span>{life}</span>
                </div>
                <div className='flex flex-row'>
                    <img src={Shield} alt="Defensa" className='h-[20px]' />
                    <span>{defense}</span>
                </div>
                <div className='flex flex-row'>
                    <img src={Sword} alt="Ataque" className='h-[20px]' />
                    <span>{attack}</span>
                </div>
                <div className='flex flex-row'>
                    <img src={Blood} alt="" className='h-[20px]' />
                    <span>{damage}</span>
                </div>
            </div>

        </div>
    );
};

export default HeroCard;
