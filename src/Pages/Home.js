import React from 'react'
import Header from '../component/Header'
import Carousel from "../component/carousel"

export default function HomePage() {
    // const [list,setList] = useState([]);
    // const [Loading, setLoading] = useState(true)
    return (
        <div className="home-page">
            <Header /><br/>
            
            <Carousel />
        </div>
    )
}
