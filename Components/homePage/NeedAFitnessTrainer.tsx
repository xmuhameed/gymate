import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/Button'

export const NeedAFitnessTrainer = () => {
  return (
    <section className="needAFitTrainBg py-20" >
      <div className="mx-10 xl:mx-36">
        <h2 className="font-bold text-4xl text-white">Need a Fitness Trainer?</h2>
        <h3 className="font-bold text-3xl text-white mt-5 mb-7"><span className="text-[var(--mainRed)]">Call: </span>+123-456789</h3>
        <Link href="/content" className="" >
          <Button content="PURCHASE NOW" variant="red" arrow='on' />
        </Link>
      </div>
    </section>
  )
}
