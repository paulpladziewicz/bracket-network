import Image from "next/image"

export default function Section({title, text, image}) {
  return (
    <div className="flex">
      <div className='w-1/2'>
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <p>{text}</p>
      </div>
      <div className='w-1/2'>
        <Image
          src={image}
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
