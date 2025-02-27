import React from 'react';
import { Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { colors } from '../utils/colors';
import zeeqr from '../assets/zeeqr.png';
import tablesprint from '../assets/tablesprint.png';
import studentmanagement from '../assets/studentmanagement.png';

const projects = [
  {
    title: 'ZeeQR - QR Code Generator',
    description: 'A digital QR code generator built with React.js, Ant Design, and Tailwind CSS. Implemented robust front-end features for enhanced user experience.',
    image: zeeqr,
  },
  {
    title: 'Tablesprint',
    description: 'A full-stack MERN application for managing categories, subcategories, and products with complete CRUD functionality.',
    image: tablesprint,
  },
  {
    title: 'Student Management System',
    description: 'A Python-based student enrollment system with HTML/CSS frontend, featuring student registration, search, and CRUD operations.',
    image: studentmanagement,
  },
];

const Projects = () => {
  return (
    <section className="w-full" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
        >
          My Projects
        </motion.h2>
        <Row gutter={[24, 24]} justify="center">
          {projects.map((project, index) => (
            <Col xs={24} sm={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="h-full transform-gpu"
              >
                <Card
                  hoverable
                  className="w-full shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                  cover={
                    <motion.div 
                      className="h-56 overflow-hidden bg-gray-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        alt={project.title} 
                        src={project.image} 
                        className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                      />
                    </motion.div>
                  }
                  style={{ 
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.accent}`,
                    borderRadius: '8px'
                  }}
                  bodyStyle={{
                    padding: '24px'
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card.Meta 
                      title={
                        <span className="text-xl text-white mb-2 hover:text-blue-400 transition-colors">
                          {project.title}
                        </span>
                      }
                      description={
                        <span className="text-light hover:text-blue-200 transition-colors">
                          {project.description}
                        </span>
                      }
                    />
                  </motion.div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;