import React from 'react'

const Card = () => {
  return (
    <section className="flex flex-col py-6 px-4 shadow-md col-span-1 rounded-2 hover:bg-surface-100 cursor-pointer">
      <div className="flex items-center">
        <img className="h-8 w-8 rounded mr-3" src="https://via.placeholder.com/150" alt=""/>
        <p className="font-duru text-surface-800">Php development</p>
      </div>
      <div className="flex flex-col px-6 mt-3">
        <img className="w-full h-60 object-cover rounded-2" src="https://via.placeholder.com/500" alt=""/>
        <section className="flex flex-col mt-3">
          <p className="font-exo text-xl font-bold text-surface-800 text-center">Tips to Hire PHP Developer</p>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              <img className="h-12 w-12 rounded-full shadow-md mr-3" src="https://via.placeholder.com/150" alt=""/>
              <p className="font-rubik text-secondary-500 text-sm"><span className="text-surface-300">by</span> Wicho Guerrero</p>
            </div>
            <p className="font-rubik text-surface-300 text-sm">October 31, 2020</p>
            <p className="font-rubik text-surface-300 text-sm">1009 views</p>
          </div>
          <p className="font-rubik text-surface-700 mt-5">
          Lorem Nidhf allahu Akbar, fojoasi wicho tiene caojksl acnal cara lkjfpa de a guapo ajsdlnf,cnal porque es alkfj el mejor najcc codificador aslkjfiue que he alcjshf conocido, triste man alkcjs se la hcopas rifa pjhaas Jhdoais Lfhaos Ocbhja OAjsf qoiwrropa oqjslas laks cj
aslkjfoaosifhflaisjfla oakllson  kjdpoap asikfuqo kalsowk alskfiaj  
Lorem Nidhf allahu Akbar, fojoasi wicho tiene caojksl acnal cara lkjfpa de a guapo ajsdlnf,cnal porque es alkfj el mejor najcc codificador aslkjfiue que he alcjshf conocido, triste man alkcjs se la hcopas rifa pjhaas Jhdoais Lfhaos Ocbhja OAjsf qoiwrropa oqjslas laks cj
aslkjfoaosifhflaisjfla oakllson  kjdpoap asikfuqo kalsowk alskfiaj 
          </p>
        </section>
      </div>
    </section>
  )
}

export default Card
