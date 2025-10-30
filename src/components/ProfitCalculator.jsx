import React, { useState } from "react";
import "./ProfitCalculator.scss";
import ExportPDF from "./ExportPDF";

export default function ProfitCalculator() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [profit, setProfit] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    buy: "",
    sell: "",
    quantity: 1,
  });

  const handleAddItem = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    const newItem = { ...formData, id: Date.now() };
    setItems([...items, newItem]);
    setFormData({ name: "", buy: "", sell: "", quantity: 1 });
    setShowModal(false);
  };

  const calculateProfit = () => {
    setCalculating(true);
    setProfit(null);

    // Simulate delay for calculation
    setTimeout(() => {
      const totalCost = items.reduce(
        (acc, item) => acc + Number(item.buy) * Number(item.quantity),
        0
      );
      const totalRevenue = items.reduce(
        (acc, item) => acc + Number(item.sell) * Number(item.quantity),
        0
      );
      const totalProfit = totalRevenue - totalCost;

      setProfit({
        totalCost,
        totalRevenue,
        totalProfit,
      });
      setCalculating(false);
    }, 2500);
  };

  return (
    <div className="profit-calculator">
      <h2>Profit Calculator</h2>

      {items.length === 0 ? (
        <p className="empty">No items yet. Click “Add Item” to begin.</p>
      ) : (
        <table className="items-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>R{item.buy}</td>
                <td>R{item.sell}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="buttons">
        <button className="add-btn" onClick={handleAddItem}>
          + Add Item
        </button>

        {items.length > 0 && (
          <button className="calc-btn" onClick={calculateProfit}>
            Calculate Profit
          </button>
        )}
      </div>

      {/* Calculating Animation */}
      {calculating && (
        <div className="loading-section">
          <div className="spinner"></div>
          <p className="calculating">
            Calculating<span className="dots">...</span>
          </p>
        </div>
      )}

      {/* Profit Results */}
      {profit && (
        <div className="results">
          <p>Total Cost: R{profit.totalCost}</p>
          <p>Total Revenue: R{profit.totalRevenue}</p>
          <p>
            <strong>
              Profit:{" "}
              <span
                className={
                  profit.totalProfit >= 0
                    ? "profit-positive"
                    : "profit-negative"
                }
              >
                R{profit.totalProfit}
              </span>
            </strong>
          </p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add Item</h3>
            <input
              type="text"
              placeholder="Item name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Buy price"
              value={formData.buy}
              onChange={(e) =>
                setFormData({ ...formData, buy: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Sell price"
              value={formData.sell}
              onChange={(e) =>
                setFormData({ ...formData, sell: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />
            <button className="submit-btn" onClick={handleSubmit}>
              Add to List
            </button>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
      <ExportPDF items={items} />
    </div>
  );
}
