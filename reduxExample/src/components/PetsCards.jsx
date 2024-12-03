import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPets } from "../reducers/PetsReducer";
import { petsApiCall } from "../actions/PetsAction";

const PetsCards = () => {
  const { pets } = useSelector((state) => state.Pets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(petsApiCall());
  }, []);

  return (
    <div className="w-full h-[100vh]  translate-x-[7%]">
      <h1 className="text-4xl font-bold text-center mt-5">
        Pets You Would Like To Pet!!!
      </h1>
      <div className="cards w-full h-[100vh] bg-slate-500 mt-8 flex flex-wrap gap-3">
        {pets.map((pet) => {
          console.log(pet);

          return (
            <div className="card w-[220px] h-[350px] bg-red-400 rounded-sm overflow-hidden text-center">
              <img
                src={pet.image}
                alt=""
                className="w-full h-[60%] object-cover"
              />
              <br />
              <h2 className="text-xl font-bold">{pet.name}:</h2>
              <h2 className="text-xl font-bold">{pet.family}</h2>
              <p>{pet.description.slice(1, 50)} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetsCards;
