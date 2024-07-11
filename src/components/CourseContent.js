import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CourseContent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when section is 50% visible
  });

  const [animateSection, setAnimateSection] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateSection(true);
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={animateSection ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      id="course-content"
      className="py-20 bg-[#026d02] text-white"
    >
      <div className="container mx-auto text-center px-16">
        <h2 className="text-4xl font-extrabold text-[#FFD700]">Numerology Course Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#026d02]">Opportunity vs Ability</h3>
            <ul className="mt-4 text-left text-black">
              <li className="mb-2">Core Numbers and Transitions</li>
              <li className="mb-2">Master numbers and potential</li>
              <li className="mb-2">Karmic debts and consequences</li>
              <li className="mb-2">Karmic lessons and how to overcome them</li>
              <li className="mb-2">Birth charts making</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#026d02]">Pinnacle Time Calculations</h3>
            <ul className="mt-4 text-left text-black">
              <li className="mb-2">Challenge time calculations</li>
              <li className="mb-2">Time cycles</li>
              <li className="mb-2">Correlating 7,8,9.</li>
              <li className="mb-2">Yearly number and their limitations</li>
              <li className="mb-2">Essence numbers and its complications</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#026d02]">Monthly Number Analysis</h3>
            <ul className="mt-4 text-left text-black">
              <li className="mb-2">Monthly number and their relationship with bigger time cycles</li>
              <li className="mb-2">Name and its components</li>
              <li className="mb-2">Rules of name changes</li>
              <li className="mb-2">Correlating the full charts</li>
              <li className="mb-2">Cell numbers usage</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#026d02]">House Number Power</h3>
            <ul className="mt-4 text-left text-black">
              <li className="mb-2">House number and its powers</li>
              <li className="mb-2">Remedies as an SOP</li>
              <li className="mb-2">Practical remedies</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CourseContent;
