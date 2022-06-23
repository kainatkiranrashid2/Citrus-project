import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';

const Actual = () => {
  let navigate = useNavigate();

  const length = 10
  let x = new Array(5)
  let y = new Array(5)
  const [checkedStateX, setCheckedStateX] = useState(
     x = new Array(x.length).fill(false)
  )
  const [checkedStateY, setCheckedStateY] = useState(
    y = new Array(x.length).fill(false)
  )
  const handleClearButton = () => {
    
    Form.clear()
  }
  const handleSubmit = () => {
    navigate('/')
  }

  const handleChangeX = (position) => {
    const updatedCheckedStateX = checkedStateX.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedStateX(updatedCheckedStateX)
    console.log(position + '  ' + !checkedStateX[position])
  }
  const handleChangeY = (position) => {
    const updatedCheckedStateY = checkedStateY.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedStateY(updatedCheckedStateY)
    console.log(position + '  ' + !checkedStateY[position])
  }
  const handleBackButton = () => {
    navigate('/')
  }
  return (
    <>
      <h1 className='Actual_h1' >
       <button className='actual_backbutton' onClick={handleBackButton}><i class='fa-solid fa-arrow-left-long'></i> </button>AGREGAR USUARIO
      </h1>
      <Form>
      <div className='user-info'>
        <div className='user-info__top'>
          <div className='user-info--img-container'>
            <img src='' alt='user image' />
            <div class='avatar-edit'>
              <input type='file' id='imageUpload' accept='.png, .jpg, .jpeg' />
              <label for='imageUpload'></label>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='user-info__detail'>
          <div className='input-group'>
            <label className='input-group__label'>NOMBRE COMPLETO</label>
            <input
              className='input-group__text user-info__name'
              placeholder='Luis Enrique Cornejo Arreola'
            ></input>
          </div>
          <div className='user-info__contact'>
            <div className='input-group single-group'>
              <label className='input-group__label'>CORREO</label>
              <input
                className='input-group__text user-info__field'
                placeholder='lcornejo@ibl.mx'
                type='email'
              ></input>
            </div>
            <div className='input-group single-group'>
              <label className='input-group__label'>SELECCIONAR ROL</label>
              <input
                className='input-group__text user-info__field'
                placeholder='Root'
              ></input>
            </div>
          </div>
          <div className='user-info__contact'>
            <div className='input-group single-group'>
              <label className='input-group__label'>TELÉFONO</label>
              <input
                className='input-group__text user-info__field'
                placeholder='+52 442 - 245 -3434'
              ></input>
            </div>
            <div className='input-group single-group'>
              <label className='input-group__label'>FECHA DE EXPIRACIÓN</label>
              <input
                type='date'
                className='input-group__text user-info__field user-date-picker'
                placeholder='28-05-2023'
              ></input>
            </div>
          </div>
          <div className='agreement-div'>
            <label className='agreement-div-lab'>ESTADO</label>
            <label class='checkBox-container ms-4'>
            Activa
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
            <label class='checkBox-container ms-4'>
              InActive
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
          </div>
        </div>
        <h3 className='actual_h3'>ASIGNAR CASOS</h3>
        <div style={{display: 'flex'}}> 
        <ul>
          {x.map((currElement, index) => (
            <li key={index} >
              <label  className='actual_li'>Asesinato Colosio</label>
              <input className='actual_cb'
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name='Kainat'
                    value='Asesinato Colosio'
                    checked={checkedStateX[index]}
                    onChange={() => handleChangeX(index)}
                  />
            </li>
          ))}
        </ul>
        <ul>
          {y.map((currElement, index) => (
            <li key={index} >
              <label  className='actual_li'>Asesinato Colosio</label>
              <input className='actual_cb'
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name='Kainat'
                    value='Asesinato Colosio'
                    checked={checkedStateY[index]}
                    onChange={() => handleChangeY(index)}
                  />
            </li>
          ))}
          </ul>
        </div>
        <hr></hr>
        <div className='bottom_buttons'>
          <button className='actual_b_button_one' onClick={handleClearButton}> LIMPIAR CAMPOS</button>
          <button className='actual_b_button_two' onClick={handleSubmit} >AGREGAR</button>
        </div>
        </div>
        </Form>
    </>
  )
}

export default Actual


// // <div className='home_top_buttons'>
// <Image src={img1} className='home_svgs' />
{/* <button
  className='home_button_add'
  onClick={() => addFormFieldsForValue()}
>
  AGREGAR USUARIO <i class='fa-solid fa-plus homeAddButton'></i>
</button>
<button className='home_button_delete' onClick={() => removeFormFieldsForValues(deleteValue)}>
  ELIMINAR USUARIO(S)
  <i class='fa-solid fa-trash-can homeAddButton'></i>
</button> */}
// </div>