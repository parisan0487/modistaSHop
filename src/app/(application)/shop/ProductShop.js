'use client'
import { useState } from 'react';
import React from 'react';


const products = [
  {
    id: 1,
    title: ' کیف وزشی مدل مارتن',
    images: [
      '/assets/images/bag-1.jpg',
      '/assets/images/bag-2.jpg',
      '/assets/images/bag-3.jpg',
      '/assets/images/bag-2.jpg',
      '/assets/images/pic3.jpg',
    ],
    finalPrice: 697000,
    size: 'xl',
    color: 'مشکی',
  },
  {
    id: 2,
    title: ' ست بلوز و شلوار زنانه',
    images: [
      '/assets/images/bloz-1.jpg',
      '/assets/images/bloz-2.jpg',
      '/assets/images/bloz-3.jpg',
      '/assets/images/bloz-4.jpg',
      '/assets/images/bloz-1.jpg',
    ],
    price: 2150000,
    discount: '10%',
    finalPrice: 1935000,
    size: 'xl',
    color: 'مشکی',
  },
  {
    id: 3,
    title: 'کاپشن زنانه مدل کاد',
    images: [
      '/assets/images/capshan-1.jpg',
      '/assets/images/capshan-2.jpg',
      '/assets/images/capshan-3.jpg',
      '/assets/images/capshan-4.jpg',
      '/assets/images/capshan-5.jpg',
    ],
    price: 1790000,
    discount: '20%',
    finalPrice: 1432000,
    size: '2xl',
    color: 'قرمز',
  },
  {
    id: 4,
    title: 'کاپشن زمستانی مدل تالای',
    images: [
      '/assets/images/talay-3.jpg',
      '/assets/images/talay-2.jpg',
      '/assets/images/talay-1.jpg',
      '/assets/images/talay-4.jpg',
      '/assets/images/talay-1.jpg',
    ],
    price: 950000,
    discount: '25%',
    finalPrice: 712000,
    size: 'md',
    color: 'ابی',
  },
  {
    id: 5,
    title: 'کفش ورزشی  ',
    images: [
      '/assets/images/shoe-4.webp',
      '/assets/images/shoe-2.jpg',
      '/assets/images/shoe-1.jpg',
      '/assets/images/shoe-3.jpg',
      '/assets/images/shoe-5.jpg',
    ],
    price: 1240000,
    discount: '5%',
    finalPrice: 1178000,
    size: 'sm',
    color: 'سفید',
  },
  {
    id: 6,
    title: ' کش باف زنانه ',
    images: '/assets/images/s.jpg',
    price: 1100000,
    discount: '5%',
    finalPrice: 1178000,
    size: 'md',
    color: 'زرد',
  },
  {
    id: 7,
    title: ' شلوار راحتی ',
    images: '/assets/images/s1.jpg',
    price: 1100000,
    discount: '5%',
    finalPrice: 1178000,
    size: 'lg',
    color: 'ابی',
  },
  {
    id: 8,
    title: ' پیراهن مردانه',
    images: '/assets/images/s2.jpg',
    price: 904000,
    discount: '12%',
    finalPrice: 812000,
    size: 'xl',
    color: 'آبی',
  },
  {
    id: 9,
    title: ' شلوار راتی بچه گانه',
    images: '/assets/images/s3.jpg',
    price: 730000,
    discount: '18%',
    finalPrice: 530000,
    size: 's',
    color: 'سبز',
  },
  {
    id: 10,
    title: ' لباس',
    images: '/assets/images/s4.png',
    price: 100000,
    discount: '1%',
    finalPrice: 99000,
    size: 'm',
    color: 'قرمز',
  },
  {
    id: 11,
    title: ' لباس مردانه ',
    images: '/assets/images/s5.png',
    price: 560000,
    discount: '7%',
    finalPrice: 500000,
    size: 'xl',
    color: 'خاکستری',
  },
  {
    id: 12,
    title: ' کش باف زنانه ',
    images: '/assets/images/s6.jpg',
    price: 750000,
    discount: '25%',
    finalPrice: 490000,
    size: 'lg',
    color: 'مشکی',
  },
  {
    id: 13,
    title: ' لباس',
    images: '/assets/images/s7.png',
    price: 750000,
    discount: '25%',
    finalPrice: 750000,
    size: 'm',
    color: ' سبز',
  },
  {
    id: 14,
    title: ' ژاکت زنانه ',
    images: '/assets/images/s8.jpg',
    price: 320000,
    discount: '19%',
    finalPrice: 270000,
    size: 'md',
    color: ' زرد',
  },
  {
    id: 15,
    title: ' کاپشن بادی',
    images: '/assets/images/s9.png',
    price: 440000,
    discount: '17%',
    finalPrice: 310000,
    size: 'lg',
    color: 'سفید',
  },
  {
    id: 16,
    title: ' پیراهن مردانه',
    images: '/assets/images/s10.jpg',
    price: 1100000,
    discount: '5%',
    finalPrice: 1178000,
    size: 'xl',
    color: 'سبز ',
  },
  {
    id: 17,
    title: ' کش باف زنانه ',
    images: '/assets/images/s.jpg',
    price: 1100000,
    discount: '5%',
    finalPrice: 1178000,
    size: 'md',
    color: ' قرمز',
  },
  {
    id: 18,
    title: ' لباس پشمی',
    images: '/assets/images/s11.jpg',
    price: 1100000,
    discount: '11%',
    finalPrice: 1000000,
    size: '2xl',
    color: 'ابی',
  },
  {
    id: 19,
    title: ' مانتور زنانه',
    images: '/assets/images/s12.jpg',
    price: 770000,
    discount: '14%',
    finalPrice: 600000,
    size: 'lg',
    color: ' ابی',
  },
  {
    id: 20,
    title: ' هودی زنانه و مردانه',
    images: '/assets/images/s13.png',
    price: 970000,
    discount: '33%',
    finalPrice: 600000,
    size: 'xl',
    color: 'سفید',
  },
  {
    id: 21,
    title: '  سر همی بچگانه ',
    images: '/assets/images/s14.jpg',
    price: 330000,
    discount: '14%',
    finalPrice: 279000,
    size: 'xs',
    color: 'سفید',
  },
  {
    id: 22,
    title: 'هودی بچه گانه ',
    images: '/assets/images/s16.jpg',
    price: 42000,
    discount: '4%',
    finalPrice: 395000,
    size: 's',
    color: 'سبز',
  },
  {
    id: 23,
    title: ' لباس بچه گانه',
    images: '/assets/images/s17.jpg',
    finalPrice: 30000,
    size: 'xs',
    color: ' سفید',
  },
  {
    id: 24,
    title: '  ژاکت یقه گرد',
    images: '/assets/images/s18.jpg',
    finalPrice: 600000,
    size: 'm',
    color: 'مشکی',
  },
];

function ProductShop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [activeImages, setActiveImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); 

  const availableColors = ['سبز', 'سفید', 'مشکی', 'ابی', 'قرمز', 'زرد'];
  const availableSizes = ['xs', 's', 'm', 'md', 'lg', 'xl', '2xl'];

  const toggleSelection = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
    setCurrentPage(1);
  };

  const normalizeColor = (color) => color?.replace(/\s/g, '');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchQuery
      ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesColor =
      selectedColors.length > 0
        ? selectedColors.includes(normalizeColor(product.color))
        : true;

    const matchesSize =
      selectedSizes.length > 0 ? selectedSizes.includes(product.size) : true;

    return matchesSearch && matchesColor && matchesSize;
  });

  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleThumbnailClick = (productId, imgSrc) => {
    setActiveImages((prev) => ({
      ...prev,
      [productId]: imgSrc,
    }));
  };

  const colorMap = {
    'قرمز': '#f87171',
    'سبز': '#4ade80',
    'مشکی': '#000000',
    'سفید': '#ffffff',
    'ابی': '#60a5fa',
    'زرد': '#fde047',
  };

  return (
    <div className="flex flex-col md:flex-row px-4 py-6 gap-6 min-w-screen">

      <div className="block md:hidden px-2 mb-4">
        <input
          type="text"
          placeholder="جست و جو کنید"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full bg-gray-200 px-4 py-3 mb-2 rounded-lg text-right"
        />
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md w-36"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          {isMobileFilterOpen ? 'بستن فیلترها' : 'نمایش فیلترها'}
        </button>

        {isMobileFilterOpen && (
          <div className="bg-gray-100 mt-4 p-4 rounded-lg space-y-4">
            <div>
              <p className="text-center text-gray-700 font-bold border-b pb-1 mb-2">فیلتر بر اساس رنگ</p>
              <div className="flex flex-wrap gap-2 justify-end">
                {availableColors.map((color) => {
                  const isSelected = selectedColors.includes(color);
                  return (
                    <button
                      key={color}
                      onClick={() =>
                        toggleSelection(color, selectedColors, setSelectedColors)
                      }
                      className={`w-8 h-8 rounded-full border-2 ${isSelected ? 'border-orange-500' : 'border-gray-400'}`}
                      style={{ backgroundColor: colorMap[color] }}
                    />
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-center text-gray-700 font-bold border-b pb-1 mb-2">فیلتر بر اساس سایز</p>
              <div className="flex flex-wrap gap-2 justify-end">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 rounded-full text-sm border ${selectedSizes.includes(size)
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                      }`}
                    onClick={() =>
                      toggleSelection(size, selectedSizes, setSelectedSizes)
                    }
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full md:w-4/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {paginatedProducts.map((product) => {
            const imagesArray = Array.isArray(product.images)
              ? product.images
              : [product.images];
            const mainImage = activeImages[product.id] || imagesArray[0];

            return (
              <div
                key={product.id}
                className="rounded-xl p-3 bg-gray-100 shadow-lg flex flex-col gap-2"
              >
                <div className="w-full h-52 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={mainImage}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-1 mt-1">
                  {imagesArray.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`thumb-${i}`}
                      className={`w-10 h-10 rounded-md object-cover cursor-pointer border ${mainImage === img
                        ? 'border-orange-500'
                        : 'border-transparent'
                        }`}
                      onClick={() => handleThumbnailClick(product.id, img)}
                    />
                  ))}
                </div>

                <h2 className="text-center font-medium text-gray-800">
                  {product.title}
                </h2>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                  {product.price && (
                    <p className="line-through">{product.price.toLocaleString()}</p>
                  )}
                  {product.discount && (
                    <span className="text-white text-xs bg-orange-500 px-2 py-1 rounded-md">
                      {product.discount}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex">
                    <span className="text-black font-bold text-lg">
                      {product.finalPrice.toLocaleString()}
                    </span>
                    <p className="text-gray-400 text-sm ml-1">تومان</p>
                  </div>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="34" viewBox="0 0 25 24" fill="none" class="stroke-white group-hover:stroke-[#fff]">
                  <path d="M20 9.5L19.2896 6.89465C19.0157 5.89005 18.8787 5.38775 18.5978 5.00946C18.318 4.63273 17.9378 4.34234 17.5008 4.17152C17.0619 4 16.5413 4 15.5 4M5 9.5L5.7104 6.89465C5.98432 5.89005 6.12128 5.38775 6.40221 5.00946C6.68199 4.63273 7.06216 4.34234 7.49922 4.17152C7.93808 4 8.45872 4 9.5 4" stroke-width="1.5">
                    </path>
                    <path d="M9.5 4C9.5 3.44772 9.94772 3 10.5 3H14.5C15.0523 3 15.5 3.44772 15.5 4C15.5 4.55228 15.0523 5 14.5 5H10.5C9.94772 5 9.5 4.55228 9.5 4Z" stroke-width="1.5"></path><path d="M8.5 13V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 13V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5 13V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.36425 16.4552C4.90992 18.6379 5.18275 19.7292 5.99654 20.3646C6.81032 21 7.93525 21 10.1851 21H14.8158C17.0656 21 18.1906 21 19.0044 20.3646C19.8181 19.7292 20.091 18.6379 20.6366 16.4552C21.4946 13.0234 21.9236 11.3075 21.0227 10.1538C20.1219 9 18.3532 9 14.8158 9H10.1851C6.64769 9 4.87899 9 3.97816 10.1538C3.44937 10.831 3.37879 11.702 3.58422 13" stroke-width="1.5" stroke-linecap="round"></path></svg>

                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md text-sm border transition-all ${currentPage === page
                  ? 'bg-black text-white border-black'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full md:w-3/12 hidden md:block">
        <div className="space-y-2 pb-4">
          <input
            type="text"
            placeholder="جست و جو کنید"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-gray-200 px-4 p-4 rounded-lg text-right"
          />
        </div>

        <div className="bg-gray-200 p-5 pb-4 rounded-2xl">
          <p className="text-lg font-bold text-center mb-4 text-gray-600 border-b">فیلتر بر اساس رنگ</p>
          <div className="flex flex-wrap gap-3 justify-end">
            {availableColors.map((color) => {
              const isSelected = selectedColors.includes(color);
              return (
                <button
                  key={color}
                  onClick={() =>
                    toggleSelection(color, selectedColors, setSelectedColors)
                  }
                  className={`w-8 h-8 rounded-full border-2 ${isSelected ? 'border-orange-500' : 'border-gray-400'}`}
                  style={{ backgroundColor: colorMap[color] }}
                />
              );
            })}
          </div>
        </div>

        <div className="bg-gray-200 p-5 pb-4 mt-5 rounded-2xl">
          <h3 className="text-lg font-bold text-center mb-4 border-b text-gray-600">فیلتر بر اساس سایز</h3>
          <div className="flex flex-wrap gap-2 justify-end">
            {availableSizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 rounded-full text-sm border ${selectedSizes.includes(size)
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                onClick={() =>
                  toggleSelection(size, selectedSizes, setSelectedSizes)
                }
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductShop;