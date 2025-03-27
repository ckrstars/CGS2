{/* Previous imports remain the same */}
import { Paintbrush } from 'lucide-react';
import { Feather } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Scissors } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Palette } from 'lucide-react';


const serviceCategories: ServiceCategory[] = [
  {
    name: 'Special Offers',
    services: [
      {
        name: 'Bonanza Best Package',
        price: '$150',
        description: 'Comprehensive spa package including multiple services',
        image: 'https://images.unsplash.com/photo-1519494026892-80bdf2ba8c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        icon: <Sparkles className="w-6 h-6" />,
      },
    ],
  },
  {
    name: 'Eyebrow & Facial Hair Services',
    services: [
      {
        name: 'Eyebrow Threading',
        price: '$10',
        description: 'Precise eyebrow shaping using threading technique',
        image: 'https://images.unsplash.com/photo-1583255248816-21381ab17098?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        icon: <Paintbrush className="w-6 h-6" />,
      },
      {
        name: 'Upper Lip Threading',
        price: '$4',
        description: 'Gentle hair removal for upper lip area',
        image: 'https://images.unsplash.com/photo-1600345187232-d1cdb7746fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        icon: <Feather className="w-6 h-6" />,
      },
    ],
  },
  {
    name: 'Waxing Services',
    services: [
      {
        name: 'Full Arms Wax',
        price: '$19',
        description: 'Complete arm hair removal',
        image: 'https://images.unsplash.com/photo-1620283085019-1c29a4f5891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        icon: <Scissors className="w-6 h-6" />,
      },
      {
        name: 'Full Body Wax',
        price: '$35',
        description: 'Comprehensive body hair removal',
        image: 'https://images.unsplash.com/photo-1571751498855-85c1e6be5d7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        icon: <Heart className="w-6 h-6" />,
      },
    ],
  },
  {
    name: 'Manicure & Pedicure',
    services: [
      {
        name: 'Manicure',
        price: '$29',
        description: 'Professional hand care and nail styling',
        image: 'https://images.unsplash.com/photo-1610992015732-2449b0bb0a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        icon: <Palette className="w-6 h-6" />,
      },
    ],
  },
];

{/* Rest of the component remains the same */}

export default serviceCategories