import { Button, priceSlider } from "..";

const CategoryFilterCard = () => {
  return (
    <div className="m-4 mx-8 p-8 gap-4 flex flex-col rounded-xl border-4 w-fit h-fit max-lg:w-full max-lg:max-w-72 max-lg:m-0">
      <h1 className="text-2xl">الفلترة</h1>
      <hr />
      <h1 className="text-2xl">التصنيف</h1>
      <div>
        <h2 className="text-gray-500">○ ألواح خشبية</h2>
        <h2 className="text-gray-500">○ غراء وترويبة</h2>
        <h2 className="text-gray-500">○ سيليكون ولواصق</h2>
      </div>
      <h1 className="text-2xl">السعر</h1>
      <img className="w-full px-8 max-lg:hidden" src={priceSlider} alt="" />
      <div className="flex items-center gap-4 max-lg:flex-col max-lg:gap-1">
        <input
          dir="ltr"
          placeholder="500"
          className="p-4 border-2 rounded-full h-12 w-28"
          type="text"
        />
        <span className="text-xl text-gray-300">-</span>
        <input
          dir="ltr"
          placeholder="1"
          className="p-4 border-2 rounded-full h-12 w-28"
          type="text"
        />
      </div>
      <div className="flex self-center gap-4 max-lg:flex-col max-lg:items-center">
        <div className="w-36">
          <Button size="md">إعادة تعيين</Button>
        </div>
        <div className="w-28">
          <Button size="md">تطبيق</Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterCard;
