
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./jamin.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "./images/duplicate.jpg";

import { metronome } from 'ldrs'

metronome.register()

// Default values shown


const Table = ({ products }) => {
    // const firstProduct = products.length > 0 ? products[0] : null;
    let firstProduct = true;
    // if (products.length > 0) {
    //     const { _id, si, name, amount, address, year, text } = products[0];
    //     firstProduct = { _id, si, name, amount, address, year, text };
    // }
    let imgwidth = {
        width:"100px",
        height: "100px",
        margin: "0px 10px 10px 10px "
    }
    console.log(products);
    let link = "https://nawnitstudio.000webhostapp.com/certificate/index.html";
    return (
        <>
            <main id='grandparent_jamin'>

                {firstProduct ? (
                    <div className='grandparent__jamin_child'>
                        <div className='header__child_jamin'>
                            <p>home/jamin</p>
                        </div>

                        <div className='body__child_jamin'>
                            <div className='paragraph_body__child_jamin'>
                                <div className='paragraph_body__child_jamin'>

                                    {/* <h1>{props.title || <Skeleton />}</h1>
                                {props.body || <Skeleton count={10} />} */}
                                    <div key={firstProduct._id || <Skeleton />}>
                                        <div className='header_body__child_jamin'>
                                            <h1>अब जामिन रसीद बनेगी आसान, आपके अपने ऑनलाइन सेवा केंद्र पर</h1>
                                        </div>
                                        <p>{products.text}</p>
                                        {/* <div className='swiper-grandparent'>
                                            <div className='swiper-child-parent'>
                                                <Swiper
                                                    pagination={{ type: 'progressbar' }}
                                                    navigation={true}
                                                    modules={[Pagination, Navigation]}
                                                    className="mySwiper"
                                                >
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                    <SwiperSlide><img src={Image}></img></SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div> */}
                                        {/* <Swiper
                                            // install Swiper modules
                                            modules={[Navigation, Pagination, A11y]}
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{ clickable: true }}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            onSlideChange={() => console.log('slide change')}
                                        >
                                            {products.images?.map((mylist2) => (
                                                <SwiperSlide>
                                                    <img style={imgwidth} src={mylist2} />
                                                </SwiperSlide>
                                            ))};
                                        </Swiper> */}
                                        {products.images?.map((mylist2) => (
                                                
                                                    <img style={imgwidth} src={mylist2} />
                                              
                                            ))};

                                        {products.points?.map((mylist2) => (
                                            <ul><li>{mylist2}</li></ul>
                                        ))};
                                        {/* <p>{firstProduct.text ? firstProduct.text : <Skeleton count={10} />}</p><br></br>
                                        <p>{firstProduct.text ? firstProduct.text : <Skeleton count={10} />}</p> */}
                                       
                                        <p><a href={link}>recipt-link</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className='call_loginbutton'>
                                <button type='submit'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                ) : <> <p>server-error :: "under-development"</p> <div><l-metronome
                    size="47"
                    speed="1"
                    color="black"
                ></l-metronome></div></>} </main>
        </>
    );
};

export default Table;
