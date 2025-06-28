import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stats: string[];
}

const ProjectCard = ({ title, description, image, stats }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-lg bg-card p-6 space-y-4"
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">{stat}</span>
          </div>
        ))}
      </div>
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover rounded-md mt-4"
      />
    </motion.div>
  );
};

export default ProjectCard;