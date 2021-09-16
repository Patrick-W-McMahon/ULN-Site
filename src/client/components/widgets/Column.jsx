import React from 'react';

const  Column = ({ children }) => (
    <div className={'widget widget-column row'}>
        {children.map((item, index) => {
            return(
                <div key={index} className={'col'}>
                    {item}
                </div>
            );
        })}
    </div>
);

const Col = "";
export default Column;