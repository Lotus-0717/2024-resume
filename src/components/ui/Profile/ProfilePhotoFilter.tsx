import { GlitchFilter } from "pixi-filters";
import { withFilters, Container } from "@pixi/react";
import * as PIXI from "pixi.js";
import { useEffect, useState } from "react";
interface FiltersEffectProps {
  children?: React.ReactNode;
}

function FiltersEffect({ children }: FiltersEffectProps) {
  const [shouldUpdateFilter, setShouldUpdateFilter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const decision = Math.random() > 0.7;
      if (decision) {
        setShouldUpdateFilter((prevState) => !prevState);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  function Random(min: number, max: number) {
    return Math.random() * (max - min + 1) + min;
  }

  const Filters = withFilters(Container, {
    glitch: GlitchFilter,
  });

  const glitchConfig = {
    blue: new PIXI.Point(Random(-3, 3), Random(-3, 3)),
    red: new PIXI.Point(Random(-3, 3), Random(-3, 3)),
    green: new PIXI.Point(Random(-3, 3), Random(-3, 3)),
    splice: !shouldUpdateFilter ? 0 : Random(0, 10),
    offset: !shouldUpdateFilter ? 0 : Random(0, 20),
  };

  return <Filters glitch={glitchConfig}>{children}</Filters>;
}

export default FiltersEffect;
