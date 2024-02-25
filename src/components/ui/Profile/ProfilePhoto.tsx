import pic from "@assets/pic.png";
import { Sprite, Stage } from "@pixi/react";
import { useState, useEffect, useRef } from "react";
import FiltersEffect from "./ProfilePhotoFilter";
function ProfilePhoto() {
  const picRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (picRef.current) {
      const { clientWidth, clientHeight } = picRef.current;
      setSize({ width: clientWidth, height: clientHeight });
    }
  }, []);

  console.log("test1");
  return (
    <>
      <div className="h-52 w-52 overflow-hidden rounded-full" ref={picRef}>
        <Stage width={size.width} height={size.height} className="rounded-full">
          <FiltersEffect>
            <Sprite
              image={pic}
              scale={{ x: 0.35, y: 0.35 }}
              anchor={0.5}
              x={size.width / 2}
              y={size.height / 2}
            ></Sprite>
          </FiltersEffect>
        </Stage>
      </div>
    </>
  );
}

export default ProfilePhoto;
