export type Service = {
    id: number;
    src: string;
    alt: string;
    hdl: string;
    description: string;
    price: string;
    href: string;
    label: string;
};

export const services: Service[] = [
    {
        id: 1,
        src: '',
        alt: '',
        hdl: 'Visit 30 min',
        description:
            'Spending 30 min together: feeding, cleaning the litter tray, playing, and keeping company.',
        price: '£20',
        href: '',
        label: '30 min - £20',
    },
    {
        id: 2,
        src: '',
        alt: '',
        hdl: 'Visit 2 x 30min',
        description:
            'Spending twice a day 30 min together: feeding, cleaning the litter tray, playing, and providing companionship.',
        price: '£35',
        href: '',
        label: '30 min twice per day - £35',
    },
    {
        id: 3,
        src: '',
        alt: '',
        hdl: 'Visit 1h',
        description:
            'Spending more time together: feeding, cleaning the litter tray, playing, and providing companionship',
        price: '£30',
        href: '',
        label: '1h - £30',
    },
    {
        id: 4,
        src: '',
        alt: '',
        hdl: 'Visit 2h',
        description:
            'Spending more time together: feeding, cleaning the litter tray, playing, and providing companionship',
        price: '£50',
        href: '',
        label: '2h - £50',
    },
    {
        id: 4,
        src: '',
        alt: '',
        hdl: 'Half day care (4h)',
        description:
            'Half-day cat sitting: feeding, cleaning the litter tray, playing, providing company, and giving lots of attention.',
        price: '£70',
        href: '',
        label: 'Half Day Care (4h) - £70',
    },
    {
        id: 5,
        src: '',
        alt: '',
        hdl: 'Day care (8h)',
        description:
            'Full-day cat sitting: feeding, cleaning the litter tray, playing, providing company, and giving lots of attention.',
        price: '£100',
        href: '',
        label: 'Day Care (8h) - £100',
    },
];
