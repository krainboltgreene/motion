import { useFrame } from "@react-three/fiber";
import { MotionConfigContext, useMotionValue } from "framer-motion";
import { useContext } from "react";
export function useTime() {
    const time = useMotionValue(0);
    const { isStatic } = useContext(MotionConfigContext);
    !isStatic && useFrame((state) => time.set(state.clock.getElapsedTime()));
    return time;
}
//# sourceMappingURL=use-time.js.map