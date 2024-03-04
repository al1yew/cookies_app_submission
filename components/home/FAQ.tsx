"use client";

import { QUESTIONS } from "@/lib/constants";
import Container from "../shared/Container";
import { useState } from "react";
import SingleQuestion from "./SingleQuestion";

const FAQ = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleQuestion = (id: number) => {
    const newActiveId = id === activeId ? 0 : id;
    setActiveId(newActiveId);
  };

  return (
    <section className="w-full relative mt-20 lg:mt-32">
      <Container>
        <div className="bg-[#FBFBFB] rounded-3xl p-3 lg:px-32 lg:py-16 lg:w-11/12 lg:max-w-[1100px] w-full mx-auto">
          <h1 className="text-3xl font-black text-center lg:text-start">
            Frequently Asked Questions
          </h1>
          <div className="w-full flex-col flex gap-5 lg:gap-8 mt-10">
            {QUESTIONS.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                  activeId={activeId}
                  toggleQuestion={toggleQuestion}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default FAQ;
