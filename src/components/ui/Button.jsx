const Button = ({
  doubleButton = false,
  type = "button",
  buttonName,
  clickEvent = null,
}) => {
  return (
    <div
      className={` ${!doubleButton && "flex  items-center justify-center"} 
      `}
    >
      <button
        type={type}
        onClick={clickEvent}
        className="bg-primary hover:text-black py-2 px-4 text-white font-bold uppercase text-sm rounded-md"
      >
        {buttonName}
      </button>
    </div>
  );
};
export default Button;
