# Profit Calculator Web App

## Overview

This web application was developed to provide a **simple and efficient way for small business owners to calculate potential profits** on a variety of products. The app allows users to:

- Enter the **business name**.
- Add multiple items with their **buy price, sell price, and quantity**.
- Generate a **detailed PDF report** showing:

  - Item name
  - Buy price
  - Sell price
  - Quantity
  - Total expenditure
  - Profit per item

- View **overall totals**, including total spending and total profit.

The app is especially useful for businesses dealing with **diverse inventory**, such as perfumes (men’s and women’s), makeup, and accessories like sunglasses, where prices and quantities can vary widely. It helps business owners quickly understand their potential gains and make informed decisions.

---

## Features

- **Dynamic item management**: Add multiple items with relevant details.
- **PDF generation**: Automatically create a professional PDF report summarizing all items and profits.
- **User-friendly interface**: Clean, intuitive design with input validation.
- **Responsive UI**: Works well on both desktop and mobile devices.
- **Interactive feedback**: Includes visual cues like character counters and button animations.

---

## Tech Stack

- **Frontend**: React.js
- **Styling**: SCSS (Sass)
- **PDF Generation**: jsPDF (manual table generation)
- **State Management**: React Hooks (`useState`)

---

## How It Works

1. The user enters their **business name**.
2. Items are added via a form with **name, buy price, sell price, and quantity**.
3. Once all items are added, the user can click **“Download PDF”**.
4. The app generates a **PDF report** with the itemized table and totals.
5. The report can be saved or shared for record-keeping or business planning.

---

## Installation & Setup

1. Clone the repository:

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser at `http://localhost:3000`.

---

## Usage

1. Enter your **business name** in the input field.
2. Click **“Add Item”** to input product details.
3. Repeat for all items in your inventory.
4. Click **“Download PDF”** to generate the report.

---
