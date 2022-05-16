import Image from "next/image";

function AboutHome() {
  return (
    <div>
      <div className="flex flex-row pt-20 pb-5">
        <div className="flex justify-centre items-center pl-20">
          <Image
            src="/home_page_work.jpg"
            alt="A Person Working"
            width="500"
            height="320"
          />
        </div>
        <div className="flex flex-col justify-center w-1/2 font-serif pl-6">
          <div className="text-2xl">
          We provide Multiple Choice Questions to all our teachers which are using our services. Currently we provide question bank for secondary classes as board pattern of examinations is also changing and focussing more on MCQs based questions. We provide questions according to difficulty level and then PDF can be generated and downloaded directly on computer by teachers.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
