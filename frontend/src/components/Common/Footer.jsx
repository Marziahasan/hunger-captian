import React from "react";
import imglogo from "../../assets/img/footer-logo.svg"
const Footer=({price,showCartList,setShowCartList})=>{
    return(
        <>
        <footer>
            <div className="subtotal">
                <span className="subtotal-test">Subtotal:</span>
                <span className="subtotal-price">${price}</span>
            </div>
            {showCartList ?(
                <button className="link-button" onClick={()=> setShowCartList(false)}>Go back to Home</button>
            ):(
                <button onClick={()=>setShowCartList(true)}>Check Selected Items</button>
            ) }
        </footer>
        <section className="bottom-footer">
            <img src={imglogo} alt="" />
            <p>Premium quality food at the best and most affordable price</p>
            <p>we have a new offer every day for 365 days</p>
            <span className="contact">Contact</span>
            <span className="email">E-mail: quickfood@Hungercaptian.com | Hotline: + 1 131 138 138</span>
            <div className="copyright">
                <p>DESIGN BY HUNGER CAPTIAN - © 2024. ALL RIGHTS RESERVED</p>
            </div>
        </section>
        </>
    )
}
export default Footer