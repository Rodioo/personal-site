import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, {useEffect} from 'react';

type Props = {
  className?: string;
  text: string;
}

const AnimatedText = ({className = '', text}: Props): React.JSX.Element => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      duration: 1,
      delay: 0.5,
      ease: "easeIn",
    });

    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className}>
      <motion.span>
          {displayText}
      </motion.span>
    </span>
  );
}

export default AnimatedText
