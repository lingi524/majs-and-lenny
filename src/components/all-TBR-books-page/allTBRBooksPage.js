import React from "react";
import Footer from "../global-component/footer";
import Menu from "../global-component/menu";
import MainTBRContent from "./mainTBRContent";


function AllTBRBooksPage({bookBoxData}) {

    return (
        <div className="AllTBRBooksPage">
            <Menu />
            <MainTBRContent bookBoxData={bookBoxData}/>
            <Footer />
        </div>
    )
}

export default AllTBRBooksPage