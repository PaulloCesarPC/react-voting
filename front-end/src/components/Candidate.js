import React from 'react'
import Info from './Info';
import Picture from './Picture';
import Position from './Position';
import css from './candidate.module.css';

export default function Candidate(
    {  
        candidate, 
        position, 
        previousVote, 
        previousPercentage,
       
    })

    {
    const {id,name, votes, percentage, popularity} = candidate;

    const imageSource = `${id}.jpg`
    return (
        <div className={css.flexRow}>
            <Position>{position}</Position>
            <Picture imageSource={imageSource} description={name}> </Picture>
            
            <Info 
                name={name} 
                votes={votes} 
                previousVote={previousVote}
                percentage = {percentage}
                previousPercentage={previousPercentage}  
                popularity={popularity}
            />
                    
        </div>
    )
}
