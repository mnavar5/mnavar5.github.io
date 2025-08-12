import React, { useEffect, useState } from "react";
import "./product.css";

const Product = ({ link, fallbackImg, alt }) => {
  const [previewImg, setPreviewImg] = useState(fallbackImg);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(
            link
          )}&screenshot=true&meta=false&embed=screenshot.url&clean=true&force=true`
        );
        if (!response.ok) throw new Error("Microlink API error");
        const data = await response.json();
        if (data.data && data.data.screenshot && data.data.screenshot.url) {
          setPreviewImg(data.data.screenshot.url);
        } else {
          setPreviewImg(fallbackImg);
        }
      } catch (error) {
        setPreviewImg(fallbackImg);
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [link, fallbackImg]);

  return (
    <div className="p" aria-label={`Preview of ${alt}`}>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        {loading ? (
          <div className="p-loading">Loading preview...</div>
        ) : (
          <img src={previewImg} alt={alt} className="p-img" />
        )}
      </a>
    </div>
  );
};

export default Product;
