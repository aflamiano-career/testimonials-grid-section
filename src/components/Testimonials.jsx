import CardList from "./CardList";

function Main({ graduates }) {
  return (
    <div className="px-[2.188rem] py-16 sm:px-16 md:w-6xl">
      <CardList graduates={graduates} />
    </div>
  );
}

export default Main;
