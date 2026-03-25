import React, { useState } from 'react';
import Modal from './Modal';
import Query from './Query';
import useFormContext from '../../context/useFormContext';
import { services } from '../../data/services';
import Image from '../../assets/paw.png';

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
        <div className="container section__container fade-in" id="order">
            <div className="service__big-box">
                <h2 className="sections__hdl">Our Services</h2>
                <div className="service__box">
                    <div className="links__box">
                        {services.map(({ id, hdl, price, href }) => (
                            <div className="link__box" key={id}>
                                <img src={Image} alt="paw" />
                                <h2>{hdl}</h2>
                                <p>{price}</p>
                                <a
                                    href={href}
                                    onClick={handleOpen}
                                    className="btn"
                                >
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Service;
