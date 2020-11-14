// import React from 'react'
import Header from '../component/Header'
import Footer from "../component/Footer"
import Cards from "../component/Cards"
// import {connect} from 'react-redux'
import firebase from "../firebase/firebase"
// import React, { Component } from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProducts } from '../store/action/ProductsAction'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        let allProducts = []
        firebase.database().ref("/data").on("child_added", (sa) => {
            allProducts.push(sa.val());
            this.props.setProducts(allProducts);
        this.setState({ products: allProducts })

        })
    }
    componentWillReceiveProps(nexprops) {
        this.setState({ products: nexprops.allProducts })
    }
    render() {
        return (
            <div>
                <div className="home-page">

                    <Header />
                    <br/>
                    <h3 style={{textAlign:"center",color:"rgb(0,47,52)"}}>Fresh recommendations</h3>
                    <div className="card-container">
                    
                   
                    {
                        this.state.products.map((product, i) => (
                            <Cards key={i} data={product} />
                            ))
                        }
                        </div>
                        <br/>
                    <Footer />
                    {/* <div><button onClick="addTodo()">AddToso</button></div> */}
                    {/* <h1>{props.mereProduct.name}</h1> */}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        allProducts: state.ProductsReducer.products
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setProducts: (e) => dispatch(addProducts(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);