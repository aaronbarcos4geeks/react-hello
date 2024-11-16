import React, { useState, useEffect } from "react";

const Card = ({ title, description, imgSrc }) => {
    const [cardStyle, setCardStyle] = useState({ width: "100%" });

    useEffect(() => {
        const updateStyle = () => {
            if (window.innerWidth >= 992) {
                setCardStyle({ maxWidth: "18rem", width: "100%" });
            } else {
                setCardStyle({ width: "100%" });
            }
        };

        updateStyle();
        window.addEventListener("resize", updateStyle);

        return () => window.removeEventListener("resize", updateStyle);
    }, []);

    return (
        <div className="card p-0" style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f8f9fa" }}>
                <img
                    src={imgSrc}
                    alt={title}
                    style={{
                        maxWidth: "100%",
                    }}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </li>
            </ul>
        </div>
    );
};

export default Card
