const Product = require('../../../models/product')

// -------- Create new product -------- //

module.exports.create = async (req, res) => {
    try {
      const { name, quantity } = req.body;
      const product = new Product({ name, quantity });
      await product.save();
      res.json({ product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

  
// -------- Display all the products -------- //

module.exports.display = async (req, res) => {
try {
    const products = await Product.find();
    res.json({ products });
} catch (error) {
    res.status(500).json({ error: error.message });
}
};


// -------- Delete a product -------- //

module.exports.delete = async(req,res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        res.json({message: 'Product Deleted'})

        if(!product){
            return res.status(404).json({message: 'Product not found!'})
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// -------- Update a product -------- //

module.exports.update = async (req,res) => {
    try {
        const productId = req.params.id;
        const { number } = req.query;
        const product = await Product.findById(productId);

        if(!product){
            return res.status(404).json({message: 'Product not found!'});
        }

        product.quantity += parseInt(number, 10);

        if(product.quantity <= 0){
            await Product.findByIdAndDelete(productId);
            return res.json({message: 'Product deleted due to insufficient quantity'})
        } else {
            await product.save();

            res.json({
                product: {
                    id: product._id,
                    name: product.name,
                    quantity: product.quantity,

                }, message: 'Quantity updated successfully!'
            });
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}