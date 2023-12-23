import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row pb-6'>
      <div className='w-full md:w-1/2 text-zinc-400 p-6 borderRight flex items-center'>
        <div className='py-6'>
          <h2 className="font-semibold mb-1">Hello! I'm David,</h2>
          <p className="text-base leading-6 ">
            a final-year software engineering student with a strong focus on backend development complemented by a proficient understanding of frontend technologies. I excel in crafting seamless digital solutions and thrive on tackling intricate challenges through clean, efficient code. I'm eager to leverage my skills towards impactful projects and collaborate with passionate teams.
          </p>
        </div>
      </div>
      <div className='w-full md:w-1/2 p-6'>
        <ul className='flex flex-col gap-1'>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan' >Age</span>25
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan' >Residence</span>Europa
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan' >Job</span>Avaliable
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan' >Address</span> Serbia, Nis
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe