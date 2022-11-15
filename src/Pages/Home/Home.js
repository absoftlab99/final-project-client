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
        </div>
    );
};

export default Home;