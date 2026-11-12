import React from 'react';
import avatar1 from './images/avatar1.jpg';
import avatar2 from './images/avatar2.jpg';
import avatar3 from './images/avatar3.jpg';
import avatar4 from './images/avatar4.jpg';
import avatar5 from './images/avatar5.jpg';
import avatar6 from './images/avatar6.jpg';
import avatar7 from './images/avatar7.jpg';
import trainer6 from './images/trainer6.jpg'
import trainer1 from './images/trainer1.jpg'
import trainer2 from './images/trainer2.jpg'
import trainer3 from './images/trainer3.jpg'
import trainer4 from './images/trainer4.jpg'
import trainer5 from './images/trainer5.jpg'



import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Thunder Strength",
        info: "Master compound lifts, progressive overload, and functional strength protocols.",
        path: "/plans"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Athletic Conditioning",
        info: "High-intensity agility and endurance circuits designed to supercharge stamina.",
        path: "/plans"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Power & Speed",
        info: "Explosive plyometrics and sports performance training for peak velocity.",
        path: "/plans"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Mobility & Recovery",
        info: "Active recovery, joint mobility, and core stabilization for injury prevention.",
        path: "/plans"
    }
]

export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Relentless Grit",
        desc: "We believe dedication and focus turn bold fitness aspirations into enduring achievements."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Elite Guidance",
        desc: "Expert coaches tailor science-backed techniques to your unique body and performance goals."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Dynamic Community",
        desc: "Train alongside supportive, driven athletes who elevate each other every single day."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Proven Results",
        desc: "Structured training cycles designed for measurable gains in strength, speed, and endurance."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]

















export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]

export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: avatar1
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        avatar: avatar2
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: avatar3
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: avatar4
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: avatar5
    }
]





export const trainers = [
    {
        id: 1,
        image: trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: 'https://wa.me/15558486337?text=Hi%20John%2C%20I%20would%20like%20to%20train%20with%20you%20at%20Thunder%20Athletics.'
    },
    {
        id: 2,
        image: trainer2,
        name: 'Daniel Vinyo',
        job: 'Speed Trainer',
        socials: 'https://wa.me/15558486337?text=Hi%20Daniel%2C%20I%20would%20like%20to%20train%20with%20you%20at%20Thunder%20Athletics.'
    },
    {
        id: 3,
        image: trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: 'https://wa.me/15558486337?text=Hi%20Edem%2C%20I%20would%20like%20to%20train%20with%20you%20at%20Thunder%20Athletics.'
    },
    {
        id: 4,
        image: trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: 'https://wa.me/15558486337?text=Hi%20Shatta%2C%20I%20would%20like%20to%20train%20with%20you%20at%20Thunder%20Athletics.'
    },
    {
        id: 5,
        image: trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: 'https://wa.me/15558486337?text=Hi%20Diana%2C%20I%20would%20like%20to%20train%20with%20you%20at%20Thunder%20Athletics.'
    },
    {
        id: 6,
        image: trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: 'https://wa.me/15558486337?text=Hi%20Wayne%2C%20I%20would%20like%20to%20train%20with%20you%20at%20Thunder%20Athletics.'
    }
]













