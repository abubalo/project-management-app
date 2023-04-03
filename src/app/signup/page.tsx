import {FaGithub, FaGoogle} from "react-icons/fa"

type Props = {};

export default function Signup(props: Props) {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <form className="w-[95%] md:w-[400px] p-12 border border-primary rounded-md">
      <div className="mb-3">
          <h1 className="text-xl font-normal">Sign with</h1>
          <div className="flex gap-2">
            <div className="px-8 py-4 bg-foreground w-full">
              <FaGoogle />
              <span>Google</span>
            </div>
            <div className="px-8 py-4 bg-foreground w-full">
              <FaGithub />
              <span>Github</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y- text-sm">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="w-full flex flex-col space-y-2 text-sm">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>
        <div className="w-full flex flex-col space-y-2 text-sm">
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" />
        </div>
        
      </form>
    </main>
  );
}
