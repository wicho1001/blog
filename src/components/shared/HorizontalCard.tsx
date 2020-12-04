import React from 'react'

const HorizontalCard = ({ props: {
    author,
    title,
    featured_image,
    slug,
    fecha,
  }}) => {
  return (
    <section className="flex h-100 py-6 px-4 shadow-md col-span-1 rounded-2 hover:bg-surface-100 bg-white cursor-pointer   transform transition duration-150 ease-in-out hover:scale-105 hover:-translate-y-1">
        <img className="w-full object-cover rounded" src={featured_image} alt=""/>
        <div className="transform h-full w-px ml-2 border border-surface-300"></div>
        <section className="flex flex-col h-full overflow-y-auto mt-3 ml-4 ">
          <p className="font-exo text-xl font-bold text-surface-800">{title}</p>
          <div className="flex flex-col px-3 mt-4 flex-grow">
            <p className="font-rubik text-surface-700 flex-grow">
              Lorem Nidhf allahu Akbar, fojoasi wicho tiene caojksl acnal cara lkjfpa de a guapo ajsdlnf,cnal porque es alkfj el mejor najcc codificador aslkjfiue que he alcjshf conocido, triste man alkcjs se la hcopas rifa pjhaas Jhdoais Lfhaos Ocbhja OAjsf qoiwrropa oqjslas laks cj
            </p>
            <div className="flex items-center mt-4 mb-4">
              <img className="h-12 w-12 rounded-full shadow-md mr-3" src={author.profile_image} alt=""/>
              <p className="font-rubik text-secondary-500 text-sm "><span className="text-surface-300">by</span> Wicho Guerrero</p>
            </div>
          </div>
        </section>
    </section>
  )
}

export default HorizontalCard
