import './card.css';
import Filter from"./filter"
import myImage from '../src/assets/1.jpg'
import myImage1 from '../src/assets/2.jpg'
import myImage2 from '../src/assets/3.jpg'
import myImage3 from '../src/assets/4.jpeg'
import myImage4 from '../src/assets/5.jpg'
import myImage5 from '../src/assets/6.jpg'
import myImage6 from '../src/assets/7.jpg'
import myImage7 from '../src/assets/8.jpg'

export default function Card() {
    return (


        <div className='main'>

<div className='left-one'>
<Filter/>


</div>




            <div className='right-one'>
            <div className='heading'>
                <h2>Home</h2>
                <h2>/</h2>
                <h2>Home decoration</h2>
                <h2>/</h2>
                <h2>Artificial</h2>

            </div>





            <div className="card">

                <div className="image">
                    <img src={myImage} alt="My Image" />

                </div>
                <div className="title">
                    <h1>Decorative HeadPhones..</h1>
                </div>
                <div className="des">
                    <p>Decoration</p>
                    <button>$ 13.5</button>
                </div>
            </div>



            <div className="card">

                <div className="image">
                    <img src={myImage1} alt="My Image" />

                </div>
                <div className="title">
                    <h1>Decorative AppleWatch..</h1>
                </div>
                <div className="des">
                    <p>Decoration</p>
                    <button>$ 43.5</button>
                </div>
            </div>
            <div className="card">

                <div className="image">
                    <img src={myImage2} alt="My Image" />

                </div>
                <div className="title">
                    <h1>Decorative Apple Laptops..</h1>
                </div>
                <div className="des">
                    <p>Decoration</p>
                    <button>$ 23.5</button>
                </div>
            </div>


            <div className="card">

                <div className="image">
                    <img className='img4' src={myImage3} alt="My Image" />

                </div>
                <div className="title">
                    <h1>Decorative Cameras ..</h1>
                </div>
                <div className="des">
                    <p>Decoration</p>
                    <button>$ 53.5</button>
                </div>
            </div>



            <div className="card">

                <div className="image">
                    <img className="myimage4" src={myImage4} alt="My Image" />

                </div>
                <div className="title">
                    <h1>Decorative Tv ...</h1>
                </div>
                <div className="des">
                    <p>Decoration</p>
                    <button>$ 13.5</button>
                </div>
            </div>




            <div className="card">

                <div className="image">
                    <img className="myimage5" src={myImage5} alt="My Image" />

                </div>
                <div className="title">
                    <h1>Decorative Camera</h1>
                </div>
                <div className="des">
                    <p>Decoration</p>
                    <button>$ 13.5</button>
                </div>
            </div>

            <div className="card">

                <div className="image">
                    <img className="myimage5" src={myImage6} alt="My Image" />

                </div>
                <div className="title">
                    <h1>Decorative set</h1>
                </div>
                <div className="des">
                    <p>Decoration</p>
                    <button>$ 11.5</button>
                </div>
            </div>


            <div className="card">

                <div className="image">
                    <img className="myimage7" src={myImage7} alt="My Image" />

                </div>
                <div className="title">
                    <h1>Decorative Phone </h1>
                </div>
                <div className="des">
                    <p>Decoration </p>
                    <button>$ 33.5</button>
                </div>
            </div>
            </div>
        </div>


    )
}