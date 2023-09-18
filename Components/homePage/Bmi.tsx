'use client';
import { useState } from 'react';

export const Bmi = () => {
    let [weightResult, setWeightResult] = useState("");
    let [bmiResult, setBmiResult] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (typeof e.currentTarget.weight.value !== "number" || typeof e.currentTarget.height.value !== "number") {
          setBmiResult("Please enter a valid number");
          setBmiResult("");
        }
        const weight = e.currentTarget.weight.value;
        const height = e.currentTarget.height.value;
        const bmi = (weight / (height * 2 / 100)).toFixed(2);
        +bmi < 18.5 ? setWeightResult("Underweight") : +bmi < 25 ? setWeightResult("Normal") : +bmi < 30 ? setWeightResult("Overweight") : setWeightResult("Obese");
        setBmiResult(`${bmi}`);
    }
    return (
    <section className="BmiBg py-20">
      <div className="mx-10 xl:mx-36 w-full md:w-1/2">
        <h2 className="font-bold text-xl md:text-5xl text-white mb-5">
          Let&apos;s Calculate Your{" "}
          <span className="text-[var(--mainRed)]">BMI</span>
        </h2>
        <p className="text-gray-300 md:text-gray-500">
          Easily determine your body mass index with our accurate
          <br /> calculation tool.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3 mt-5">
            <input
              type="text"
              placeholder="Weight/Kg"
              name="weight"
              id="weight"
              className="w-1/3 px-3 py-3 bg-transparent border-2 border-gray-600 border-solid"
            />
            <input
              type="text"
              placeholder="Height/Cm"
              name="height"
              id="height"
              className="w-1/3 px-3 py-3 bg-transparent border-2 border-gray-600 border-solid"
            />
          </div>
          <div className="flex gap-3 mt-7 mb-7">
            <div className="text-white text-lg w-1/3">
              Your BMI is: <span className="text-[var(--mainRed)]">{bmiResult.length > 0 && bmiResult}</span>
            </div>
            <div className="text-white text-lg w-1/3">
              Your weight is: <span className="text-[var(--mainRed)]"></span>
            </div>
          </div>
          <input type="submit" value="CALCULATE" className="font-bold text-white text-lg px-5 py-3 bg-[var(--mainGray)] hover:bg-[var(--mainRed)] duration-200 cursor-pointer" />
        </form>
      </div>
    </section>
  );
};
