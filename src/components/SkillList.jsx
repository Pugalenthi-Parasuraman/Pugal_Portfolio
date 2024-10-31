import React from 'react'

function SkillList({src, skill }) {
  return (
    <span className='flex align items-center gap-[5px]'>
      <img src={src} alt="Checkmark icon" className='w-[20px] h-[20px]' />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList