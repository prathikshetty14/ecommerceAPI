const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// -------- MongoDB -------- //

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

  
db.on('error',(err) => {
    console.log('MongoDB connection error: ', err);
});

db.once('open', ()=>{
    console.log('Connected to the Database :: MongoDB');
})


// -------- Create new product -------- //

app.post('/products/create', async (req, res) => {
    try {
      const { name, quantity } = req.body;
      const product = new Product({ name, quantity });
      await product.save();
      res.json({ product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

  
// -------- Display all the products -------- //

app.get('/products', async (req, res) => {
try {
    const products = await Product.find();
    res.json({ products });
} catch (error) {
    res.status(500).json({ error: error.message });
}
});


// -------- Delete a product -------- //

app.delete('/products/:id', async(req,res) => {
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
});


// -------- Update a product -------- //

app.post('/products/:id/update_quantity', async (req,res) => {
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
})


// -------- Start the server -------- //

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

