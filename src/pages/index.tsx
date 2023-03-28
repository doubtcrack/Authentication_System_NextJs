import { NextPageContext } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      {" "}
      <div className="flex flex-wrap justify-center items-center">
        <div className="py-6 px-3 text-right">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-md uppercase font-bold px-8 py-2 rounded-md sm:mr-2 mb-1 ease-linear transition-all duration-150"
            onClick={() => signOut()}
          >
            Log out
          </button>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={session?.user?.image!}
            alt={`${session?.user?.name} image`}
            className="rounded-full h-40 w-40"
          />
        </div>
        <div className="text-center mt-12">
          <h3 className="text-4xl font-semibold mb-2">{session?.user?.name}</h3>
          <div className="text-sm mb-2 font-bold">{session?.user?.email}</div>
          <div className="mb-2 mt-10">
            You logged in using &nbsp;
            <span className="capitalize bg-blue-400 text-white px-4 py-1 ml-2 font-bold italix text-lg rounded-md">
              {session?.user?.provider}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex justify-center gap-4  mt-4 pt-6 text-3xl ">
          <a
            href=""
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <AiFillGithub />
          </a>
          <a
            href=""
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <FaInstagram />
          </a>
          <a
            href=""
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <FaYoutube />
          </a>
          <a
            href=""
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <SiUdemy />
          </a>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
}
