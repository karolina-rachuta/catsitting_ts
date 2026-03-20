import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

type FaqItem = {
    id: number;
    q: string;
    a: string;
};

const faqList: FaqItem[] = [
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
        q: 'Can you feed my fish and water the plants while I am away?',
        a: 'Yes, of course',
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

function FAQ() {
    return (
        <div className="container section__container" id="faq">
            <div>
                <h2 className="sections__hdl">FAQ</h2>
                {faqList.map((item) => (
                    <Accordion
                        slotProps={{ heading: { component: 'h3' } }}
                        key={item.id}
                    >
                        <AccordionSummary
                            className="card__sub-hdl"
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            {item.q}
                        </AccordionSummary>
                        <AccordionDetails className="card__text">
                            {item.a}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
