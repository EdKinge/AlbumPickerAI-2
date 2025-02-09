import { forwardRef } from "react";

const TargetSelection = forwardRef(({children}, ref) => {
  return (
    <section ref={ref}>
      {children}
    </section>
  )
});

export default TargetSelection;