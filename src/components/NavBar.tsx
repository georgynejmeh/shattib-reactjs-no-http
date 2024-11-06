import {
  shattibLogoRow,
  searchIcon,
  cartIcon,
  heartIcon,
  accountIcon,
  TextInput,
  Link,
  NavBarCategoriesDropdownMenu,
  menuIcon,
  useState,
} from "..";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  // const { setIsShownEngineerRequestModal } = useEngineerRequest();
  return (
    <>
      <div className="max-lg:hidden">
        <nav className="flex items-center justify-between border-b py-4 px-8 max-lg:flex-col max-lg:items-start max-lg:p-8 max-lg:gap-8">
          <img src={shattibLogoRow} alt="" />
          <Link to={"/home"}>
            <span>الصفحة الرئيسية</span>
          </Link>
          <NavBarCategoriesDropdownMenu />
          {/* <Link to={"/home"}>
        <span>جميع المنتجات</span>
      </Link> */}
          <Link to={"/conditions"}>
            <span>كراسات الشروط</span>
          </Link>
          <div className="w-96 max-lg:w-full max-lg:max-w-72">
            <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
          </div>
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link to={"/cart"}>
              <div className="relative flex flex-col items-center">
                <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
                  4
                </div>
                <img src={cartIcon} alt="" />
                <span>السلة</span>
              </div>
            </Link>
            <Link to={"/wishlist"}>
              <div className="flex flex-col items-center">
                <img src={heartIcon} alt="" />
                <span>المفضلة</span>
              </div>
            </Link>
            {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
        }}
      >
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div> */}
            <Link to={"/orders"}>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                <img src={accountIcon} alt="" />
              </div>
            </Link>
            <span>EN</span>
          </div>

          <Link className="max-lg:hidden" to={"/cart"}>
            <div className="relative flex flex-col items-center">
              <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
                4
              </div>
              <img src={cartIcon} alt="" />
              <span>السلة</span>
            </div>
          </Link>
          <Link className="max-lg:hidden" to={"/wishlist"}>
            <div className="flex flex-col items-center">
              <img src={heartIcon} alt="" />
              <span>المفضلة</span>
            </div>
          </Link>
          {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
        }}
      >
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div> */}
          <Link className="max-lg:hidden" to={"/orders"}>
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
              <img src={accountIcon} alt="" />
            </div>
          </Link>
          <span className="max-lg:hidden">EN</span>
        </nav>
      </div>

      <div className="lg:hidden">
        <nav className="flex flex-col justify-between border-b items-start p-8 pb-4 gap-8">
          <div className="flex justify-between w-full">
            <img src={shattibLogoRow} alt="" />
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
              <img src={menuIcon} alt="" />
            </button>
          </div>
          <div className={`flex flex-col gap-6 ${isCollapsed ? "hidden" : ""}`}>
            <Link to={"/home"}>
              <span>الصفحة الرئيسية</span>
            </Link>
            <NavBarCategoriesDropdownMenu />
            <Link to={"/conditions"}>
              <span>كراسات الشروط</span>
            </Link>
            <div className="w-96 max-lg:w-full max-lg:max-w-72">
              <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
            </div>
            <div className="lg:hidden flex items-center justify-between w-full">
              <Link to={"/cart"}>
                <div className="relative flex flex-col items-center">
                  <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
                    4
                  </div>
                  <img src={cartIcon} alt="" />
                  <span>السلة</span>
                </div>
              </Link>
              <Link to={"/wishlist"}>
                <div className="flex flex-col items-center">
                  <img src={heartIcon} alt="" />
                  <span>المفضلة</span>
                </div>
              </Link>
              <Link to={"/orders"}>
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                  <img src={accountIcon} alt="" />
                </div>
              </Link>
              <span>EN</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
