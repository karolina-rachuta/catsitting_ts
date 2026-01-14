import React, { useState, MouseEvent } from 'react';
import Modal from './Modal';
import Query from './Query';
import useFormContext from '../../context/useFormContext';
import { services } from '../../data/services';

const Service = () => {
    const [queryIsOpen, setQueryIsOpen] = useState<boolean>(false);
    const { setFormValues } = useFormContext();

    const handleOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setFormValues('step', 0);
        setQueryIsOpen(true);
    };

    const handleClose = () => setQueryIsOpen(false);

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
                                <div className="link__box" key={id}>
                                    <img src={src} alt={alt} />
                                    <h2>{hdl}</h2>
                                    <p>{description}</p>
                                    <p>{price}</p>
                                    <a href={href} onClick={handleOpen}>
                                        Book now
                                    </a>
                                    <Modal>
                                        <Query
                                            setIsOpen={setQueryIsOpen}
                                            open={queryIsOpen}
                                            onClose={handleClose}
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
export default Service;
