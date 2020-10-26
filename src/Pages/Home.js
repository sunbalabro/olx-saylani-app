import React from 'react'
import Header from '../component/Header'
import Footer from "../component/Footer"
import Cards from "../component/Cards"
export default function HomePage() {
    // const [list,setList] = useState([]);
    // const [Loading, setLoading] = useState(true)
    return (
        <div className="home-page">
            <Header />
            <Cards />
           <Footer />
        </div>
    )
}
