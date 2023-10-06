const ImageCard = ({ image }) => {
  return (
    <div className="max-w-[400px] min-h-[min-content] mb-4 relative">
      <img
        src={image.webformatURL}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="py-4 px-4 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-end">
        <h3 className="bg-gray-200 text-black">
          <strong>Likes:</strong> {image.likes}
        </h3>
      </div>
    </div>
  );
};

export default ImageCard;
