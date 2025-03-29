
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  // Parse description to handle line breaks
  const descLines = description.split('\n');
  
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <div className="text-ftbeck-blue mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-ftbeck-anthracite">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {descLines.map((line, index) => (
          <li key={index} className="flex items-start">
            <span className="text-ftbeck-blue mr-2">•</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
