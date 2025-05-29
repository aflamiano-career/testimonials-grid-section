function Card({ graduate, colors }) {
  return (
    <div className={"p-8 rounded-lg shadow-2xl".concat(" ", colors.bgColor)}>
      <div className="flex gap-4 items-center">
        <img
          src={graduate.image}
          alt={`Photo of ${graduate.name}`}
          className="w-7 rounded-full outline-2 outline-purple-300"
        />
        <div className="font-medium leading-lh110">
          <p className={colors.name}>{graduate.name}</p>
          <p className={"text-pr11".concat(" ", colors.role)}>
            {graduate.role}
          </p>
        </div>
      </div>
      <h1
        className={"py-4 font-semibold text-xl leading-lh120".concat(
          " ",
          colors.title
        )}
      >
        {graduate.title}
      </h1>
      <p className={"font-medium leading-lh140".concat(" ", colors.review)}>
        {graduate.review}
      </p>
    </div>
  );
}

export default Card;
