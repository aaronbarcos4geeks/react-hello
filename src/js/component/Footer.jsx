import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5" style={{
            position: "fixed",
            bottom: "0",
            width: "100%"
        }}>
            <div className="container text-center">
                <p className="mb-1">© 2024 Your Company. All rights reserved.</p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
                    <a href="#" className="text-light text-decoration-none">Terms of Service</a>
                    <a href="#" className="text-light text-decoration-none">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
