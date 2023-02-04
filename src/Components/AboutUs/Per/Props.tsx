import React from 'react'
import PerfectHome from './PerfectHome';
import house1 from "../../Assets/neche1.jpg"
import house2 from "../../Assets/neche2.jpg"

const Props = () => {
  return (
    <div>
         <PerfectHome
                    title1='Quality properties'
                    bio1='Lorem ipsum dolor sit amet consectetur '
                    title2='Top rated agents'
                    bio2='Lorem ipsum dolor sit amet consectetur adipisicing '
                    title3='Easy and safe'
                    bio3='Lorem ipsum dolor sit amet consectetur adipisicing'
                    img={house1}
                    fd='row'
                    wid='40%'
                    wide='50%'
                />
                <PerfectHome
                    title1='Quality properties'
                    bio1='Lorem ipsum dolor sit amet consectetur adipisicing '
                    title2='Top rated agents'
                    bio2='Lorem ipsum dolor sit amet consectetur adipisicing '
                    title3='Easy and safe'
                    bio3='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                    img={house2}
                    fd='row-reverse'
                    wid='50%'
                    wide='40%'
                />
    </div>
  )
}

export default Props