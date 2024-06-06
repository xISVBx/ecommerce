import * as React from 'react';
import { MdShoppingCart } from 'react-icons/md';

export interface IShoppingCarProduct {
    id: number,
    name: string,
    image: string,
    price: number
}

export interface IFloatingShoppingCarProps {
    items: IShoppingCarProduct[];
}

const FloatingShoppingCar: React.FunctionComponent<IFloatingShoppingCarProps> = ({ items }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative">
            <button onClick={toggleDropdown}>
                <MdShoppingCart size={25} className="text-white" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-[250px] bg-background-light rounded-lg shadow-lg z-50 overflow-y-auto min-h-[80px]" style={{ maxHeight: 'calc(50vh - 150px)' }}>
                    <div className="p-2">
                        {items.length === 0 ? (
                            <div className='h-full w-full flex flex-col justify-center items-center bg-red-500'>
                                <p className="text-white">El carrito está vacío</p>
                            </div>
                        ) : (
                            <ul>
                                {items.map(item => (
                                    <li key={item.id} className=" flex-col justify-between items-center py-1 h-[100px]">
                                        <div className='flex flex-row justify-between items-center h-full'>
                                            <div className='w-[100px] h-full bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${item.image})` }} />
                                            <div className='flex flex-col justify-start items-start' style={{ width: 'calc(100% - 105px)' }}>
                                                <span className="text-white font-semibold">{item.name}</span>
                                                <span className="text-white font-semibold">${item.price}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingShoppingCar;
