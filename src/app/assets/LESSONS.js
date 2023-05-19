import FrenchHornPhoto from '../assets/img/frenchhornphoto.jpg';
import TrumpetPhoto from '../assets/img/trumpetphoto.jpg';
import Piano from '../assets/img/pianokeys.jpg';
import Virtual from '../assets/img/virtual.jfif';

export const LESSONS = [
    {
        id: 0, 
        type: 'Trumpet Lesson',
        duration: '30 min', 
        description: 'Ideal for younger beginning trumpet players or adult students on a lunch break',
        image: TrumpetPhoto
    },
    {
        id: 1, 
        type: 'Trumpet Lesson',
        duration: '60 min',
        description: 'Ideal for intermediate to advanced students or beginning adult students',
        image: TrumpetPhoto
    },
    {
        id: 2, 
        type: 'French Horn Lesson',
        duration: '30 min', 
        description: 'Ideal for younger beginning horn players or adult students on a lunch break',
        image: FrenchHornPhoto
    },
    {
        id: 3, 
        type: 'French Horn Lesson',
        duration: '60 min', 
        description: 'Ideal for intermediate to advanced students or beginning adult students',
        image: FrenchHornPhoto
    },
    {
        id: 4, 
        type: 'Piano Lesson',
        duration: '30 min', 
        description: 'Ideal for the young beginning pianist; includes Music Theory lessons',
        image: Piano
    },
    {
        id: 5, 
        type: 'Virtual Lesson',
        duration: '30 min', 
        description: 'Not in Charlotte? Virtual option available, but may not be the right fit for everyone',
        image: Virtual
    }
];
