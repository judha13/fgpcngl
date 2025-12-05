
'use client'

import Image from 'next/image';
import { useState } from 'react';

const services = [
    {
        title: "Sunday Service",
        img: "/home/sunday_service.jpg",
        desc: "Join us every Sunday for worship and teaching.",
        firstService: "6 AM - 8:30 AM",
        secondService: "10 AM - 12.30 PM",
        place: "FGP Church Nagercoil",
        liveLinks: {
            "2023 - Live playlist": "https://www.youtube.com/watch?v=fLwnpVFqdLs&list=PLJQgwS6Zt5q-m-7-DFNwL7o6P6hL4_ykO",
            "2024 - Live playlist": "https://www.youtube.com/watch?v=fLwnpVFqdLs&list=PLJQgwS6Zt5q-m-7-DFNwL7o6P6hL4_ykO",
            "2025 - Live playlist": "https://www.youtube.com/watch?v=WZRHS3tYy60&list=PLJQgwS6Zt5q-JXmcDj29HRGYOwxvJYIdt",
        },
    },
    {
        title: "Fasting Prayer",
        img: "/home/fasting_prayer.jpg",
        desc: "Join us every Friday at 10 AM for worship and prayer.",
        time: "10 AM - 1 PM",
        place: "FGP Church Nagercoil",
        liveLinks: {
            "2025 - Live playlist": "https://www.youtube.com/watch?v=P6srFGNlzfs&list=PLJQgwS6Zt5q8uDD8Vwzief-uKodYrAULf",
            "2024 - Live playlist": "https://www.youtube.com/watch?v=GpGaJ2YSQq0&list=PLJQgwS6Zt5q9zTi7TbgTb7w6of0ehoG6W",
            "2023 - Live playlist": "https://www.youtube.com/watch?v=GpGaJ2YSQq0&list=PLJQgwS6Zt5q9zTi7TbgTb7w6of0ehoG6W",
        },
    },
    {
        title: "Saturday Worship",
        img: "/home/saturday_worship.jpg",
        desc: "Join us every Saturday at 7 PM for worship.",
        time: "7 PM - 8:30 PM",
        place: "FGP Church Nagercoil",
        liveLinks: {
            "2023 - Live playlist": "https://www.youtube.com/watch?v=Mm9VQNiHn4Y&list=PLJQgwS6Zt5q8uTL1X03kuEGfNhKIU21xM",
            "2024 - Live playlist": "https://www.youtube.com/watch?v=blTswarZn3Y&list=PLJQgwS6Zt5q8DoTzc-EYM0IRVK6Nw1M1F",
            "2025 - Live playlist": "https://www.youtube.com/watch?v=ummQqaUOjW8&list=PLJQgwS6Zt5q9PFL0tZ1C2BR1yzPYABJ27",
        },
    },
    {
        title: "Bible Study",
        img: "/home/bible_study.jpg",
        desc: "Join us every Monday at 7 PM for teaching.",
        time: "7 PM - 8:30 PM",
        place: "FGP Church Nagercoil",
        liveLinks: {
            "2024 - கிறிஸ்துவின் சாயல்": "https://www.youtube.com/watch?v=1-nbsgFlxS0&list=PLJQgwS6Zt5q-xh5pa1iG_g13bPj4tXr2z",
            "2023 - இயேசுவிடம் கற்றுக்கொள்ளுங்கள்": "https://www.youtube.com/watch?v=lXERuqaavXs&list=PLJQgwS6Zt5q9j3UeceiV7D3KdOeBTQb9g",
            "2022 - இயேசுவிடம் கற்றுக்கொள்ளுங்கள்": "https://www.youtube.com/watch?v=bOY0zYtg_kY&list=PLJQgwS6Zt5q_zrMeVjMD6rJ1QxucltVNW",
        },
    },
];
export default function ServiceSection() {
    const [openModal, setOpenModal] = useState<number | null>(null);

    return (
        <div className="pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative group rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div className="relative w-full h-60">
                            <Image
                                src={service.img}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 group-hover:-translate-y-2">
                            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm mb-4">{service.desc}</p>
                            <button
                                onClick={() => setOpenModal(index)}
                                className="inline-block px-4 py-2 bg-[#84373D] text-white text-sm font-semibold rounded-lg shadow hover:bg-[#a95058] hover:scale-105 transition-transform duration-300"
                            >
                                More Details — Click Here
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {openModal !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 relative flex flex-col md:flex-row gap-4">
                        <button
                            className="z-10 text-2xl absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={() => setOpenModal(null)}
                        >
                            ×
                        </button>

                        <div className="w-full md:w-1/2 h-64 relative rounded-lg overflow-hidden">
                            <Image
                                src={services[openModal].img}
                                alt={services[openModal].title}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 text-[#222831]">
                            <h3 className="text-2xl font-semibold mb-2">{services[openModal].title}</h3>

                            {services[openModal].firstService && services[openModal].secondService ? (
                                <>
                                    <p className="mb-2">
                                        <span className="font-semibold">1st Service:</span> {services[openModal].firstService}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-semibold">2nd Service:</span> {services[openModal].secondService}
                                    </p>
                                </>
                            ) : (
                                <p className="mb-2">
                                    <span className="font-semibold">Time:</span> {services[openModal].time}
                                </p>
                            )}

                            {services[openModal].place && (
                                <p className="mb-4">
                                    <span className="font-semibold">Place:</span> {services[openModal].place}
                                </p>
                            )}

                            <p className="mb-4">{services[openModal].desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {Object.entries(services[openModal].liveLinks).map(([year, link]) => (
                                    <a
                                        key={year}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 bg-[#84373D] text-white rounded hover:bg-[#a95058] text-sm font-semibold"
                                    >
                                        {year}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}