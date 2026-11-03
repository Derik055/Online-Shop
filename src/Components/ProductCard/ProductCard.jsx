 
 function ProductCard({product}) {
    return(
        <a href={product.link} className="group flex flex-col">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-white shadow-md transition duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
              <img
                src={product.img}
                alt={product.name}
                className="block h-full w-full object-contain"
              />
            </div>

            <p className="font-['Nunito_Sans'] font-semibold mt-[8px] text-left text-[16px] text-[#000000]">
                {product.price}
            </p>
            <p className="font-['Nunito_Sans'] font-semibold mt-[2px] text-left text-[16px] text-[#000000]">
              {product.name}
            </p>
        </a>
    )

 }

export default ProductCard          