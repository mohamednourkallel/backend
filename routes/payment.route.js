const express=require('express');
const router = express.Router();
const stripe = require ('stripe');
const Stripe =
stripe('sk_test_51NnLr4IvBJgKuqDlUHXu48bYinc7DRGYOuSNtHr70geq5aIALdeh6FaxK4nQqchXDX8GUO20PoCBCD4n68UleCfN00jtsqAMM5');
router.post('/', async (req, res) => {
    let status, error;
    const { token, amount } = req.body;
    try {
    await Stripe.charges.create({
    source: token.id,
    amount,
    currency: 'usd',
    });
    
    status = 'success';
    } catch (error) {
    console.log(error);
    status = 'Failure';
    }
    res.json({ error, status });
    });
    module.exports = router;