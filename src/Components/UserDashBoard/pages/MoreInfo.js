import React, {useState} from 'react'
import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MoreInfo = () => {
  const [open, setOpen] = useState(false)
  let navigate = useNavigate()


  const handleClick = () => {
    console.log('kainat')
    console.log(open)

    setOpen(!open)
}
  const handleBackButton = () => {
    navigate('/')
  }

  return (
    <div className='home'>
      <h1 className='Actual_h1'>
        <button className='actual_backbutton' onClick={handleBackButton}>
          <i class='fa-solid fa-arrow-left-long'></i>{' '}
        </button>
        RESTAURAR CONTRASEÑA
      </h1>
      <div style={{ paddingTop: '10%' }}>
        <div className='mI_main_div'>
          <div className='mI_div_one'>
            <Image
              variant='top'
              className='mI_div_img'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU'
            />
            <ul>
              <li>
                <label htmlFor='' className='mI_label'>
                  Nombre
                </label>
                <label htmlFor='' className='mI_label_two'>
                  Luis Enrique Cornejo Arrejo
                </label>
              </li>
              <li>
                <label htmlFor='' className='mI_label'>
                  Rol
                </label>
                <label htmlFor='' className='mI_label_two'>
                  Administrator
                </label>
              </li>
              <li>
                <label htmlFor='' className='mI_label'>
                  Correro
                </label>
                <label htmlFor='' className='mI_label_two'>
                  lcornejo@ibl.mx
                </label>
              </li>
              <li>
                <label htmlFor='' className='mI_label'>
                  Teléfono
                </label>
                <label htmlFor='' className='mI_label_two'>
                  4423222111
                </label>
              </li>
              <li>
                <label htmlFor='' className='mI_label'>
                  Fecha de Expiración
                </label>
                <label htmlFor='' className='mI_label_two'>
                  20/02/2022
                </label>
              </li>
              <li>
                <label htmlFor='' className='mI_label'>
                  Departamento
                </label>
                <label htmlFor='' className='mI_label_two'>
                  Asesinatos
                </label>
              </li>
            </ul>
          </div>
          <div className='mI_vertical_dotted'></div>
          <div className='mI_div_two'>
            <button className='mI_pwd_gen' onClick={handleClick}>GENERAR NUEVA CONTRASEÑA</button>
            <div className='mI_otp' style={{ display: open ? 'none' : 'block' }}>
              <div className='otp_main'>
                <p>KSJAN3843-.ASD"</p>
                <div className='mI_otp_paste'>
                  <i class="fa-solid fa-paste "></i>
                  </div>
                </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default MoreInfo
