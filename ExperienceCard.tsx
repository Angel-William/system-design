import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const ExperienceCard = ({ company, role, period, description }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card p-6 rounded-lg space-y-4"
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{company}</h3>
        <div className="flex justify-between items-center">
          <p className="text-primary font-medium">{role}</p>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;