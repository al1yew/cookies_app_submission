type Props = {
  question: string;
  answer: string;
};

const SingleQuestion = ({ question, answer }: Props) => {
  return (
    <div className="bg-white p-4 lg:p-7 relative w-full rounded-xl">
      <h3 className="font-black text-2xl">{question}</h3>
      <div>{answer}</div>
    </div>
  );
};
export default SingleQuestion;
