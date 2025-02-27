import React from 'react';
import { Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import { colors } from '../utils/colors';

const Skills = () => {
  const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'MySQL', 'React.js', 'MERN Stack', 'Python'];
  const softSkills = ['Good Programming skills', 'Effective communicator', 'Self-motivated', 'Fast learner'];

  return (
    <section className="w-full" style={{ backgroundColor: colors.darkBlue }}>
      <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
        >
          Skills
        </motion.h2>
        <Row gutter={[24, 24]} justify="center">
          {[
            { title: "Technical Skills", skills: technicalSkills },
            { title: "Soft Skills", skills: softSkills }
          ].map((section, idx) => (
            <Col xs={24} md={11} lg={11} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
                }}
                className=" transform-gpu"
              >
                <Card 
                  title={section.title}
                  className="w-full shadow-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    color: colors.light,
                    border: `1px solid ${colors.accent}`,
                    borderRadius: '8px'
                  }}
                  headStyle={{ 
                    backgroundColor: colors.primary,
                    color: colors.light,
                    borderBottom: `1px solid ${colors.accent}`,
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    padding: '16px 24px'
                  }}
                  bodyStyle={{
                    padding: '24px'
                  }}
                >
                  <motion.ul 
                    className="list-disc list-inside space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {section.skills.map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-light hover:text-blue-300 transition-colors"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </motion.ul>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
