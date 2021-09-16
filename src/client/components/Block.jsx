import React from 'react';

const Block = ({ children, title, blockId, showTitle=true, devMod=false, className }) => (
    <section className={`block-section ${blockId || `block-${title}`}${devMod ? ' outline-block' : ''} ${className||''}`}>
        {showTitle? <header>{title}</header> : null}
        {children}
    </section>
);

export default Block;