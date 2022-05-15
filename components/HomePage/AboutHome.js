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
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et omnis
            nostrum officia explicabo iusto aliquam iure consectetur praesentium
            modi, nam quaerat expedita cupiditate necessitatibus ipsa dolorum
            dicta molestias atque corporis beatae laudantium facere a possimus
            reprehenderit. Sapiente a fugit quaerat totam iste quisquam cumque
            voluptatem, voluptates enim in necessitatibus corrupti?
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
