import React from 'react';

const Section = ({ id, title, content }) => {
    return (
        <section id={id} className="p-8">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p>{content}</p>
        </section>
    );
};

export default Section;
