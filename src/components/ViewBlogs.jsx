import React from 'react'
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import icon from "../assets/icon.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import boxing from '../assets/boxing.jpg'
const ViewBlogs = ({displayData}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
 
      <button onClick={handleShow} className="  bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 ms-auto border-b-4 border-yellow-700 hover:border-yellow-800 rounded">
           View More
            </button>

      <Modal size='xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1 style={{ fontSize: '70px', fontWeight: '600' }} className='mt-5'><span className='text-yellow-400'>The</span> Blog</h1>
           </Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="container mt-5">
          <h1 className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat enim exercitationem, amet voluptates eaque quos pariatur earum autem quae temporibus expedita .</h1>
          <div className="row mt-5 pb-5">
            <div className="col-lg-3 d-flex justify-start align-items-center mb-3">
              <img src={icon} alt="" />
              <h2 className='px-2 fs-3 '>Jishan</h2>

              <div className='d-flex px-5 justify-start align-items-center'>
                <i class="fa-solid fs-4 fa-calendar-days"></i> 
                <h2 className='px-1  fs-4'>  29/27/2025</h2>
                
              </div>
             
            </div>
            <div className="col-lg-3"> </div>

            <div className="col-lg-3"></div>
            <div className="col-lg-3 ms-auto">
           
              
            </div>
            <hr />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5">
            <img width={'700px'} src={boxing} alt="" />
          </div>
          <h2 className='mt-5 fs-2 fw-bolder'>Description</h2> <hr />
          <p className='mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga consectetur quia deserunt necessitatibus quibusdam dignissimos ratione sit distinctio libero? At quibusdam pariatur sint commodi repellat deserunt natus aspernatur nostrum?
          Quos et voluptatibus rerum quia aliquam neque veniam placeat! Explicabo quae consectetur atque magni ut tempore nam! Architecto hic rem, voluptatem ad officia nesciunt corrupti labore adipisci dolorem laborum ipsa!
          Tenetur expedita dolorum cum tempore cupiditate eaque repudiandae delectus ratione quo adipisci consectetur temporibus, blanditiis odit, exercitationem aperiam neque, saepe esse hic a! Similique error inventore, tempora illum eaque itaque?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae expedita tenetur dolore, sed dolores obcaecati officia quos, corporis facere, quibusdam velit ex laboriosam voluptate cum mollitia deleniti eum nihil adipisci.
          Mollitia soluta, fugit tempore non excepturi a beatae ipsa dolorem aliquid iusto sapiente eius quod consectetur odit iste quos nemo voluptatem asperiores itaque rem animi ipsum. Hic dolor labore eaque.
          Corporis totam nihil minus labore iure veniam quaerat? Ea sint minima consectetur nostrum. Nemo nulla illo reiciendis enim provident, quia, distinctio voluptatibus nisi magnam tempore vel laboriosam, vitae minus corrupti.
          Dolor nulla officia at voluptates. Delectus quo, molestiae dignissimos possimus corrupti quam maiores ipsam voluptatibus nam nisi minus, dolorum asperiores repellendus animi alias at natus aut illum vitae beatae dicta?
          Assumenda adipisci nulla vero non nostrum nesciunt pariatur magnam tempora cumque. Ratione, doloribus beatae cumque nam assumenda dignissimos, iusto impedit, facilis consectetur eos veniam voluptatum veritatis sapiente. Reprehenderit, nobis in!
          Illum architecto, fugit laboriosam facilis ullam pariatur sit porro nostrum doloremque. Soluta doloribus ducimus laborum culpa, repellendus voluptatibus, similique tempore aliquid unde veniam earum, error molestias aliquam facere. Sed, cupiditate.
          Modi vero deleniti, corrupti exercitationem ullam quod corporis tempore aliquam minus, officia, molestias ad architecto nesciunt at maxime! Quisquam nihil commodi earum nemo non blanditiis quibusdam molestiae facere ut officia.
          Ducimus sed beatae optio quisquam minima. Laboriosam aut recusandae, tenetur impedit dolore itaque esse quis minus amet perspiciatis commodi id. Nulla dolor laborum et amet ad fugit dolorem sint inventore.
          Accusamus consectetur modi perferendis necessitatibus aliquid! Ratione, suscipit? Corrupti, reiciendis amet. Beatae quas officiis nisi molestias? Neque, optio! In cum quod aliquid ratione eveniet temporibus quidem necessitatibus quia earum ut.
          Nihil aliquam possimus laudantium. Quidem commodi id dolore repellat consectetur reiciendis modi itaque eius cum. Quo minus non quia iusto sit consequuntur a ipsam, architecto mollitia nisi blanditiis, praesentium assumenda.</p>
        </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    
        </>
  )
}

export default ViewBlogs