interface LegalListProps {
  items: string[];
}

export default function LegalList({ items }: LegalListProps) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li className="text-black dark:text-white" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}