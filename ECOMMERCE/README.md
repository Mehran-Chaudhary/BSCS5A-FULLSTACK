# TechStore - React E-Commerce UI 🛒

A modern, fully-featured e-commerce store UI built with **React + Vite + Tailwind CSS**. This project demonstrates advanced component architecture, state management, routing, and professional UI/UX design.

## 🎯 Project Overview

This is a comprehensive lab task showcasing a complete e-commerce application UI. The project demonstrates **React components with props**, **React Router for navigation**, **state management**, and **modern UI patterns** including shopping cart functionality, product filtering, and checkout flow.

## ✨ Features

### Core Functionality

- **Product Catalog**: Browse 24+ tech products with high-quality images
- **Advanced Filtering**: Filter by category, price range, and stock availability
- **Search Functionality**: Real-time search across product names and categories
- **Product Details**: Detailed product pages with features and specifications
- **Shopping Cart**: Add/remove items, adjust quantities, persistent storage
- **Checkout Flow**: Complete multi-step checkout with form validation
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### UI/UX Features

- **Smooth Animations**: Framer Motion animations throughout
- **Glassmorphism Effects**: Modern translucent design elements
- **Micro-interactions**: Button hover effects, transitions, loading states
- **Toast Notifications**: Success messages for user actions
- **Empty States**: Elegant handling of empty cart/search results
- **Loading Skeletons**: Smooth loading experience

### Technical Features

- **Component Props**: Extensive use of props for data flow
- **React Router**: Multi-page navigation with nested routes
- **Local Storage**: Cart persistence across sessions
- **State Management**: Centralized cart and filter state
- **Tailwind CSS**: Utility-first styling for rapid development
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router v6** - Client-side routing
- **React Icons** - Icon library

## 📁 Project Structure

```
ECOMMERCE/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation with search & cart count
│   │   ├── ProductCard.jsx         # Individual product display
│   │   ├── ProductGrid.jsx         # Product listing grid
│   │   ├── Hero.jsx                # Homepage hero section
│   │   ├── FilterSidebar.jsx       # Category & price filters
│   │   ├── CartItem.jsx            # Cart item with quantity controls
│   │   └── Footer.jsx              # Site footer
│   ├── pages/
│   │   ├── Home.jsx                # Homepage with featured products
│   │   ├── Products.jsx            # All products with filters
│   │   ├── ProductDetail.jsx       # Individual product page
│   │   ├── Cart.jsx                # Shopping cart page
│   │   └── Checkout.jsx            # Checkout form & summary
│   ├── data/
│   │   └── products.js             # Mock product data (24 products)
│   ├── App.jsx                     # Main app with routing & state
│   └── main.jsx                    # Entry point
```

## 🎨 Component Props Examples

### Navbar Component

```jsx
<Navbar
  cartCount={5}
  searchQuery="laptop"
  onSearchChange={(query) => setSearchQuery(query)}
/>
```

### ProductCard Component

```jsx
<ProductCard
  product={{
    id: 1,
    name: 'MacBook Pro 16"',
    price: 3499,
    image: "...",
    rating: 4.9,
    inStock: true,
    featured: true,
  }}
  onAddToCart={(product) => handleAddToCart(product)}
  index={0}
/>
```

### FilterSidebar Component

```jsx
<FilterSidebar
  categories={["All Products", "Laptops", "Smartphones"]}
  selectedCategory="Laptops"
  onCategoryChange={(cat) => setCategory(cat)}
  priceRange={2000}
  onPriceChange={(price) => setPriceRange(price)}
  showInStock={true}
  onStockChange={(inStock) => setShowInStock(inStock)}
/>
```

### CartItem Component

```jsx
<CartItem
  item={{
    id: 1,
    name: "MacBook Pro",
    price: 3499,
    quantity: 2,
    image: "...",
  }}
  onUpdateQuantity={(id, qty) => handleUpdateQuantity(id, qty)}
  onRemove={(id) => handleRemove(id)}
/>
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to project directory:

```bash
cd ECOMMERCE
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## 🎯 Features Breakdown

### 1. Homepage (`/`)

- Hero section with animated gradient background
- Feature cards (Free Shipping, Secure Payment, 24/7 Support, Easy Returns)
- Featured products grid
- Call-to-action sections

### 2. Products Page (`/products`)

- Full product catalog (24 products)
- Left sidebar with filters:
  - Category selection (11 categories)
  - Price range slider ($0-$4000)
  - Stock availability toggle
- Responsive grid layout (1-4 columns based on screen size)
- Real-time search integration
- Mobile-friendly filter drawer

### 3. Product Detail Page (`/product/:id`)

- Large product image
- Product information (name, category, rating, reviews)
- Detailed description
- Key features list
- Quantity selector
- Add to cart button
- Stock status indicator
- Success notification on add to cart

### 4. Cart Page (`/cart`)

- List of cart items with images
- Quantity controls (increase/decrease)
- Remove item functionality
- Order summary sidebar:
  - Subtotal calculation
  - Tax (10%)
  - Shipping (free over $100)
  - Total amount
- Empty cart state
- Continue shopping link
- Proceed to checkout button

### 5. Checkout Page (`/checkout`)

- Shipping information form
- Payment details form
- Order summary with cart items
- Form validation
- Order confirmation animation
- Secure payment indicators

## 🎨 Design System

### Color Palette

- **Primary**: Blue-600 to Purple-600 gradient
- **Secondary**: Orange-500 to Red-500
- **Success**: Green-500
- **Neutral**: Gray scale (50-900)

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Scale**: Tailwind's default type scale

### Animations

- **Page Transitions**: Fade and slide animations
- **Hover Effects**: Scale, lift, and glow effects
- **Loading States**: Skeleton screens and spinners
- **Micro-interactions**: Button presses, card hovers

## 📊 Product Data

24 high-quality tech products across multiple categories:

- **Laptops** (4): MacBook Pro, Dell XPS, ASUS ROG, Microsoft Surface
- **Smartphones** (3): iPhone 15 Pro, Galaxy S24 Ultra, Pixel 8 Pro
- **Audio** (3): Sony WH-1000XM5, AirPods Pro, Bose QuietComfort
- **Gaming** (2): Nintendo Switch, PlayStation 5
- **Monitors** (2): LG UltraGear, Samsung Odyssey
- **Accessories** (5): Mouse, Keyboard, Cables, Power Banks
- **Cameras** (2): Sony A7 IV, GoPro HERO12
- **Drones** (1): DJI Mini 4 Pro
- **Wearables** (1): Apple Watch Ultra 2
- **Tablets** (2): iPad Pro, Galaxy Tab S9

## 🎓 Learning Outcomes

This project demonstrates:

1. ✅ **Advanced Component Architecture**: Reusable, composable components
2. ✅ **Props & State Management**: Proper data flow and state handling
3. ✅ **React Router**: Multi-page navigation with dynamic routes
4. ✅ **Local Storage**: Data persistence for shopping cart
5. ✅ **Tailwind CSS**: Utility-first styling approach
6. ✅ **Framer Motion**: Professional animations and transitions
7. ✅ **Form Handling**: Controlled components and validation
8. ✅ **Responsive Design**: Mobile-first development approach
9. ✅ **UI/UX Best Practices**: Loading states, empty states, feedback
10. ✅ **Code Organization**: Clean file structure and separation of concerns

## 🌐 Routing Structure

- `/` - Homepage
- `/products` - All products with filters
- `/product/:id` - Individual product details
- `/cart` - Shopping cart
- `/checkout` - Checkout process

## 💾 State Management

The app uses React's built-in state management:

- **Cart State**: Stored in `App.jsx`, persisted to localStorage
- **Filter State**: Local state in `Products.jsx`
- **Search State**: Global state passed via props
- **Form State**: Local state in `Checkout.jsx`

## 🎯 Performance Optimizations

- Code splitting with React.lazy (future enhancement)
- Image optimization with lazy loading
- Tailwind CSS purging for smaller bundle size
- Vite's fast HMR for development
- Production builds with minification

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 👨‍💻 Author

**Mehran Akhtar**

- Email: mehran.dev.au@gmail.com
- GitHub: github.com/mehran-chaudhary
- University: Air University, Islamabad
- Program: BSCS 5th Semester

## 📄 License

This project is part of academic coursework for Full Stack Web Development course at Air University, Islamabad.

---

**Built with React ⚛️ • Styled with Tailwind CSS 🎨 • Animated with Framer Motion ✨**
