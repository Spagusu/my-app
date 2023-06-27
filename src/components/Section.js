import React from "react";

function Section({ title, description, sectionStyle, backgroundImage, children, itemColor }) {
    const sectionImage = {
        backgroundImage: `url(${backgroundImage})`,
    };
    let textColor = "text-white"

    if (itemColor === "light") {
        textColor = "text-black"
    }

    return (
        <section className="bg-cover relative" style={sectionImage} >          
            <div className={`${sectionStyle} ${textColor} h-screen py-44 px-60 sm:py-4 md:py-18 lg:py-44 xl:py-56 sm:px-2 md:px-16 xl:px-48`}>
                <span className="h-32 sm:h-8  w-64 sm:w-screen md:w-10 text-4xl font-bold mb-4 sm:text-sm md:text-text-base lg:text-lg xl:text-xl 2xl:text-2xl">{title}</span>
                <p className='h-34 w-2/4 text-base sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
                    {description}
                </p>
                {children} 
            </div>
        </section>
    );
}

export default Section;