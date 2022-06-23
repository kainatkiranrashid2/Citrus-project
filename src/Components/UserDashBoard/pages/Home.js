import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../../../images/NavBar/Grupo 164357.svg'
import img2 from '../../../images/NavBar/ic-add.svg'
import img3 from '../../../images/NavBar/ic-trash-outline.svg'
import img4 from '../../../images/NavBar/ic-search.svg'
import img5 from '../../../images/NavBar/ic-right-arrow.svg'
import { Card, Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState([])
  const [iconState, setIconState] = useState(false)
  const [val, setVal] = useState(false)
  var ind
  // let x = new Array(6)
  const [x, setX] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ])

  const handleClick = () => {
    navigate('/Actual')
  }
  const handleMoreInfo = () => {
    navigate('/Actual')
  }

  const handleListButton = () => {
    navigate('/adduser')
  }
  const removeValue = () => {
    openModal()
    // console.log(value)
    // const sampleUser = x.filter((user) => user.id !== value[0])
    // setX(sampleUser)
    // console.log(x)
  }
  const handleOk = () => {
    if (value.length === 1) {
      const sampleUser = x.filter((user) => user.id !== value[0])
      setX(sampleUser)
      console.log(x)
      closeModal()



    }
    else {
      const filterArray = (arr1, arr2) => {
        const filtered = arr1.filter(el => {
           return arr2.indexOf(el.id) === -1;
        });
        return filtered;
     };
      console.log(filterArray(x, value))
      setX(filterArray(x, value))
      closeModal()
    }
  }
   const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  function handleMoreDetails() {
    navigate('/moreInfo')
  }
  const handleChange = (e, index) => {
    let isChecked = e.target.checked
    console.log(index)
    if (isChecked) {
      setValue((value) => [...value, index])
      console.log(value)
    }
  }
  const handleDetailButton = () => {
    navigate('/')
  }

  return (
    <div className='home'>
      <div className='home_main_div'>
        <div className='home_user'>
          <p className='home_user_text'>
            USUARIOS <span>TOTAL 89</span>
          </p>
        </div>
        <div className='home_main_buttons'>
          <div className='home_top_buttons'>
            <div className='home_svgs'>
              <button className='home_list_button'>
                <i
                  class='fa-regular fa-rectangle-list'
                  onClick={handleDetailButton}
                ></i>
              </button>
              <button className='home_list_button' onClick={handleListButton}>
                <i class='fa-solid fa-bars'></i>
              </button>
            </div>
            <div>
              <button className='home_button_add' onClick={handleClick}>
                AGREGAR USUARIO <i class='fa-solid fa-plus homeAddButton'></i>
              </button>
              <button className='home_button_delete' onClick={removeValue}>
                ELIMINAR USUARIO(S)
                <i class='fa-solid fa-trash-can homeAddButton'></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='search_box_main'>
        <input
          type='text'
          name=''
          placeholder='Escribe el nombre a buscar ...'
          className='input_text'
          id=''
        />
        <button className='home_search_button'>
          <Image src={img4} />
        </button>
      </div>
      <div className='card_main_div'>
        {x.map((item, index) => (
          <>
            <Card
              key={item.id}
              className='home_card'
              style={{ width: '272px', height: '360px' }}
            >
              <div className='home_cb_line'>
                <input
                  type='checkbox'
                  name=''
                  id=''
                  className='home_cb'
                  onChange={(e) => handleChange(e, item.id)}
                />
                <div className='home_cb_p'>
                  <p>ACTIVO &nbsp; &nbsp; </p>
                  <i class='fa-solid fa-circle home_cb_circle '></i>
                </div>
              </div>
              <Image
                variant='top'
                className='home_card_img'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU'
              />
              <Card.Body>
                <div className='home_card_title_main'>
                  <button className='home_card_title' onClick={handleMoreInfo}>
                    ACTUALIZAR DATOS
                  </button>
                  <i class='fa-solid fa-angle-right home_card_title_icon'></i>
                </div>
                <div className='home_card_details'>
                  <div className='home_card_values'>
                    <span className='home_card_span_value'>Nombre</span>
                    <p className='home_card_p_value'>Luis Enrique</p>
                  </div>
                  <div className='home_card_values'>
                    <span className='home_card_span_value'>Apellido</span>
                    <p className='home_card_p_value'>Apellido</p>
                  </div>
                  <div className='home_card_values'>
                    <span className='home_card_span_value'>Correo</span>
                    <p className='home_card_p_value'>lcornejo@ibl.mx</p>
                  </div>
                  <div className='home_card_values'>
                    <span className='home_card_span_value'>Teléfono</span>
                    <p className='home_card_p_value'>4423222111</p>
                  </div>
                  <div className='home_card_values'>
                    <span className='home_card_span_value'>
                      Tipo de Usuario
                    </span>
                    <p className='home_card_p_value'>Root</p>
                  </div>
                  <div className='home_card_values'>
                    <span className='home_card_span_value'>
                      Fecha de Expiración
                    </span>
                    <p className='home_card_p_value'>20/02/2022</p>
                  </div>
                  <div className='home_card_values'>
                    <span className='home_card_span_value'>Equipo</span>
                    <p className='home_card_p_value'>-</p>
                  </div>
                </div>
                <button className='card_bottom_p' onClick={handleMoreDetails}>
                  RESTABLECER CONTRASEÑA
                </button>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
      <Modal show={open} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {value.length > 1 ? (
            value.map((val) => <p>Luis Enrique</p>)
          ) : (
            <p>Luis Enrique</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleOk}>
            Ok
          </Button>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Home
