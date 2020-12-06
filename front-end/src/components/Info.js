import React from 'react'
import Popularity from './Popularity'
import CountUp from 'react-countup';

export default function Info(
    {name, 
    previousPercentage, percentage, 
    previousVotes, votes,
    popularity, }) {

    return (
        <div >
           <div style={{fontWeight: 'bold'}}>{name}</div>
           <div>
           <CountUp
                start={previousVotes}
                end={votes}
                duration={0.6}
                separator="."             
                >
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>


               
           </div>
           <div>
            <CountUp
                    start={previousPercentage}
                    end={percentage}
                    duration={0.6}
                    decimals= {2}
                    decimal = ","
                    suffix = "%"           
                    >
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} />
                        </div>
                    )}
                </CountUp>

           </div>

           <Popularity value={popularity}/>
        </div>
    )
}
