import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';
import ProductList from './components/ProductList/ProductList';
import Layout from './components/Layout/Layout';
// import dataJson from './data.json';
import dataJson from './data2.json';

function Main() {
    return (
        <>
            <Header />
            <Layout>
                <ProductList productData={dataJson.data}/>
                <SideBar />
            </Layout>
            <Footer />
        </>
    )
}

export default Main