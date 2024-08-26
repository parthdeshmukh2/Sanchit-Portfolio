import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="bg-[#f9f9f9] py-16 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center w-5/6 m-auto">
                <div className="w-full md:w-1/2 md:pr-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        I am Dr. Sanchit Chopra, an emerging practitioner deeply passionate about Homeopathic Medicine. Recently graduated with a Bachelor of Homeopathic Medicine and Surgery (B.H.M.S.), I am also proud to have completed Post Graduation National Academy of Homoeopathy India (P.G.N.A.H.I.). As I embark on my career journey, I am driven by a fervent dedication to holistic healthcare.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        My fascination with natural healing modalities ignited my pursuit of a career in homeopathy. The journey through my B.H.M.S. education, complemented by the advanced training at the National Academy of Homoeopathy, has been transformative. It has equipped me with both foundational knowledge and specialized expertise, instilling in me a profound respect for the principles of homeopathic practice.
                    </p>
                    <p className="text-lg text-gray-700">
                        As a budding practitioner, I approach patient care with a blend of enthusiasm and humility. Each encounter is an opportunity for me to learn, grow, and refine my skills. I am committed to listening attentively to my patients, understanding their unique health concerns, and crafting personalized treatment plans that honor the holistic nature of homeopathy.
                    </p>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.webp?b=1&s=612x612&w=0&k=20&c=90f-FdWCjl0CvaDG4D1tIlKPDomqSWEXyiVU3Dy42AI="
                            alt="Doctor Image"
                            width={700}
                            height={900}
                            className="transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-transparent hover:bg-transparent transition-all duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
