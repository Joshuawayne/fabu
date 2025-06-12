// src/components/OurStoryPage.tsx

import React from 'react';
import SectionTitle from './SectionTitle';
import { APP_NAME } from '../constants';
import Button from './Button';

// Step 1: Import the local images
import FabricTexture from '../assets/images/craftsmanship-fabric.gif';
import FashionSketch from '../assets/images/craftsmanship-fabric.gif';
import CraftsmanshipFabric from '../assets/images/craftsmanship-fabric.gif';

const OurStoryPage: React.FC = () => {
  return (
    <div className="bg-white animate-fadeIn" id="our-story-page">
      {/* Hero-like banner for Our Story */}
      <div className="relative pt-28 md:pt-36 pb-20 md:pb-24 bg-luxury-bg text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          // Use the imported texture variable
          style={{ backgroundImage: `url(${FabricTexture})` }} 
        ></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-luxury-text mb-4 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            The Heart of {APP_NAME}
          </h1>
          <p className="text-lg md:text-xl text-luxury-text/80 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            Discover the philosophy and passion woven into every FABU creation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <SectionTitle title="Our Genesis" subtitle={`The Spark of ${APP_NAME}`} align="left" className="mb-10 md:mb-12" />
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="md:col-span-3 space-y-5 text-luxury-text/80 font-light leading-relaxed text-base md:text-lg">
                <p>
                At {APP_NAME}, we champion the belief that fashion is an intimate form of artistry and self-expression. Our journey began with a singular dedication: to merge distinctive design with mindful creation. We envisioned a brand where each piece would not only be visually captivating but also a joy to wear and a treasure to cherish for years to come.
                </p>
                <p>
                This vision was born from a desire to move beyond fleeting trends, to cultivate a collection that speaks to enduring style and personal narrative. {APP_NAME} is more than fabric and thread; it's a commitment to empowering individuality through sophisticated, thoughtfully crafted apparel.
                </p>
            </div>
            <div className="md:col-span-2">
                <img 
                // Use the imported sketch variable
                src={FashionSketch} 
                alt="Artistic sketch representing FABU's design inspiration" 
                className="rounded-lg shadow-subtle object-cover w-full h-auto aspect-[4/5]" 
                />
            </div>
            </div>
        </div>

        <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <SectionTitle title="The Weaver's Hand" subtitle="Craftsmanship & Materials" align="left" className="mb-10 md:mb-12" />
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="md:col-span-2 md:order-last">
                <img 
                // Use the imported fabric variable
                src={CraftsmanshipFabric} 
                alt="Close-up of luxurious fabric or detailed craftsmanship" 
                className="rounded-lg shadow-subtle object-cover w-full h-auto aspect-[4/5]" 
                />
            </div>
            <div className="md:col-span-3 space-y-5 text-luxury-text/80 font-light leading-relaxed text-base md:text-lg md:order-first">
                <p>
                Each garment that bears the {APP_NAME} name is conceived with meticulous attention to detail. From the selection of superior, often sustainable materials to the precision of our tailoring, every step is guided by an unwavering commitment to quality. Our design philosophy balances timeless elegance with a contemporary edge, resulting in pieces that are both innovative and wearable.
                </p>
                <p>
                We collaborate with skilled artisans who share our passion for excellence, ensuring that every stitch, every seam, and every silhouette meets our exacting standards. It's this dedication to the art of making that defines the tangible luxury of {APP_NAME}.
                </p>
            </div>
            </div>
        </div>
        
        <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <SectionTitle title="Our Promise" subtitle="Beyond the Garment" align="left" className="mb-10 md:mb-12" />
            <div className="max-w-3xl space-y-5 text-luxury-text/80 font-light leading-relaxed text-base md:text-lg">
            <p>
                {APP_NAME} is more than a label; we are a collective celebrating refined individuality and conscious elegance. We believe in creating fashion that not only looks exquisite but also feels right – ethically and often environmentally. Our commitment extends to responsible sourcing and fostering practices that respect both people and the planet.
            </p>
            <p>
                We invite you to experience the world of {APP_NAME}, where each piece tells a story of passion, precision, and purpose. Join us in embracing a style that is as thoughtful as it is beautiful.
            </p>
            </div>
        </div>
        
        <div className="text-center mt-16 md:mt-24 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <Button href="#shop" variant="primary" size="large">
                Explore Our Collections
            </Button>
        </div>

      </div>
    </div>
  );
};

export default OurStoryPage;