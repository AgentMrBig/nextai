import stacks from "../data/stacks.json"
import Link from "next/link"
import Image from "next/image"

export default function Home() {

  const renderStacks = () =>{
    return Object.keys(stacks).map((stackKey) => {
      const stack = stacks[stackKey];
      return (
        <Link 
        key={stack.href}
        href={stack.href}
        className="w-20 h-20 relative border-2 border-solid m-2 rounded-xl"
        >
          <Image src={stack.logo} className="object-cover" fill alt=""/>
        </Link>
      );
    })
  }


  return (
    <h1 className="h-full flex justify-center items-center flex-col">
      <div className="">
        What do you want to learn?
      </div>
      <div className="flex">
        {renderStacks()}
      </div>
    </h1>
  )
}
