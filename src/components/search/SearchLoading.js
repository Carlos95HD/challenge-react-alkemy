import React from 'react'

export const SearchLoading = () => {
  return (
    <div className="row align-items-center" style={{height:500}}>
      <div className="spinner-border text-warning text-center mx-auto" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
