import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
   const timeout1 =  setTimeout(onTimeout , timeout );
   return () => clearTimeout(timeout1);
  }, [onTimeout , timeout ]);



  useEffect(() => {
   const interval =  setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);

  }, []);

  return <progress max={timeout} value={remainingTime} />;
}
