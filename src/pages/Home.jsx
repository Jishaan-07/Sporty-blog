import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import landingImg from '../assets/landing.png';
import card from '../assets/card.png';
import icon from '../assets/icon.png';
import group from '../assets/group.png';
import staduim from '../assets/staduim.png';
import boxing from '../assets/boxing.jpg';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car4 from '../assets/car4.jpg';

import sponser from '../assets/sponser.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BlogCard from '../components/BlogCard';
  


import Carousel from 'react-bootstrap/Carousel';
import ViewBlogs from '../components/ViewBlogs';
 


const Home = () => {

  const [isLogin,setIsLogin]=useState(false)



  return (
    <>
      <Header />
      <div className="relative   h-screen flex items-center justify-center">

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-wide leading-tight" style={{ color: '#FFD700', textShadow: '3px 3px 15px rgba(0,0,0,0.8)', fontFamily: `'Bebas Neue', sans-serif`, }} >
            Unveil Your Thoughts on    <br />   <span className="text-blue-400 drop-shadow-lg text-6xl sm:text-7xl md:text-9xl">     Sports </span> </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-200 mt-4 max-w-2xl italic">
            Share game-changing insights, discuss tactics, and connect with passionate fans worldwide!
          </p>

        { isLogin ? 
         <Link
            to="/add-post"
            className="btn btn-warning shadow-lg text-black text-sm sm:text-lg md:text-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full mt-6 transition-all transform hover:scale-105 hover:bg-yellow-500"  > Start Your Sports Blog
          </Link>
          :
          <Link
          to="/register"
          className="btn btn-warning shadow-lg text-black text-sm sm:text-lg md:text-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full mt-6 transition-all transform hover:scale-105 hover:bg-yellow-500"  > Start Your Sports Blog
        </Link>
          }

        </div>

        <img className="rounded  h-full object-cover" src={landingImg} alt="Sports Landing" />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <img src={sponser} alt="" />
      </div>
      <div style={{ minHeight: "500px", width: "100%", background: "linear-gradient(to bottom left, #FFF9C4, #FACC15)", }} className="d-flex align-items-center justify-content-center mt-5" >
        <div className="row w-100 m-0 p-0 h-100">
          <div className="col-lg-6 d-flex justify-content-center align-items-center text-center">
            <h1 style={{ fontSize: "100px" }} className="font-extrabold">
              BEST <br />
              <span className="text-white text-shadow">BLOG</span> <br />
              TODAY
            </h1>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-items-center flex-wrap">

            <Card className="shadow mx-2 mb-3" style={{ width: "15rem", borderRadius: "20px" }}>
              <Card.Img variant="top" src={card} alt="Blog Image" />
              <Card.Body>
                <Card.Title>BVB to Bankrupt</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum.
                </Card.Text>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={icon}
                    alt="Author"
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  />
                  <small className="text-muted">Jishan</small>
                </div>
                <ViewBlogs/>
                  </Card.Body>
            </Card>

            <Card className="shadow mx-2 mb-3" style={{ width: "15rem", borderRadius: "20px" }}>
              <Card.Img variant="top" src={card} alt="Blog Image" />
              <Card.Body>
                <Card.Title>BVB to Bankrupt</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum.
                </Card.Text>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={icon}
                    alt="Author"
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  />
                  <small className="text-muted">Jishan</small>
                </div>
                <ViewBlogs/>                            </Card.Body>
            </Card>

            <Card className="shadow mx-2 mb-3" style={{ width: "15rem", borderRadius: "20px" }}>
              <Card.Img variant="top" src={card} alt="Blog Image" />
              <Card.Body>
                <Card.Title>BVB to Bankrupt</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum.
                </Card.Text>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={icon}
                    alt="Author"
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  />
                  <small className="text-muted">Jishan</small>
                                    

                </div>
                <ViewBlogs/>              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <img src={group} alt="" />
      </div>
      <div>
        <div className="mt-5 container fw-bolder   d-flex justify-between align-items-center">
          <h1 style={{ fontSize: '70px' }} className='mt-5'><span className='text-yellow-400'>B</span>logs</h1>
          <Link to={'/all-post'}><p className='mt-5'>view All  <i class="fa-solid fa-hand-point-right"></i> </p></Link> 
        </div>
        <div className="container d-flex justify-content-evenly align-items-center flex-wrap mt-5">
              <BlogCard/>
               

        </div>
      </div>
      <div className="container mt-5">
      <Carousel className="rounded shadow-lg overflow-hidden">
        
        {/* Slide 1 - Football */}
        <Carousel.Item interval={2000}>
          <div className="carousel-overlay">
            <img
              src={car1}
              className="d-block w-100"
              style={{ objectFit: "cover", height: "500px" }}
              alt="Football Match"
            />
            <div className="carousel-caption-custom">
              <h2 className="fw-bold text-white">⚽ The Beautiful Game</h2>
              <p className="text-light">
                Experience the passion, intensity, and drama of football like never before.
              </p>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 - Basketball */}
        <Carousel.Item interval={2000}>
          <div className="carousel-overlay">
            <img
              src={car2}
              className="d-block w-100"
              style={{ objectFit: "cover", height: "500px" }}
              alt="Basketball Game"
            />
            <div className="carousel-caption-custom">
              <h2 className="fw-bold text-white">🏀 Rise Above</h2>
              <p className="text-light">
                From buzzer-beaters to slam dunks, witness the magic of basketball unfold.
              </p>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 - Racing */}
        <Carousel.Item interval={2000}>
          <div className="carousel-overlay">
            <img
              src={car4}
              className="d-block w-100"
              style={{ objectFit: "cover", height: "500px" }}
              alt="Race Track"
            />
            <div className="carousel-caption-custom">
              <h2 className="fw-bold text-white">🏎️ Speed & Glory</h2>
              <p className="text-light">
                Feel the adrenaline as racers push their limits on the world's fastest tracks.
              </p>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
 <div className='mt-5 d-flex justify-center align-items-center '>  
 <iframe width="954" height="468" className='rounded' src="https://www.youtube.com/embed/7BCrKlJ0SrI" title="How to Monetize a Sports Blog With Adsterra: Tips on Monetizing Sports Traffic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 </div>




    </>
  );
};

export default Home;
