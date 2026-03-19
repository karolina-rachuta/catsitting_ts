import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PetsIcon from '@mui/icons-material/Pets';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ScheduleIcon from '@mui/icons-material/Schedule';

type Advertisement = {
    id: number;
    icon: React.ReactNode;
    title: string;
    desc: string;
};

const AdvertisementList: Advertisement[] = [
    {
        id: 1,
        icon: <HomeRoundedIcon />,
        title: 'Home Visits',
        desc: 'Daily visits to feed, play, and provide companionship for your cat in their familiar environment.',
    },
    {
        id: 2,
        icon: <PetsIcon />,
        title: 'Personalized Care',
        desc: "Tailored attention based on your cat's unique personality, routine, and special requirements.",
    },
    {
        id: 3,
        icon: <PhotoCameraIcon />,
        title: 'Photo Updates',
        desc: 'Daily photos and videos so you can see your furry friend is happy and well cared for.',
    },
    {
        id: 4,
        icon: <ScheduleIcon />,
        title: 'Flexible Scheduling',
        desc: "Morning, afternoon, or evening visits to match your cat's regular feeding and play schedule.",
    },
];

function WhyChooseUs() {
    return (
        <div className="container" id="chooseus">
            <h2 className='chooseus-hdl'>Why Choose Our Cat Sitting Service?</h2>
            <p className='chooseus-desc'>Professional, reliable care that keeps your cat comfortable and happy at home.</p>
            <Box className="card-container">
                {AdvertisementList.map((item) => (
                    <Card
                        key={item.id}
                        variant="outlined"
                        className="card-wrapper"
                    >
                        <Box className="icon-box">{item.icon}</Box>
                        <CardContent className="text-wrapper">
                            <Typography className="text-hdl">
                                {item.title}
                            </Typography>
                            <Typography className="text-desc">
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </div>
    );
}

export default WhyChooseUs;
