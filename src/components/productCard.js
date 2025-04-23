import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/${product.id}`}>
      <div className="bg-white hover:shadow-xl duration-300 border border-gray-300 cursor-pointer">
        <Image
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          width={300}
          height={300}
          priority
          className="w-full h-64 rounded-t-lg"
        />

        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-xl font-semibold mt-1 text-[#f85606] flex items-center">
              <span className="text-xl">৳</span>
              {product.price - Number(product.discount_amount)}
            </p>
            <del className="text-[1rem] font-normal mt-1 text-gray-500 ">
              ${product.price}
            </del>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
