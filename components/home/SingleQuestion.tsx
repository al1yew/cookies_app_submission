import Image from "next/image";

type Props = {
  id: number;
  question: string;
  answer: string;
  activeId: number;
  toggleQuestion: (id: number) => void;
};

const SingleQuestion = ({
  id,
  question,
  answer,
  activeId,
  toggleQuestion,
}: Props) => {
  const isActive = id === activeId;

  return (
    <div
      className="bg-white p-4 lg:p-7 relative w-full rounded-xl cursor-pointer"
      onClick={() => toggleQuestion(id)}
    >
      <h3 className="font-black text-2xl max-w-[80%] lg:max-w-full">
        {question}
      </h3>
      <div
        className={`max-w-[80%] duration-200 overflow-hidden transition-height ${
          isActive ? "h-auto mt-6" : "h-0"
        }`}
      >
        {answer}
      </div>
      <span className="absolute top-3 lg:top-1/2 lg:-translate-y-1/2 lg:right-5 right-3 cursor-pointer">
        <Image
          src={isActive ? "/images/minus.svg" : "/images/plus.svg"}
          height={27}
          width={27}
          alt="close question"
          onClick={() => toggleQuestion(id)}
        />
      </span>
    </div>
  );
};
export default SingleQuestion;
