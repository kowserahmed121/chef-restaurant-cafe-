import { IoPersonCircleOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Recipe Calories</h2>
      <ul className="flex gap-8">
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Recipes</li>
      </ul>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="text-5xl bg-teal-300 rounded-full p-1">
          <IoPersonCircleOutline></IoPersonCircleOutline>
        </div>
      </div>
    </div>
  );
};

export default Header;
