import Link from "next/link";
 export default function Skills(){
    return(
      <div className="bg-pink-100 p-1 min-h-screen"> 
    <h1 className="text-rose-500 py-5 text-4xl font-sans font-bold text-center"> MY SKILLS</h1>

    <div className="flex justify-center gap-5 ">
    
    <button className="bg-green-600 text-white border-2 rounded-md p-2 font-semibold transition all duration-100 hover:bg-pink-400">HTML</button>
    <button className="bg-green-600 text-white border-2 rounded-md p-2 font-semibold transition all duration-100 hover:bg-pink-400">CSS</button>
    <button className="bg-green-600 text-white border-2 rounded-md p-2 font-semibold transition all duration-100 hover:bg-pink-400">JAVASCRIPT</button>
    <button className="bg-green-600 text-white border-2 rounded-md p-2 font-semibold transition all duration-100 hover:bg-pink-400 ">TYPESCRIPT</button>
    <button className="bg-green-600 text-white border-2 rounded-md p-2 font-semibold transition all duration-100 hover:bg-pink-400">TAILWIND CSS</button>
    <button className="bg-green-600 text-white border-2 rounded-md p-2 font-semibold transition all duration-100 hover:bg-pink-400 ">NEXTJS</button>
    </div>

     <h2 className="text-red-500 py-6 text-4xl font-sans font-bold text-center">MY PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2">
      <div className="space-y-2 bg-cyan-400 p-2 transition all duration-100 hover:bg-pink-400">
        <h3 className="text-center font-bold text-yellow-50 text-xl">COUNTDOWN TIMER</h3>
        <p className="text-sm text-black text-center">{"https://countdown-timer-quratulains-projects-c5799c50.vercel.app/"}</p>
        <p className="text-sm text-black text-center">{"https://github.com/quratulainasim/countdown-timer.git"}</p>
        </div>

        <div className="space-y-2 bg-cyan-400 p-2 transition all duration-100 hover:bg-pink-400">
        <h3 className="text-center font-bold text-yellow-50 text-xl">OOPS MY BANK</h3>
        <p className="text-sm text-black text-center">{"https://oops-my-bank-quratulains-projects-c5799c50.vercel.app/"}</p>
        <p className="text-sm text-black text-center">{"https://github.com/quratulainasim/oops-myBank.git"}</p>
      </div>

        <div className="space-y-2 bg-cyan-400 p-1 transition all duration-100 hover:bg-pink-400">
        <h3 className="text-center font-bold text-yellow-50 text-xl">RESUME</h3>
        <p className="text-sm text-black text-center">{"https://milestone-5-navy.vercel.app/"}</p>
        <p className="text-sm text-black text-center">{"https://github.com/quratulainasim/Milestone-Projects.git"}</p>
        </div>
    
        <div className="space-y-2 bg-cyan-400 p-2 transition all duration-100 hover:bg-pink-400">
        <h3 className="text-center font-bold text-yellow-50 text-xl">OOPS CONSOLE</h3>
        <p className="text-sm text-black text-center">{"https://oops-console-project-quratulains-projects-c5799c50.vercel.app/"}</p>
        <p className="text-sm text-black text-center">{"https://github.com/quratulainasim/oops-console-project.git"}</p>
        </div>

        <div className="space-y-2 bg-cyan-400 p-2 transition all duration-100 hover:bg-pink-400">
        <h3 className="text-center font-bold text-yellow-50 text-xl">QUIZ GAME</h3>
        <p className="text-sm text-black text-center">{"https://quiz-game-quratulains-projects-c5799c50.vercel.app/"}</p>
        <p className="text-sm text-black text-center">{"https://github.com/quratulainasim/quiz-game.git"}</p>

      </div>
      </div>
      </div>




    );
 }

 