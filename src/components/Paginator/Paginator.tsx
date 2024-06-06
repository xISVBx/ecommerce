import * as React from 'react';
import Button from '../Button/Button';

interface IPaginatorProps {
    currentPage: number;
    pages: number;
}

const Paginator: React.FunctionComponent<IPaginatorProps> = ({ currentPage, pages }) => {
    const renderButtons = () => {
        let init = currentPage - 2;
        let final = currentPage + 2;
        let extraDerecha = 0;
        let extraIzquierda = 0;
        if (currentPage < 3) {
            extraDerecha = Math.abs(currentPage - 3);
            init = 1
        }
        if (currentPage > pages - 2) {
            extraIzquierda = Math.abs(pages - currentPage)
            final = pages
        }
        if (extraDerecha > 0 && extraIzquierda == 0) {
            if (final + extraDerecha > pages) {
                final = pages
            } else {
                final = final + extraDerecha
            }
        } else if (extraIzquierda > 0 && extraDerecha == 0) {
            if (init - extraIzquierda < 1) {
                init = 1
            } else {
                init = init - extraIzquierda
            }
        }

        const buttons = [];
        for (let i = init; i <= final; i++) {
            buttons.push(
                <Button key={i} type={i == currentPage ? 'dark' : 'light'} tailwindClasses='rounded-lg p-2 h-[40px] w-[40px]'>
                    {i}
                </Button>
            );
        }
        return buttons;
    };
    return (
        <div className='h-[50px] bg-red-500 flex flex-col justify-center items-center'>
            <div className='flex flex-row gap-2'>
                <Button type={'light'} tailwindClasses='rounded-lg p-2 h-[40px] w-[40px]'>
                    {"<<"}
                </Button>
                <Button type={'light'} tailwindClasses='rounded-lg p-2 h-[40px] w-[40px]'>
                    {"<"}
                </Button>

                {renderButtons()}

                <Button type={'light'} tailwindClasses='rounded-lg p-2 h-[40px] w-[40px]'>
                    {">"}
                </Button>
                <Button type={'light'} tailwindClasses='rounded-lg p-2 h-[40px] w-[40px]'>
                    {">>"}
                </Button>
            </div>
        </div>
    );
};

export default Paginator;
