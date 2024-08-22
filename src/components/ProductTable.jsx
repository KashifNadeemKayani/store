import React from 'react';
import styles from './ProductTable.module.css';

const products = [
  {
    category: 'Rough Pages Registers',
    items: [
      { id: 1, name: 'Ring Register', description: '~180 pages', price: '350' },
      { id: 2, name: 'Ring Register', description: '~100 pages', price: '220' },
      { id: 3, name: 'Non-Ring Register', description: '~210 pages', price: '350 (Out Of Stock)' },
      { id: 4, name: 'Non-Ring Register', description: '~150 pages', price: '250' },
    ],
  },
  {
    category: 'Neat Pages Registers',
    items: [
      { id: 1, name: 'Ring Register', description: '5 Portions/Subjects', price: '400' },
      { id: 2, name: 'Ring Register', description: '6 Portions/Subjects', price: '450 (Out Of Stock)' },
    ],
  },
  {
    category: 'Ball/Pointers Pens',
    items: [
      { id: 1, name: 'Piano Ball Pen', description: 'Black, Blue, Green, Red', price: '20' },
      { id: 2, name: 'Signature Ball Pen', description: 'Black, Blue', price: '20' },
      { id: 3, name: 'Dollar Ball Pen', description: 'Black, Blue', price: '30' },
      { id: 4, name: 'Dollar Pointer', description: 'Blue, Black, Turquoise', price: '30' },
      { id: 5, name: 'Dollar Gel Pen', description: 'Blue, Black', price: '70' },
      { id: 6, name: 'Dollar Pointer', description: '10 diff: colors pack', price: '300' },
    ],
  },
  {
    category: 'Pages / Sheets',
    items: [
      { id: 1, name: 'A4 Size Paper', description: '70 GSM / White', price: '4' },
      { id: 2, name: 'Legal Size Paper', description: '70 GSM / White', price: '6' },
      { id: 3, name: 'Narrow Line Sheets', description: 'Base/Medium/Neat', price: '60 / 110 / 140' },
    ],
  },
  {
    category: 'Markers / Highlighters',
    items: [
      { id: 1, name: 'Dollar Marker', description: 'Black, Blue, Green', price: '20' },
      { id: 2, name: 'Piano Marker', description: 'Black, Blue', price: '20' },
      { id: 3, name: 'Cut Marker', description: 'Black, Blue', price: '15' },
      { id: 4, name: 'Dollar Neon Highlighter', description: 'Yellow, Pink', price: '50' },
    ],
  },
  {
    category: 'Tapes',
    items: [
      { id: 1, name: 'OSAKA Tape', description: 'White / 10-gazz', price: '70' },
      { id: 2, name: 'Transparent Tape', description: 'Thickness: 1 inch', price: '150' },
      { id: 3, name: 'Transparent Tape', description: 'Thickness: 2 inch', price: '250' },
      { id: 4, name: 'Transparent Tape', description: 'Thickness: 0.75 inch / 30 yards', price: '40' },
    ],
  },
  {
    category: 'Plastic Files',
    items: [
      { id: 1, name: 'Button File', description: 'Color: Green', price: '40' },
      { id: 2, name: 'Assignment File', description: 'Stick files', price: '40' },
    ],
  },
  {
    category: 'Rulers',
    items: [
      { id: 1, name: 'Plastic Ruler', description: '15/20/30 cm', price: '30/50/60' },
      { id: 2, name: 'Stainless Steel Ruler', description: '30 cm (High Quality)', price: '120' },
    ],
  },
  {
    category: 'Drawing Related',
    items: [
      { id: 1, name: 'Pencil', description: 'Dollar', price: '20' },
      { id: 2, name: 'Eraser', description: 'White', price: '15' },
      { id: 3, name: 'Sharpener', description: 'Dux High Quality', price: '20' },
    ],
  },
  {
    category: 'Calculators',
    items: [
      { id: 1, name: 'Casio 555 Functions Calculator', description: 'fx-991EX', price: '2500' },
      { id: 2, name: 'Casio 552 Functions Calculator', description: 'fx-991EX', price: '2400' },
      { id: 3, name: 'Casio 417 Functions Calculator', description: 'fx-991ES', price: '1650' },
    ],
  },
  {
    category: 'Sports',
    items: [
      { id: 1, name: 'Cricket Ball', description: 'FG Company', price: '420' },
      { id: 2, name: 'Table Tennis Ball', description: 'Double circle', price: '80' },
      { id: 3, name: 'Badminton Shuttle', description: 'Ghafoor Champion', price: '350' },
    ],
  },
  {
    category: 'Others',
    items: [
      { id: 1, name: 'Correction Pen', description: '(Whito)', price: '60' },
      { id: 2, name: 'Sticky Notes', description: '3x3 inch, 100 pcs, (Multicolor)', price: '100' },
      { id: 3, name: 'NOTE PAD', description: 'High Quality / Size: A6', price: '70' },
      { id: 4, name: 'Paper Cutter', description: 'Normal Quality', price: '180' },
      { id: 5, name: 'Scissor', description: 'Normal Quality', price: '60' },
      { id: 6, name: 'Glue Stick', description: 'Company: Nafees', price: '70' },
      { id: 7, name: 'Elfy', description: 'GMSA', price: '30' },
      { id: 8, name: 'Metallic Pen Holder', description: 'High Quality', price: '400' },
    ],
  },
];


function ProductTable() {
  // Function to extract numeric price from a string
  const extractPrice = (price) => {
    const numericPrice = price.split(' ')[0]; // Split by space and take the first part (numeric)
    return numericPrice;
  };

  // Function to generate WhatsApp URL
  const generateWhatsAppLink = (name, price) => {
    const numericPrice = extractPrice(price);
    const message = `I want to buy ${name} with price ${numericPrice} PKR`;
    return `https://wa.me/+923105688796?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={styles.tableContainer}>
      {products.map((category, index) => (
        <div key={index}>
          <h2 className={styles.heading}>{category.category}</h2> {/* Apply the heading style */}
          <table className={`table table-striped ${styles.table}`}>
            <thead>
              <tr>
                <th>S/No</th>
                <th>Items</th>
                <th>Description</th>
                <th>Price in Rupees</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <a
                      href={generateWhatsAppLink(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btn} // Apply button styles
                    >
                      Buy
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default ProductTable;
