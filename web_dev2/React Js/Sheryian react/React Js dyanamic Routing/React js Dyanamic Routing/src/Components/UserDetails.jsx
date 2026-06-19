import { useNavigate, useParams } from "react-router";

const UserDetails = () => {
  const navigate =   useNavigate()

  const goBackBtn = () => {
    navigate("/user")
  }
  const {name} = useParams();
  return (
    <div className="w-1/2 mx-auto mt-10  ">
      <h1 className="text-5xl text-zinc-700 font-semibold ">
        Hello 
        <span className="text-3xl text-red-600 px-4 font-mono font-semibold">{(name).toUpperCase()},</span>
      </h1>
        <button onClick={goBackBtn} className="mt-10 mx-2 px-4 py-2 bg-zinc-600 hover:bg-zinc-700 text-white font-semibold">Go back</button>
    </div>
  );
};

export default UserDetails;
