import React from 'react';
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiPython, SiExpress, SiFlask, SiArduino, SiPostman, SiPrisma,
  SiInkscape, SiMongodb, SiFfmpeg, SiNextdotjs, SiOpenai, SiCplusplus
} from "react-icons/si";
import { FaReact, FaGithub, FaAws, FaRust } from "react-icons/fa";

const AvatarSection = () => {
  const [radii, setRadii] = React.useState([150,200,250]);
  React.useEffect(()=>{
    if(screen.width<=900){
      setRadii([90,135,180])
    }
  },[])
  return (
    <div className="relative flex min-h-[400px] md:min-h-[550px] min-w-[400px] md:min-w-[550px] flex-col items-center justify-center overflow-hidden">
      <img src={"/avatar.jpeg"} alt="Avatar" className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] rounded-full" />

      {/* First Circle */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={radii[0]}
      >
        <RiJavascriptFill size={30} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={radii[0]}
      >
        <SiCplusplus size={30} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={radii[0]}
      >
        <SiPython size={30} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={5}
        radius={radii[0]}
      >
        <FaRust size={30} />
      </OrbitingCircles>

      {/* Second Circle */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={30}
        delay={25}
        radius={radii[1]}
        reverse
      >
        <FaReact size={40} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={30}
        delay={20}
        radius={radii[1]}
        reverse
      >
        <SiFfmpeg size={40} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={30}
        delay={15}
        radius={radii[1]}
        reverse
      >
        <SiExpress size={40} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={30}
        delay={10}
        radius={radii[1]}
        reverse
      >
        <SiNextdotjs size={40} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={30}
        delay={5}
        radius={radii[1]}
        reverse
      >
        <RiTailwindCssFill size={40} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={30}
        delay={0}
        radius={radii[1]}
        reverse
      >
        <SiOpenai size={40} />
      </OrbitingCircles>

      {/* Third Circle */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={40}
        delay={5}
        radius={radii[2]}
      >
        <SiFlask size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={40}
        delay={10}
        radius={radii[2]}
      >
        <FaGithub size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={40}
        delay={15}
        radius={radii[2]}
      >
        <SiArduino size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={40}
        delay={20}
        radius={radii[2]}
      >
        <SiInkscape size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={40}
        delay={25}
        radius={radii[2]}
      >
        <SiPostman size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={40}
        delay={30}
        radius={radii[2]}
      >
        <SiMongodb size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={40}
        delay={35}
        radius={radii[2]}
      >
        <SiPrisma size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={40}
        delay={0}
        radius={radii[2]}
      >
        <FaAws size={50} />
      </OrbitingCircles>
    </div>
  );
}

export default AvatarSection;
