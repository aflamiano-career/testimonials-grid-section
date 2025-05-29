import Card from "./Card";

const colors = [
  {
    bgColor: "bg-purple500",
    name: "text-white",
    role: "text-purple50",
    title: "text-white",
    review: "text-purple50",
  },
  {
    bgColor: "bg-grey500",
    name: "text-white",
    role: "text-gray-300",
    title: "text-white",
    review: "text-grey100",
  },
  {
    bgColor: "bg-white",
    name: "text-grey500",
    role: "text-grey400",
    title: "text-grey500",
    review: "text-grey400",
  },
  {
    bgColor: "bg-darkblue",
    name: "text-white",
    role: "text-white",
    title: "text-grey200",
    review: "text-grey100",
  },
  {
    bgColor: "bg-white",
    name: "text-grey500",
    role: "text-gray-300",
    title: "text-grey500",
    review: "text-grey400",
  },
];

function CardList({ graduates }) {
  return (
    <section
      className="grid gap-8
      sm:grid-cols-2 sm:*:not-[*:nth-child(2),*:nth-child(3)]:col-span-2
      lg:grid-cols-4 lg:*:nth-5:col-span-1 lg:*:nth-5:row-span-2
      lg:*:nth-3:order-4 lg:*:nth-4:order-5 lg:*:nth-5:order-3
    "
    >
      {graduates.map((graduate, index) => (
        <Card
          graduate={graduate}
          key={graduate.name}
          colors={colors.at(index)}
        />
      ))}
    </section>
  );
}

export default CardList;
// sm:grid-cols-2 sm:*:not-[*:nth-child(2),*:nth-child(3)]:col-span-2
