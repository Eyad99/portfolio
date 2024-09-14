import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function SendMessage() {
  return (
    <section
      className={`min-h-screen flex flex-col items-center gap-14  `}
      aria-hidden={true}
    >
      <section className="mt-28 h-fit w-[32%] text-center">
        <h1 className="text-5xl mb-2 font-bold">Send me a message!</h1>
        <span className="text-xl">
          Got a question or proposal, or just want to say hello? Go ahead.
        </span>
      </section>
      {/* Form */}
      <form className="w-1/2">
        <div className="grid grid-cols-2 gap-6  mb-6 ">
          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="name">Youn Name</Label>
            <Input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="col-span-2 md:col-span-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="col-span-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              className="resize-none"
              placeholder="Hi, I believe we should implement a design system for our products at Company X. How soon would you be available for a meeting to discuss this further?"
              id="message"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="w-[30%] hover:before:bg-redborder-red-500 relative h-[50px] overflow-hidden border border-red-500  px-3 text-red-500 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full "
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

export default SendMessage;
