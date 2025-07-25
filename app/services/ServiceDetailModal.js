'use client';

import React, { useEffect } from 'react';

const ServiceDetailModal = ({ service, onClose }) => {
  useEffect(() => {
    // モーダル表示時にbodyのスクロールを無効にする
    document.body.style.overflow = 'hidden';
    return () => {
      // モーダル非表示時にbodyのスクロールを有効にする
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!service) return null;

  return (
    <div 
      className="modal fade show d-block" 
      tabIndex="-1" 
      role="dialog" 
      aria-labelledby="serviceDetailModalLabel" 
      aria-hidden="true"
      onClick={onClose} // 背景クリックで閉じる
    >
      <div className="modal-dialog modal-dialog-centered" role="document" onClick={e => e.stopPropagation()}> {/* モーダル内クリックで閉じないようにする */}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="serviceDetailModalLabel">{service.title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>{service.description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
