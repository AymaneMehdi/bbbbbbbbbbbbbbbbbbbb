const express = require ('express');
const { createCategory, getAllCategories, updateCategory, deleteCategory } = require('../controllers/categoriesController');

const router = express.Router();

//routes 
router.post('/', createCategory);
router.get('/', getAllCategories);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;