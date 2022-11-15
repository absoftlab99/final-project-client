import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../assets/images/chair.png';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import doctor from '../../assets/images/doctor.png';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import quote from '../../assets/icons/quote.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Button, Form } from 'react-bootstrap';


const Home = () => {
    return (
        <div className=''>
            {/* header banner section */}
            <section className='container'>
            <div className="banner d-flex align-items-center">
                <div className="row text-start">
                    <div className="col-6 my-auto">
                        <h1 className='display-5 fw-bold'>Your New Smile Starts Here</h1>
                        <p className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <Link to='/'><button className='btn bg-grad text-white'>GET STARTED</button></Link>
                    </div>
                    <div className="col-6">
                        <img className='img-fluid' src={cover} alt="" />
                    </div>
                </div>
            </div>
            </section>
            {/* header card section  */}
            <section className='container'>
                <div className="row mt-3">
                    <div className="col m-2 bg-grad d-flex px-4 py-5 rounded-4 align-items-center">
                        <div className="icon">
                            <img src={clock} alt="" />
                        </div>
                        <div className="text-start ps-3 text-light">
                            <h5 className='fw-bolder ff-open'>Visit Our Location</h5>
                            <p className='ff-open mb-0'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="col m-2 bg-original d-flex px-4 py-5 rounded-4 align-items-center">
                        <div className="icon">
                            <img src={marker} alt="" />
                        </div>
                        <div className="text-start ps-3 text-light">
                            <h5 className='fw-bolder ff-open'>Contact Us Now</h5>
                            <p className='ff-open mb-0'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="col m-2 bg-grad d-flex px-4 py-5 rounded-4 align-items-center">
                        <div className="icon">
                            <img src={phone} alt="" />
                        </div>
                        <div className="text-start ps-3 text-light">
                            <h5 className='fw-bolder ff-open'>Opening Hours</h5>
                            <p className='ff-open mb-0'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* our services section */}
            <section className='container mt-5 pt-3'>
                <h5 className='text-brand fw-bold'>OUR SERVICES</h5>
                <h2 className='text-semi fw-bold'>Services We Provide</h2>
                <div className="row mt-5">
                    <div className="col m-2 rounded-4 shadow py-5 px-3">
                        <img height={80} className='' src={fluoride} alt="" />
                        <h5 className='text-semi mt-3'>Fluoride Treatment</h5>
                        <small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small>
                    </div>
                    <div className="col m-2 rounded-4 shadow py-5 px-3">
                        <img height={80} className='' src={cavity} alt="" />
                        <h5 className='text-semi mt-3'>Cavity Filling</h5>
                        <small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small>
                    </div>
                    <div className="col m-2 rounded-4 shadow py-5 px-3">
                        <img height={80} className='' src={whitening} alt="" />
                        <h5 className='text-semi mt-3'>Teeth Whitening</h5>
                        <small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small>
                    </div>
                </div>
            </section>
            {/* treatment section  */}
            <section className='py-5 px-3 m-5'>
                <div className="row d-flex align-items-center">
                    <div className="col-6">
                        <img className='rounded-4' height={500} width={400} src={treatment} alt="" />
                    </div>
                    <div className="col-6 text-start p-5">
                        <h1 className='text-semi fw-bolder'>Exceptional Dental Care, on Your Terms</h1>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p><br></br>
                        <Link to='/'><button className='btn bg-grad text-white'>GET STARTED</button></Link>
                    </div>
                </div>
            </section>
            {/* appointment section  */}
            <section className='pt-5'>
                <div className="row appointment">
                    <div className="col-6">
                        <img id='img' height={665} src={doctor} alt="" />
                    </div>
                    <div className="col-6 text-start mt-5">
                        <div className="mt-5 pt-5 pe-5">
                            <h6 className='text-brand'>Appointment</h6>
                            <h3 className='text-light'>Make an appointment Today</h3>
                            <small className='text-light'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</small><br></br>
                            <Link to='/'><button className='btn bg-grad text-white mt-4'>GET STARTED</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mt-5'>
                <div className="text-start row align-items-center justify-content-between">
                    <div className="col-7">
                        <h6 className='text-brand'>Testimonial</h6>
                        <h2 className='text-semi fw-bolder'>What Our Patients Says</h2>
                    </div>
                    <div className="col-5 text-end">
                        <img height={156} width={192} src={quote} alt="" />
                    </div>
                </div>
            </section>
            {/* review swiper  */}
            <section className='container'>
            <Swiper className='p-3 pb-5'
                modules={[Navigation, Scrollbar, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className="shadow py-3 px-4 rounded">
                        <p className='text-semi'>
                        It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content
                        </p>
                        <div className="d-flex text-start">
                            <img className='border border-info rounded-5 border-3' height={50} src={people1} alt="" />
                            <div className="ps-2">
                                <h5 className='text-brand mb-0'>Winson Herry</h5>
                                <p className='m-0'>California</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow py-3 px-4 rounded">
                        <p className='text-semi'>
                        It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content
                        </p>
                        <div className="d-flex text-start">
                            <img className='border border-info rounded-5 border-3' height={50} src={people2} alt="" />
                            <div className="ps-2">
                                <h5 className='text-brand mb-0'>Winson Herry</h5>
                                <p className='m-0'>California</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow py-3 px-4 rounded">
                        <p className='text-semi'>
                        It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content
                        </p>
                        <div className="d-flex text-start">
                            <img className='border border-info rounded-5 border-3' height={50} src={people3} alt="" />
                            <div className="ps-2">
                                <h5 className='text-brand mb-0'>Winson Herry</h5>
                                <p className='m-0'>California</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="shadow py-3 px-4 rounded">
                        <p className='text-semi'>
                        It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content
                        </p>
                        <div className="d-flex text-start">
                            <img className='border border-info rounded-5 border-3' height={50} src={people1} alt="" />
                            <div className="ps-2">
                                <h5 className='text-brand mb-0'>Winson Herry</h5>
                                <p className='m-0'>California</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
            </Swiper>
            </section>
            {/* contact us section  */}
            <section>
                <div className="contact mt-5 p-5">
                    <h6 className='text-brand fw-bolder'>Connect Us</h6>
                    <h3 className='text-light'>Stay connected with us</h3>
                    <div className='w-75 m-auto'>
                    <Form className='w-50 mt-4 m-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control as="textarea" rows={3} type="text" placeholder="Your message" />
                        </Form.Group>
                        <Button className='btn bg-grad border-0' type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;