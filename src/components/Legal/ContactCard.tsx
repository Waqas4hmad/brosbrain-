export default function ContactCard() {
  return (
    <div className="rounded-xl border  p-6">
      <h3 className="text-xl font-semibold text-black dark:text-white">
        BrosBrain Ltd
      </h3>

      <div className="mt-4 space-y-2">
        <p className="text-black dark:text-white">
          <strong>Email:</strong> support@brosbrain.com
        </p>

        <p className="text-black dark:text-white">
          <strong>Website:</strong> https://brosbrain.com
        </p>

        <p className="text-black dark:text-white">
          <strong>Address:</strong> 618 Washwood Heath Road, Birmingham, B82 HG, United Kingdom
        </p>
      </div>
    </div>
  );
}