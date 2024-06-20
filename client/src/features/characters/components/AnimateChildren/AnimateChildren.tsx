import React from "react";
import { motion } from "framer-motion";

interface CardsWithAnimationProps {
  children: React.ReactNode;
  stagger?: number;
}

/**
 * AnimateChildren component to animate its children with a staggered effect.
 *
 * This component leverages Framer Motion to animate each child element with a specified
 * stagger delay. Each child will fade in and move up slightly as it becomes visible.
 *
 * @component
 * @example
 * // Example usage of AnimateChildren
 * import AnimateChildren from './AnimateChildren';
 *
 * const Example = () => {
 *   return (
 *     <AnimateChildren stagger={0.2}>
 *       <div>Item 1</div>
 *       <div>Item 2</div>
 *       <div>Item 3</div>
 *     </AnimateChildren>
 *   );
 * };
 *
 * @param {CardsWithAnimationProps} props - The properties for the component.
 * @param {React.ReactNode} props.children - The child elements to animate.
 * @param {number} [props.stagger=0.1] - The stagger delay between each child's animation.
 *
 * @returns {JSX.Element} The rendered list of animated children.
 */
const AnimateChildren: React.FC<CardsWithAnimationProps> = ({
  children,
  stagger = 0.1,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {React.Children.map(children, (child, index) => {
        return (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              delay: index * stagger,
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </>
  );
};

export default AnimateChildren;
