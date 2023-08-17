 import React from  'react';
 import "./Title.css"

export default function Title(props){

    return (
            <div className='title-block'>
                <h1 className="title">{props.Title}</h1> 
                <h2 className="subtitle">{props.subTitle}</h2>
            </div>
    )
}