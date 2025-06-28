import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="star"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;