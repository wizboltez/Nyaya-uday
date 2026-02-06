import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'var(--bg-color)',
                padding: '2rem',
                borderRadius: '8px',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                position: 'relative',
                color: 'var(--text-color)'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: 'var(--text-color)'
                    }}
                >
                    &times;
                </button>
                <h2 style={{ marginTop: 0, borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', color: 'var(--primary-color)' }}>{title}</h2>
                <div style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                    {children}
                </div>
                <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                    <button onClick={onClose} className="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
