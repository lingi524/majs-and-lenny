import React from "react";
import Footer from "../global-component/footer";
import Menu from "../global-component/menu";
import MainReadContent from "./mainReadContent";


function AllReadBooksPage({bookBoxData}) {

    return (
        <div className="AllReadBooksPage">
            <Menu />
            <MainReadContent bookBoxData={bookBoxData}/>
            <Footer />
        </div>
    )
}

export default AllReadBooksPage