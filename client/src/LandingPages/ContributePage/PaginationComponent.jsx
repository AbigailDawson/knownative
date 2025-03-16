import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

// Custom Chevron SVG components
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
    <path d="M9.88 14.1067L3.77333 8L9.88 1.88L8 0L0 8L8 16L9.88 14.1067Z" fill="#556163"/>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
    <path d="M0.12 1.89333L6.22667 8L0.12 14.12L2 16L10 8L2 0L0.12 1.89333Z" fill="#556163"/>
  </svg>
);

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  
  // Create array of page numbers
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // Logic for showing a limited range of pages with ellipsis
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      // If 5 or fewer pages, show all
      return pages;
    }
    
    if (currentPage <= 3) {
      // Near the start
      return [...pages.slice(0, 5), '...', totalPages];
    }
    
    if (currentPage >= totalPages - 2) {
      // Near the end
      return [1, '...', ...pages.slice(totalPages - 5, totalPages)];
    }
    
    // In the middle
    return [
      1, 
      '...', 
      currentPage - 1, 
      currentPage, 
      currentPage + 1,
      '...', 
      totalPages
    ];
  };

  const visiblePages = getVisiblePages();
  
  // Custom button to replace the default Prev/Next
  const CustomChevronButton = ({ direction, onClick, disabled }) => {
    const isLeft = direction === 'left';
    const buttonClass = `custom-chevron-button ${disabled ? 'disabled' : ''}`;
    const hoverState = hoveredButton === direction && !disabled ? 'hovered' : '';
    
    return (
      <button 
        className={`${buttonClass} ${hoverState}`} 
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => setHoveredButton(direction)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {isLeft ? <ChevronLeft /> : <ChevronRight />}
      </button>
    );
  };

  return (
    <div className="custom-pagination-container">
      <CustomChevronButton 
        direction="left" 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      
      <div className="custom-pagination-numbers">
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>;
          }
          
          return (
            <button
              key={`page-${page}`}
              className={`pagination-number-item ${page === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
      
      <CustomChevronButton 
        direction="right" 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default PaginationComponent;