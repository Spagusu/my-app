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
        <section className="bg-cover w-full relative" style={sectionImage} >
            <div className={`${sectionStyle} ${textColor} h-screen py-8 px-16 sm:pt-16 md:py-28 md:px-32 `}>
                <span className="h-32 w-24 text-3xl font-bold md:text-4xl md:font-bold">{title}</span>
                <p className='h-28 text-base md:text-xl md:w-2/3'>
                    {description}
                </p>
                {children}
            </div>
        </section>
    );
}

export default Section;