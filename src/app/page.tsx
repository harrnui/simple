'use client'
import { useState, useEffect, useRef } from "react";
import "./page.css"

const words = ["SIMPLE","BUT","ELEGANT"]

// USE SOMEWHERE on site: SIMPLE LOOK BUT HARD TO CODE IT

export default function Page(){
    let [click,numberOfClicks] = useState(0)

    const handleArrow = () =>{
        numberOfClicks(prev => prev+1);
        console.log(words[click])
   }


   const handleArrow2 = () =>{

   }
    // First page
    return (
        <body>
            <main>
                { click == 3 ? <SecondPage handleArrow2={handleArrow2}></SecondPage> : <FrontPage prop={words[click]} handleArrow={handleArrow}></FrontPage>}
                
                
            </main>
        </body>
    );
}
//<img className="background-image" src={"/nature_picture.jpg"}></img> if i want to return the image !!
function FrontPage({prop,handleArrow}){
    return(
        <section className="section1">
            
            <p className="mainText">{prop}</p>
            <p className="follow-arrow">Follow the arrow to the right</p>
            <img className="arrow" onClick={handleArrow} src={"/arrow.png"}></img>
        </section>
)

/*This code here is just some squares for the second page
<div className="square">
                    
                </div>
                <p className="welcome-paragraph">WELCOME</p>
                <div className="intersection">
                    
                </div>
                <div className="placeholder">
                    <p className="text">Something to write I don't know it should stand here and look pretty</p>
                </div>
            
            </section>*/
}


//<img className="arrow" onClick={handleArrow2} src={"/arrow.png"}></img> DOnt forget to reshape the arrow!
function SecondPage({handleArrow2}){
    return (

        <div className="parent-holder">
            <NavBar></NavBar>
            <section className="section2">
                <video src={"/video.mp4"} loop autoPlay muted ></video>
                <p className="center-paragraph"><em>Some text is gonna go here</em></p>
                
            </section>
            <div className="sectionBlack">
                <p className="paragraph2"><em>Some text is gonna go here</em></p>
            </div>

            <section className="section2">
                <div className="to-center">
                    <RowWithImage image1={"/nature_picture.jpg"} image2={"nature0.jpg"} image3={"nature1.jpg"}></RowWithImage>
                    <RowWithImage image1={"/nature2.jpg"} image2={"/nature3.jpg"} image3={"/nature4.jpg"}></RowWithImage>
                </div>

                
            </section>
            
            <div className="section2">
                <div className="to-center">
                    <RowWithImage image1={"/nature_picture.jpg"} image2={"nature0.jpg"} image3={"nature1.jpg"}></RowWithImage>
                    <RowWithImage image1={"/nature2.jpg"} image2={"/nature3.jpg"} image3={"/nature4.jpg"}></RowWithImage>
                </div>
            </div>

            <div className="section2">
                <div className="to-center">
                    <RowWithImage image1={"/nature_picture.jpg"} image2={"nature0.jpg"} image3={"nature1.jpg"}></RowWithImage>
                    <RowWithImage image1={"/nature2.jpg"} image2={"/nature3.jpg"} image3={"/nature4.jpg"}></RowWithImage>
                </div>
            </div>
        </div>
        
    );
}

function RowWithImage({image1,image2,image3}) {
    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });

    return(
        <div className="row">
            <div className="image">
                <img ref={ref1} className={`images${inView1 ? " animate" : ""}`} src={image1} />
            </div>
            <div className="image">
                <img ref={ref2} className={`images${inView2 ? " animate" : ""}`} src={image2} />
            </div>
            <div className="image">
                <img ref={ref3} className={`images${inView3 ? " animate" : ""}`} src={image3} />
            </div>
        </div>
    )
}
//I dont understand this function
function useInView(options) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            options
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [options]);

    return [ref, inView] as const;
}

function NavBar(){
    return(
        <nav>
            <h1>SIMPLE</h1>
            <ol>
                <li><a className="anchor" href="#">Home</a></li>
                <li><a className="anchor" href="#">Services</a></li>
                <li><a className="anchor" href="#">About</a></li>
                <li><a className="anchor" href="#">Contact</a></li>
                <li><a className="anchor" href="#">Something</a></li>
                <li><a className="anchor" href="#">Sign up</a></li>
            </ol>
        </nav>
    )
}