import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { colors } from '../utils/colors';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'skills', label: 'Skills' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    navigate(`/${sectionId === 'home' ? '' : sectionId}`);
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 transform-gpu"
      style={{ 
        backgroundColor: `${colors.dark}cc`,
        backdropFilter: 'blur(8px)'
      }}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end p-4">
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: colors.light, fontSize: '24px' }} />}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="border-none"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Menu
          mode="vertical"
          className="border-none bg-transparent"
          style={{ 
            background: 'transparent'
          }}
          selectedKeys={[window.location.pathname.substring(1) || 'home']}
        >
          {menuItems.map(item => (
            <Menu.Item 
              key={item.key}
              style={{
                backgroundColor: 'transparent',
                '&:active': {
                  backgroundColor: colors.accent
                }
              }}
            >
              <span 
                onClick={() => scrollToSection(item.key)}
                className="text-lg cursor-pointer block  transition-opacity"
                style={{ 
                  color: colors.light,
                }}
              >
                {item.label}
              </span>
            </Menu.Item>
          ))}
        </Menu>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block px-4 sm:px-6 lg:px-8">
        <Menu
          mode="horizontal"
          className="justify-center border-none transform-gpu"
          style={{ 
            background: 'transparent'
          }}
        >
          {menuItems.map(item => (
            <Menu.Item key={item.key}>
              <span 
                onClick={() => scrollToSection(item.key)}
                className="text-lg cursor-pointer hover:text-blue-400 transition-colors" 
                style={{ color: colors.light }}
              >
                {item.label}
              </span>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </motion.header>
  );
};

export default Header;