const getAllProducts = async (req, res) => {
  try {
    const products = [
      { id: 1, name: "phone", price: 3000 },
      { id: 2, name: "labtop", price: 4000 },
      { id: 3, name: "tablet", price: 2000 },
    ];
    res.json({ message: "every thing is fine", products: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getAllProducts };
