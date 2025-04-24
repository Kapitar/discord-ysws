import Button from "@/components/Button";
import Card from "@/components/Card";
import FAQCard from "@/components/FAQCard";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-800 to-indigo-500">
        <div className="container mx-auto h-screen flex items-center md:p-0 p-5">
          <div className="lg:grid lg:grid-cols-2 w-full text-center">
            <div className="self-center">
              <Image
                src={"/kitten.png"}
                alt=""
                width={300}
                height={300}
                className="mb-4 mx-auto"
              />
              <p className="text-3xl text-white font-medium mb-5">
                You ship a discord bot, we ship{" "}
                <span className="text-indigo-200">Discord Nitro</span> or{" "}
                <span className="text-indigo-200">cat ears</span>!
              </p>

              <div className="flex justify-center gap-x-4">
                <Button href="" color="blue">
                  Submit PR
                </Button>
                <Button href="" color="blue" invert>
                  Submit Demo
                </Button>
              </div>
            </div>
            <div className="justify-end lg:flex hidden">
              <Image
                src={"/discord-logo.png"}
                alt=""
                width={450}
                height={450}
              />
            </div>
          </div>
          <div className="absolute left-0 bottom-12 w-full text-center">
            <a href="#learn-more">
              <h2 className="text-white text-xl mb-2">Learn more</h2>
              <FaArrowDown className="mx-auto text-white text-xl animate-bounce" />
            </a>
          </div>
        </div>
        <div id="learn-more" className="container mx-auto pt-16">
          <h1 className="md:text-5xl text-4xl font-bold text-center text-white mb-12 md:px-0 px-5">
            How does it work?
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:px-0 px-5">
            <Card title="Learn how to create bots!" step={1}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aliquam necessitatibus sunt exercitationem cum, non,
              iusto dolor obcaecati excepturi in recusandae doloremque nisi
              blanditiis ducimus. In consequuntur facilis temporibus laborum!
            </Card>

            <Card title="Start building your bot" step={2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aliquam necessitatibus sunt exercitationem cum, non,
              iusto dolor obcaecati excepturi in recusandae doloremque nisi
              blanditiis ducimus. In consequuntur facilis temporibus laborum!
            </Card>

            <Card title="Submit your bot" step={3}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aliquam necessitatibus sunt exercitationem cum, non,
              iusto dolor obcaecati excepturi in recusandae doloremque nisi
              blanditiis ducimus. In consequuntur facilis temporibus laborum!
            </Card>

            <Card title="Receive a prize!" step={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aliquam necessitatibus sunt exercitationem cum, non,
              iusto dolor obcaecati excepturi in recusandae doloremque nisi
              blanditiis ducimus. In consequuntur facilis temporibus laborum!
            </Card>
          </div>
        </div>
        <div id="requirements" className="container mx-auto pt-16">
          <h1 className="md:text-5xl text-4xl font-bold text-center text-white mb-12 md:px-0 px-5">
            Requirements
          </h1>

          <div className="px-4">
            <div className="space-y-4 w-full bg-white py-7 px-4 rounded-2xl">
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-indigo-500 text-2xl flex-shrink-0" />
                <p className="md:text-xl text-lg text-black">
                  You need to be a high schooler and be less than 18 years old.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-indigo-500 text-2xl flex-shrink-0" />
                <p className="md:text-xl text-lg text-black">
                  Spend at least 5 hours on developing your bot.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-indigo-500 text-2xl flex-shrink-0" />
                <p className="md:text-xl text-lg text-black">
                  Record your time using Hackatime.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="faq" className="container mx-auto pb-16 pt-16">
          <h1 className="md:text-5xl text-4xl font-bold text-center text-white mb-12 md:px-0 px-5">
            Frequently Asked Questions
          </h1>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 px-5">
            <FAQCard title="How much time do I need to spend on my bot?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              odio necessitatibus placeat? Ipsum dignissimos officiis harum
              consequuntur, saepe mollitia et nisi quisquam error ullam, optio
              dolorem ducimus voluptates praesentium atque.
            </FAQCard>

            <FAQCard title="How much time do I need to spend on my bot?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              odio necessitatibus placeat? Ipsum dignissimos officiis harum
              consequuntur, saepe mollitia et nisi quisquam error ullam, optio
              dolorem ducimus voluptates praesentium atque.
            </FAQCard>

            <FAQCard title="How much time do I need to spend on my bot?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              odio necessitatibus placeat? Ipsum dignissimos officiis harum
              consequuntur, saepe mollitia et nisi quisquam error ullam, optio
              dolorem ducimus voluptates praesentium atque.
            </FAQCard>

            <FAQCard title="How much time do I need to spend on my bot?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              odio necessitatibus placeat? Ipsum dignissimos officiis harum
              consequuntur, saepe mollitia et nisi quisquam error ullam, optio
              dolorem ducimus voluptates praesentium atque.
            </FAQCard>
          </div>
        </div>
      </div>
    </>
  );
}
