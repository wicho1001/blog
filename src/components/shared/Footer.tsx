import React from 'react'

const Footer = () => {
  return (
    <section className="flex justify-between bg-surface-400 px-11 py-9 mt-10 h-70">
      <div>
        <p className="text-4xl font-exo text-surface-800">Horario</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-4xl font-exo text-surface-800">Contactanos</p>
        <div className="flex justify-between items-center mt-6 w-full">
          <i className="icon-facebook text-xl text-surface-700"></i>
          <i className="icon-instagram text-xl text-surface-700"></i>
          <i className="icon-mail text-xl text-surface-700"></i>
          <i className="icon-whatsapp text-xl text-surface-700"></i>
        </div>
      </div>
    </section>
  )
}

export default Footer;