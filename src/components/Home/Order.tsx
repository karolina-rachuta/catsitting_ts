import React, { useState, useContext } from 'react';
import Modal from './Modal';
import Query from './Query';
import { FormContext } from '../../context/QueryContext';

type Service = {
    id: number;
    src: string;
    alt: string;
    hdl: string;
    description: string;
    price: string;
    href: string;
};

const services: Service[] = [
    {
        id: 1,
        src: '',
        alt: '',
        hdl: 'Visit 30 min',
        description:
            'Spending 30 min together: feeding, cleaning the litter tray, playing, and keeping company.',
        price: 'AED 80',
        href: '',
    },
    {
        id: 2,
        src: '',
        alt: '',
        hdl: 'Visit 1h',
        description:
            'Spending 1h together: feeding, cleaning the litter tray, playing, and providing companionship.',
        price: '120 AED',
        href: '',
    },
    {
        id: 3,
        src: '',
        alt: '',
        hdl: 'Visit 1h',
        description:
            'Spending more time together: feeding, cleaning the litter tray, playing, and providing companionship',
        price: 'AED 200',
        href: '',
    },
    {
        id: 4,
        src: '',
        alt: '',
        hdl: 'Half day care (4h)',
        description:
            'Half-day cat sitting: feeding, cleaning the litter tray, playing, providing company, and giving lots of attention.',
        price: 'AED 250',
        href: '',
    },
    {
        id: 5,
        src: '',
        alt: '',
        hdl: 'Day care (8h)',
        description:
            'Full-day cat sitting: feeding, cleaning the litter tray, playing, providing company, and giving lots of attention.',
        price: 'AED 300',
        href: '',
    },
];

const Order = () => {
    const [queryIsOpen, setQueryIsOpen] = useState<boolean>(false);
    const context = useContext(FormContext);

    if (!context) {
        throw new Error('Order must be used within a FormContextProvider');
    }

    const { setFormValues } = context;

    function handleOnClose() {
        setQueryIsOpen(true);
        setFormValues('step', 0);
    }

    return (
        <div className="container order__container fade-in" id="order">
            <div className="order__big-box">
                <h2>Our Services</h2>
                <div className="order__box">
                    <div className="links__box">
                        {services.map(
                            ({
                                id,
                                src,
                                alt,
                                hdl,
                                description,
                                price,
                                href,
                            }) => (
                                <div className="link__box">
                                    <img src={src} alt={alt} />
                                    <h2>{hdl}</h2>
                                    <p>{description}</p>
                                    <p>{price}</p>
                                    <a href={href} onClick={handleOnClose}>
                                        Book now
                                    </a>
                                    <Modal>
                                        <Query
                                            setIsOpen={setQueryIsOpen}
                                            open={queryIsOpen}
                                            onClose={() =>
                                                setQueryIsOpen(false)
                                            }
                                        />
                                    </Modal>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Order;
