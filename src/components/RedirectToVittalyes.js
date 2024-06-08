import React from 'react';

const RedirectToVittalyes = () => {
    return (
        <div style={{ width: '100%', height: '100vh', margin: '0', padding: '0', overflow: 'hidden' }}>
            <iframe
                src="https://vittalyes.netlify.app"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="External Site"
            ></iframe>
        </div>
    );
};

export default RedirectToVittalyes;
