import React, { ReactNode } from 'react';

type SectionProps = {
    title?:string,
    children:ReactNode
}

const Section = ({children,title="this is section content"}:SectionProps) => {
    return(
        <section>
            <h1>{title}</h1>
            <p>{children}</p>
        </section>
    )
}

export default Section