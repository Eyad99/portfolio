import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function SendMessage() {
  return (
    <section
      className={`min-h-screen flex flex-col items-center gap-[1rem] bg-secondary`}
      aria-hidden={true}
    >
      <section className="sm:w-[75%] w-full md:mt-28 mt-14 h-fit text-center p-12">
        <h1 className="max-md:text-3xl text-5xl mb-2 font-bold">
          Send me a message!
        </h1>
        <span className="max-md:text-lg text-xl">
          Got a question or proposal, or just want to say hello? Go ahead.
        </span>
      </section>

      {/* Form */}
      <form className=" lg:w-1/2 sm:w-[75%] w-full md:p-12 max-md:px-12 max-md:py-8">
        <div className="grid grid-cols-2 gap-6 mb-6 ">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <Label htmlFor="name" className="text-lg">
              Your Name
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="md:h-[3rem]"
            />
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="md:h-[3rem]"
            />
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <Label htmlFor="message" className="text-lg">
              Your message
            </Label>
            <Textarea
              className="resize-none md:h-[5rem]"
              placeholder="Hi, I believe we should implement a design system for our products at Company X. How soon would you be available for a meeting to discuss this further?"
              id="message"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="w-[30%] hover:before:bg-redborder-[#3C3D37] relative h-[50px] overflow-hidden border border-[#3C3D37]  px-3 text-[#3C3D37] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#3C3D37] before:transition-all before:duration-500 hover:text-white hover:shadow-[#3C3D37] hover:before:left-0 hover:before:w-full "
            variant={"outline"}
          >
            <div className="flex justify-between items-center gap-4 relative z-10">
              <span>Send!</span>
              <Send />
            </div>
          </Button>
        </div>
      </form>
    </section>
  );
}
// bg-gray-700
export default SendMessage;
