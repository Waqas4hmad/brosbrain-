import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
}

export default function TestimonialCard({ quote, name, role, avatarSrc }: TestimonialProps) {
  return (
    <div className="flex flex-col max-w-2xl">
      {/* Quote Marks */}
      <div className="relative">
        <span className="absolute -top-10 -left-10 text-8xl text-gray-600 opacity-20">“</span>
        <span className="absolute -bottom-10 -right-10 text-8xl text-gray-600 opacity-20">”</span>
        
        <p className="text-xl md:text-2xl  leading-relaxed mb-8 relative z-10">
          {quote}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-500">
          <Image
            src={avatarSrc}
            alt={name}
            width={80}
            height={80}
            className="object-cover"
            unoptimized
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold ">{name}</h4>
          <p className="">{role}</p>
        </div>
      </div>
    </div>
  );
}