import Image from 'next/image';

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  date: string;
  review: string;
}

export default function TestimonialCard({ imageUrl, name, date, review }: TestimonialCardProps) {
  return (
    <div className="w-full bg-secondary rounded-xl shadow-lg overflow-hidden p-6 flex flex-col gap-4">
      {/* Top: Avatar + Name/Date */}
      <div className="flex items-center">
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="rounded-full border-2 border-gray-300"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm">⭐⭐⭐⭐⭐ · {date}</p>
        </div>
      </div>

      {/* Review Text */}
      <p className="whitespace-pre-line">{review}</p>
    </div>
  );
}
