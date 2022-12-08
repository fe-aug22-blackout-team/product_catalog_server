# product_catalog_server

GET /products/quantity - get the quantity of each category

GET /products/discount - get the best product discounts

GET /products/new - get the newest products

GET /products/parameters?model={}&capacity={}&color={} - get a product by its parameters

GET /products?category={phones | tablets | accessories}&sort={Newest | Cheapest | Alphabetically}&page={}&limit={} - get a sorted product page depending on the category

GET /products/:productId - get a product by id

GET /products/:productId/recommended - get recommended products by model
