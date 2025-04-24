const NotFound = ({ text }) => {
  return (
    <div className="w-full h-[80vh] bg-white flex justify-center pt-20">
      <p className="text-red-500 text-2xl">{text}</p>
    </div>
  );
};

export default NotFound;
