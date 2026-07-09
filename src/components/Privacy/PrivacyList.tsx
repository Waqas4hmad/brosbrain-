interface PrivacyListProps {
  items: string[];
}

export default function PrivacyList({ items }: PrivacyListProps) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item) => (
        <li className="text-black dark:text-white" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}