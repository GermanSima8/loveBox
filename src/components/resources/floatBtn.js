import React, { useState, useEffect } from 'react';
import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import "./floatBtn.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}>
        <FloatButton
                    shape="square"
                    type="primary"
                    style={{
                        right: 24,
                    }}
                    icon={<ArrowUpOutlined />}
                onClick={scrollToTop} />
      </div>
    );
  };
  
  export default ScrollToTopButton;