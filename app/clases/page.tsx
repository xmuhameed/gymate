import { Landing } from '@/Components/Landing';
import { ClassesComponents } from '@/Components/classesPage/ClassesComponents';
import React from 'react'

const classes = () => {
  return (
    <>
    <Landing mainHeading="Classes"/>
    <section className="w-sreen mx-8 xl:mx-36 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative mb-32">
        <ClassesComponents />
      </div>
    </section>
  </>
  )
}
export default classes;classes