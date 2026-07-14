"use client";

import { useState } from "react";
import styles from "./HubShared.module.css";
import Image from "next/image";

const MOCK_PRODUCTS = [
  { id: 1, name: "Premium Cat Tree", category: "Cat", price: 145, image: "/images/retail.webp", variants: ["Oak", "Walnut"] },
  { id: 2, name: "Organic Bird Seed Blend", category: "Bird", price: 22, image: "/images/retail.webp", variants: ["1 lb", "3 lbs"] },
  { id: 3, name: "Ceramic Water Fountain", category: "Pet", price: 85, image: "/images/retail.webp", variants: ["White", "Charcoal"] }
];

export default function RetailHub() {
  const [view, setView] = useState("catalog"); // catalog, cart, checkout, orders
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cat", "Bird", "Pet"];

  const addToCart = (product, variant) => {
    setCart([...cart, { ...product, selectedVariant: variant, cartId: Math.random() }]);
    alert(`${product.name} added to cart!`);
  };

  const cancelOrder = (orderId) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: "Cancelled" } : o));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const newOrder = {
      id: `ORD-${Math.floor(Math.random() * 10000)}`,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      status: "Processing",
      date: new Date().toLocaleDateString()
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
    setView("orders");
  };

  if (view === "cart") {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Cart</h2>
          <button className={styles.buttonOutline} onClick={() => setView("catalog")}>← Back to Catalog</button>
        </div>
        
        {cart.length === 0 ? (
          <div className={styles.emptyState}>Cart is empty</div>
        ) : (
          <div className={styles.grid}>
            <div style={{ gridColumn: "1 / -1" }}>
              {cart.map((item) => (
                <div key={item.cartId} className={styles.cartRow}>
                  <span>{item.name} ({item.selectedVariant})</span>
                  <span>${item.price}</span>
                </div>
              ))}
              <div className={styles.summaryBox} style={{ marginTop: "2rem" }}>
                <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</h3>
                <button className={styles.button} style={{ marginTop: "1rem", width: "100%" }} onClick={() => setView("checkout")}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (view === "checkout") {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Checkout</h2>
          <button className={styles.buttonOutline} onClick={() => setView("cart")}>← Back to Cart</button>
        </div>

        <form className={styles.form} onSubmit={handleCheckout}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Delivery Slot</label>
            <select className={styles.select} required>
              <option value="">Select a slot...</option>
              <option value="morning">Tomorrow Morning (9AM - 12PM)</option>
              <option value="afternoon">Tomorrow Afternoon (1PM - 5PM)</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Card Number (Mock Payment)</label>
            <input className={styles.input} type="text" placeholder="**** **** **** ****" required />
          </div>
          <button type="submit" className={styles.button}>Pay ${cart.reduce((sum, item) => sum + item.price, 0)}</button>
        </form>
      </div>
    );
  }

  if (view === "orders") {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Order Management</h2>
          <button className={styles.buttonOutline} onClick={() => setView("catalog")}>← Back to Catalog</button>
        </div>

        {orders.length === 0 ? (
          <div className={styles.emptyState}>No orders found</div>
        ) : (
          <div className={styles.grid}>
            {orders.map(order => (
              <div key={order.id} className={styles.card}>
                <h3 className={styles.cardTitle}>Order #{order.id}</h3>
                <p className={styles.subtitle}>Date: {order.date}</p>
                <p className={styles.subtitle}>Total: ${order.total}</p>
                <p style={{ marginTop: "1rem", color: order.status === "Cancelled" ? "red" : "green" }}>
                  Status: {order.status}
                </p>
                {order.status !== "Cancelled" && (
                  <button className={styles.buttonOutline} style={{ marginTop: "1rem", borderColor: "red", color: "red" }} onClick={() => cancelOrder(order.id)}>
                    Cancel Order
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // DEFAULT: Catalog View
  const filteredProducts = selectedCategory === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className={styles.container}>
      <div className={styles.header} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <h2 className={styles.title}>Curated Retail</h2>
          <p className={styles.subtitle}>Exclusive lifestyle artifacts for the modern pet.</p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className={styles.buttonOutline} onClick={() => setView("orders")}>My Orders</button>
          <button className={styles.button} onClick={() => setView("cart")}>Cart ({cart.length})</button>
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        {categories.map(cat => (
          <button 
            key={cat} 
            className={cat === selectedCategory ? styles.button : styles.buttonOutline}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate up to 10 degrees based on distance from center
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      zIndex: 10
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      zIndex: 1
    });
  };

  return (
    <div 
      className={styles.card} 
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardImage}>
        <Image src={product.image} alt={product.name} fill style={{objectFit:"cover"}} />
      </div>
      <h3 className={styles.cardTitle}>{product.name}</h3>
      <p className={styles.cardPrice}>${product.price}</p>
      
      <select 
        className={styles.select} 
        style={{ marginBottom: "1rem" }}
        value={selectedVariant}
        onChange={(e) => setSelectedVariant(e.target.value)}
      >
        {product.variants.map(v => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
      
      <button className={styles.button} onClick={() => onAdd(product, selectedVariant)}>
        Add to Cart
      </button>
    </div>
  );
}
