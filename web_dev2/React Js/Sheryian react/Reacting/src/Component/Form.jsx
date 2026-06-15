import React from "react";
import { useForm } from "react-hook-form";


function Form({ addUser }) {
  const { register, handleSubmit, reset } = useForm()
  
  const handleFormSubmit = (data) => {
    addUser(data)
    reset()
  }


  return (
    <div className="flex mt-10 justify-center">
      <form
        action=""
        className="flex justify-center items-center gap-10 "
        onSubmit={handleFormSubmit}
      >
        <input
          type="name"
          className="outline-none bg-white rounded px-3 py-2 text-base font-semibold"
          placeholder="name"
          {...register("name")}
        />
        <input
          type="email"
          className="outline-none bg-white rounded px-3 py-2 text-base font-semibold"
          placeholder="email"
          {...register("email")}
        />
        <input
          type="text"
          className="outline-none bg-white rounded px-3 py-2 text-base font-semibold"
          placeholder="image url"
          {...register("image")}
        />
        <input
          type="submit"
          className="px-4 py-2 font-semibold text-sm rounded-md bg-sky-600 text-white hover:bg-sky-700 "
        />
      </form>
    </div>
  );
}


export default Form; 