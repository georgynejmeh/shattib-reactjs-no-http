import { addToBoxIcon, Button, CartItemCard, MainPadding } from "..";

const WishListPage = () => {
  return (
    <main>
      <MainPadding>
        <section className="flex flex-col gap-4 py-2">
          <h1 className="text-2xl font-bold max-lg:text-center">
            قائمة الرغبات
          </h1>
          <h2 className="text-xl text-gray-400 max-lg:text-center">
            يمكنك إضافة منتجات جديدة ليتم توفيرها على الموقع أو تنفيذ طلب خاص لك
          </h2>
        </section>
        <section className="px-16 max-lg:p-0">
          <div className="flex flex-row-reverse w-full max-lg:flex-col max-lg:items-center">
            <div className="w-44">
              <Button size="md">
                <div className="flex justify-center gap-4">
                  <img className="fill-white" src={addToBoxIcon} alt="" />
                  <span>أضف منتج</span>
                </div>
              </Button>
            </div>
          </div>
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
        </section>
      </MainPadding>
    </main>
  );
};

export default WishListPage;
