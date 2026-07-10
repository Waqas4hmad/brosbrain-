export default function DirectContactsPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold  mb-6">
          Direct Contacts
        </h1>

        {/* Subtitle */}
        <p className="text-xl  mb-16 max-w-4xl mx-auto">
          Our team is available Monday–Friday during US business hours. For project enquiries, we typically respond within one business day.
        </p>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Email Card */}
          <div className=" rounded-none border-4 border-teal-400 p-10">
            {/* Icon Circle */}
           
 <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-blue-800 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            {/* Contact Links */}
            <div className="space-y-3 text-xl">
              <p className="font-semibold ">
                SALES <span className=" font-normal">: </span>
                <a href="mailto:sales@brosbrain.co.uk" className="hover:text-teal-500 transition-colors">
                  sales@brosbrain.co.uk
                </a>
              </p>
              <p className="font-semibold ">
                GENERAL <span className=" font-normal">: </span>
                <a href="mailto:info@brosbrain.co.uk" className="hover:text-teal-500 transition-colors">
                  info@brosbrain.co.uk
                </a>
              </p>
              <p className="font-semibold ">
                HR <span className=" font-normal">: </span>
                <a href="mailto:hr@brosbrain.co.uk" className=" hover:text-teal-500 transition-colors">
                  hr@brosbrain.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className=" rounded-t-none border-4 border-teal-400 p-10 border-gray-400 border-opacity-20">
            {/* Icon Circle */}
            <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-blue-800 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>

            {/* Phone Number */}
            <p className="text-xl font-semibold ">
              United Kingdom <span className=" font-normal">: </span>
              <a href="tel:+447455366977" className=" hover:text-teal-500 transition-colors">
                (+44) (745) 536-6977
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}