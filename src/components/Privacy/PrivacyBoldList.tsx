type ListItem = {
  title: string;
  description: string;
};

type ListProps = {
  items: ListItem[];
};

export default function List({ items }: ListProps) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <strong  className="text-black dark:text-white">{item.title}</strong>: <p className="whitespace-pre-line text-gray-600">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}