import React from 'react';
import Cats from '../../assets/IMG_4242.webp';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

type About = {
    id: number;
    q: string;
    a: string;
};
const aboutUs: About[] = [
    {
        id: 1,
        q: 'What is your service area?',
        a: 'We are based in Blackheath (SE3) and cover nearby areas. Visits outside this zone may be possible for an additional fee — feel free to ask!',
    },
    {
        id: 2,
        q: 'Do you offer a meet & greet before booking?',
        a: 'Yes! We offer a free meet & greet before your first booking. This is a great opportunity for us to meet you and your cat, discuss their routine, and make sure everyone feels comfortable.',
    },
    {
        id: 3,
        q: 'What does a typical visit include?',
        a: 'Each visit includes feeding, fresh water, litter box cleaning, playtime, and lots of attention. We also provide updates with photos so you can see how your cat is doing.',
    },
    {
        id: 4,
        q: 'Will I get updates about my cat?',
        a: 'Absolutely! We send daily updates with photos or videos so you can stay connected and have peace of mind while you’re away.',
    },
    {
        id: 5,
        q: 'Can you administer medication?',
        a: 'We can give simple medication if it can be mixed with food (for example, crushed tablets). For your cat’s safety, we do not administer injections or more complex treatments. Let’s discuss your cat’s needs during the meet & greet.',
    },
    {
        id: 6,
        q: 'How do I book your service?',
        a: 'You can contact us through the website, send us a message, or simply click the "Book Now" button to send a booking enquiry. We will arrange a free meet & greet and take care of the rest.',
    },
    {
        id: 7,
        q: 'What if my cat is shy or anxious?',
        a: 'That’s completely okay — many cats are! We take a calm and patient approach, giving your cat space and time to feel comfortable. Every visit is tailored to your cat’s personality.',
    },
];

const AboutUs = () => {
    return (
        <div className="container container__about fade-in" id="about">
            <div className="about__box">
                <h2>About us</h2>
                <div className="about__wrapper">
                    <div className="about__paragraph">
                        <h3 className="question">How did it all start?</h3>
                        <p className="answer">
                            I became a cat mom in July 2022 when we adopted Gary
                            and Larry. Since then, making their lives happy has
                            been one of my top priorities. That’s why I named
                            the company Gary & Larry — because I want to make
                            other cats just as happy as they are.
                        </p>
                    </div>
                    <div className="about__paragraph">
                        <h3 className="question">
                            What is the mission of Gary & Larry?
                        </h3>
                        <p className="answer">
                            Our mission is to provide loving and reliable care
                            for your cats while you are away. Your cat stays in
                            the comfort of their own home — the place where they
                            feel safest and happiest — and we make sure everything is okay. You can
                            relax and enjoy your time away knowing your cat is
                            in good hands.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about__box">
                <h2>FAQ</h2>
                {aboutUs.map((item) => (
                    <Accordion
                        slotProps={{ heading: { component: 'h3' } }}
                        key={item.id}
                    >
                        <AccordionSummary
                            className="question"
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            {item.q}
                        </AccordionSummary>
                        <AccordionDetails className="answer">
                            {item.a}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};
export default AboutUs;
