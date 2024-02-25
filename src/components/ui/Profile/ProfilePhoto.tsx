import pic from "@assets/pic.png";
import { Sprite, Stage, withFilters, Container } from "@pixi/react";
import { GlitchFilter } from "pixi-filters";
import { useState, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
interface FiltersEffectProps {
  children?: React.ReactNode;
}
function ProfilePhoto() {
  const picRef = useRef<HTMLDivElement>(null);

  function FiltersEffect({ children }: FiltersEffectProps) {
    const [glitchConfig, setGlitchConfig] = useState({
      blue: new PIXI.Point(0, 0),
      green: new PIXI.Point(0, 0),
      red: new PIXI.Point(5, -10),
      slices: 5,
      offset: 5,
    });
    const Filters = withFilters(Container, {
      glitch: GlitchFilter,
    });

    function randomIntFromInterval(min: number, max: number) {
      return Math.random() * (max - min + 1) + min;
    }

    useEffect(() => {
      const intervalId = setInterval(() => {
        setGlitchConfig((prevConfig) => ({
          ...prevConfig,
          blue: new PIXI.Point(
            randomIntFromInterval(-5, 5),
            randomIntFromInterval(-5, 5),
          ),
          green: new PIXI.Point(randomIntFromInterval(-5, 5), 0),
          red: new PIXI.Point(
            randomIntFromInterval(-5, 5),
            randomIntFromInterval(-5, 5),
          ),
        }));
      }, 100);

      return () => clearInterval(intervalId);
    }, []);

    return <Filters glitch={glitchConfig}>{children}</Filters>;
  }
  return (
    <>
      <div className="h-52 w-52 overflow-hidden rounded-full" ref={picRef}>
        <Stage
          width={picRef.current?.clientWidth}
          height={picRef.current?.clientWidth}
          className="rounded-full"
        >
          <FiltersEffect>
            <Sprite
              image={pic}
              scale={{ x: 0.35, y: 0.35 }}
              anchor={0.5}
              x={(picRef.current?.clientWidth ?? 0) / 2}
              y={(picRef.current?.clientWidth ?? 0) / 2}
            ></Sprite>
          </FiltersEffect>
        </Stage>
      </div>
    </>
  );
}

export default ProfilePhoto;
