import { useEffect, useState, useRef } from 'react';

export default function Loading({ text, progress }) {
  const [currWidth, setCurrWidth] = useState(0);
  const animationRef = useRef(null); // ⬅️ store animation frame id

  useEffect(() => {
    function animate() {
      setCurrWidth(w => {
        const diff = progress - w;
        if (Math.abs(diff) < 0.2) {
          cancelAnimationFrame(animationRef.current);
          return progress; // snap to target if close enough
        }
        return w + diff / 5; // smooth interpolation
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current); // ⬅️ cleanup
  }, [progress]);

  return (
    <div className="w-full m-auto sm:w-[540px] h-[102px] bg-clr-200 shadow-lg rounded-md p-4 flex flex-col gap-4 items-center justify-center">
      <p className="text-xs text-clr-100 text-center font-light">
        <span className="font-semibold">{text}</span>, please wait.. {progress}%
      </p>
      <div className="loading-bar w-full">
        <div className="outerbar w-2/3 m-auto h-1.5 bg-clr-300 rounded-lg relative overflow-hidden">
          <div
            className="innerbar bg-primary-100 rounded-lg h-full absolute"
            style={{ width: `${Math.round(currWidth)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
