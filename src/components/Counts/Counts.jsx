import React from "react";
import AnimatedNumbers from "react-animated-numbers";



const Counts = () => {
    
      const [num, setNum] = React.useState(20);
      const [client, setClient] = React.useState(15);
      const [experience, setExperience] = React.useState(2);
            return (
              <div className="bg-zinc-950 py-10 px-4">
                <div className="md:mx-40 grid md:grid-cols-3 md:pl-56 border-solid rounded-xl border-4 border-white">
                  <div className="container flex items-center text-center">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={num}
                  fontStyle={{
                    fontWeight: "bold",
                    fontSize: 50,
                    color: "white",
                  }}
                />
                <div>
                  <div className="flex gap-1 text-center">
                  <button onClick={() => setNum((state) => state + 0)}></button>
                  <button onClick={() => setNum((state) => state - 50)}></button>
                  <p className="font-extrabold text-lg text-white">+Projects</p>
                  </div>
                </div>
              </div>
                  <div className="container flex items-center text-center">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={client}
                  fontStyle={{
                    fontSize: 50,
                    fontWeight: "bold",
                    color: "white",
                  }}
                />
                <div>
                  <div>
                  <div className="flex gap-1 text-center ">
                  <button onClick={() => setClient((state) => state + 0)}></button>
                  <button onClick={() => setClient((state) => state - 50)}></button>
                  <p className="font-extrabold text-lg text-white">+Client</p>
                  </div>
                  </div>
                </div>
              </div>
                  <div className="container flex items-center text-center">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={experience}
                  fontStyle={{
                    fontWeight: "bold",
                    fontSize:50,
                    color: "white",
                  }}
                />
                <div>
                  <div>
                  <div className="flex flex gap-1 text-center">
                  <button onClick={() => setExperience((state) => state + 0)}></button>
                  <button onClick={() => setExperience((state) => state - 50)}></button>
                  <p className="font-extrabold text-lg text-white">+Experience</p>
                  </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            );
};

export default Counts;