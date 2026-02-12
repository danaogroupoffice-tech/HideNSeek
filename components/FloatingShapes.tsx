import { motion } from 'framer-motion';

export function FloatingShapes() {
  const shapes = [
    // Green semi-circles
    { color: 'bg-green-400', size: 'w-24 h-24', style: 'rounded-full', top: '10%', left: '5%', duration: 20 },
    { color: 'bg-green-300', size: 'w-16 h-16', style: 'rounded-full', top: '70%', left: '10%', duration: 25 },
    
    // Pink triangles
    { color: 'bg-pink-400', size: 'w-20 h-20', style: 'clip-triangle', top: '15%', right: '8%', duration: 18 },
    { color: 'bg-pink-300', size: 'w-14 h-14', style: 'clip-triangle', top: '65%', right: '12%', duration: 22 },
    
    // Blue triangles
    { color: 'bg-blue-400', size: 'w-24 h-24', style: 'clip-triangle', top: '40%', left: '3%', duration: 23 },
    { color: 'bg-blue-300', size: 'w-16 h-16', style: 'clip-triangle', top: '85%', right: '15%', duration: 19 },
    
    // Yellow semi-circles
    { color: 'bg-yellow-400', size: 'w-20 h-20', style: 'rounded-full', top: '25%', right: '5%', duration: 21 },
    { color: 'bg-yellow-300', size: 'w-28 h-28', style: 'rounded-full', top: '80%', left: '20%', duration: 24 },
    
    // Additional shapes for more playfulness
    { color: 'bg-purple-300', size: 'w-18 h-18', style: 'rounded-full', top: '50%', right: '3%', duration: 26 },
    { color: 'bg-orange-300', size: 'w-12 h-12', style: 'clip-triangle', top: '35%', right: '20%', duration: 20 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} ${shape.size} ${shape.style} opacity-40`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            clipPath: shape.style === 'clip-triangle' 
              ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
              : undefined,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
