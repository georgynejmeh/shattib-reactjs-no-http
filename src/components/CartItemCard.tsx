import { AccentText, productImg, QuantityControls, redTrashIcon } from "..";

interface Props {
  numbered?: boolean;
  remove?: boolean;
}

const CartItemCard = ({ numbered, remove }: Props) => {
  return (
    <div className="flex items-center gap-12 my-8 max-lg:flex-col">
      {numbered ? <h1 className="text-2xl font-bold">1</h1> : null}
      <div className="flex justify-around items-center rounded-xl bg-gray-100 h-32 w-full max-lg:flex-col max-lg:gap-2 max-lg:p-2">
        <img className="rounded-xl h-28 w-20" src={productImg} alt="" />
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
          <h1 className="text-xl font-bold max-lg:text-base">طقم شطاف WG006</h1>
          <h2 className="text-xl font-bold text-gray-400 max-lg:text-base">
            طقم شطاف
          </h2>
        </div>
        <div className="w-32 max-lg:w-full max-lg:max-w-32">
          <QuantityControls />
        </div>
        <AccentText>200 ريال</AccentText>
        {remove ? (
          <button>
            <div className="flex gap-2">
              <img src={redTrashIcon} />
              <span className="text-red-500 font-bold">إزالة</span>
            </div>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CartItemCard;
