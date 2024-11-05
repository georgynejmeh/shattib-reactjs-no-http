import {
  CategoryFilterCard,
  CategoryListHorizontal,
  LeftRightButtonsCircle,
  MainPadding,
  ProductCard,
  ProductsFilterViewControls,
  SectionTitles,
  TitleNumber,
} from "..";

const MainCategoryPage = () => {
  return (
    <main>
      <MainPadding>
        <SectionTitles
          title01="الصفحة الرئيسية"
          title02="التصنيفات"
          endTitle="مواد البناء"
        />
        <TitleNumber subTitle="500 منتج">مواد البناء</TitleNumber>
        <TitleNumber subTitle="20">التصنفات الفرعية</TitleNumber>
        <CategoryListHorizontal />
        <LeftRightButtonsCircle />
        <section className="flex max-lg:flex-col max-lg:w-full">
          <div className="max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center">
            <CategoryFilterCard />
          </div>
          <div className="max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center">
            <ProductsFilterViewControls />
            <section className="flex flex-wrap gap-8 max-lg:justify-center">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </section>
          </div>
        </section>
      </MainPadding>
    </main>
  );
};

export default MainCategoryPage;
