import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
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

  return (
    <Pagination className="justify-content-center">
      <Pagination.Prev 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      
      {visiblePages.map((page, index) => {
        if (page === '...') {
          return <Pagination.Ellipsis key={`ellipsis-${index}`} disabled />;
        }
        
        return (
          <Pagination.Item 
            key={`page-${page}`} 
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        );
      })}
      
      <Pagination.Next 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;