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
            <div className={`${sectionStyle} ${textColor} h-screen py-44 px-60 `}>
                <span className="h-32 w-64 text-4xl font-bold mb-4">{title}</span>
                <p className='h-34 w-2/4 text-base'>
                    {description}
                </p>
                {children}
            </div>
        </section>
    );
}

export default Section;