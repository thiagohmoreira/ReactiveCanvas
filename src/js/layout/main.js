import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div className='reactive-canvas'>
      {children}
    </div>
  );
}

//Property validation
MainLayout.displayName = 'MainLayout';
MainLayout.propTypes = {
  children: React.PropTypes.array.isRequired
};
