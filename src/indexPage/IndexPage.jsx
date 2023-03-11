import STARS from '../images/stars1.png'
import MOON from '../images/moon2.png'
import TREES from '../images/trees.png'
import ROCK from '../images/rock.png'
import SWEATER from '../images/shoe2.png'
import './ndexPage.css'
import { useEffect } from 'react'

function IndexPage(){
    /*
    useEffect(() => {
        var stars = document.getElementById("stars")
        var moon = document.getElementById("moon")
        var trees = document.getElementById("trees")
        var rock = document.getElementById("rock")
        var brand = document.getElementById("text")

        window.addEventListener('scroll', e => {
        let value = window.scrollY;
        stars.style.left = value + 'px'
        moon.style.left = value + 'px'
        trees.style.marginRight= value * 0.4 + 'px'
        rock.style.top = value * 0.4 + 'px'
        })
    })
    */

    return(
        <div>
            <section>
                <img src={SWEATER} id="moon" alt=''></img>
                <h2 id="text">KATSUE ACTIVE WEAR</h2>
                <h4 id="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed qwewzas</h4>
                <span id="btn">Click</span>
                
            </section>
            <div className="sec" id="sec">
                <h2>Katsue Active Wear</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    mod tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    asdfasdfasdfasdfasdfasdfasdfasdfasdfd tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    <br></br>
                    <br></br>
                    asdfasdfasdfasdfd tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf

                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf
                    d tempor incididunt ut labore et doloreasdfasdfasdfasdfasdfsadfasdf

                </p>
            </div>
        </div>
    )
}
export default IndexPage;