
import React, { useState, useEffect } from 'react';
import { INITIAL_PRODUCTS, CATEGORIES } from './constants';
import { Product } from './types';
import Calculator from './components/Calculator';
import PriceChart from './components/PriceChart';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.includes(search);
    const matchesCat = activeCategory ? p.category === activeCategory : true;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-xl text-white">
              <i className='bx bxs-buildings text-2xl'></i>
            </div>
            <div>
              <h1 className={`font-black text-xl transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>بارمان مرکب کویر</h1>
              <span className="text-[10px] text-emerald-600 block -mt-1 font-bold">تامین تخصصی مصالح ساختمانی</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
            <a href="#hero" className="hover:text-emerald-600 transition-colors">خانه</a>
            <a href="#products" className="hover:text-emerald-600 transition-colors">محصولات</a>
            <a href="#calculator" className="hover:text-emerald-600 transition-colors">محاسبات</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">تماس</a>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-emerald-600 transition-all flex items-center gap-2">
            <i className='bx bx-user-circle text-lg'></i> ورود پنل
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 -skew-x-12 transform origin-top"></div>
        <div className="container mx-auto px-6 relative flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold animate-bounce">
              <i className='bx bxs-check-shield'></i> گارانتی اصالت کالا و ارسال سریع
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.2]">
              پایه‌ای <span className="text-emerald-600">استوار</span> <br /> برای سازه‌های ماندگار
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
              بارمان مرکب کویر، بزرگترین زنجیره تامین مستقیم مصالح ساختمانی در مرکز و جنوب کشور. حذف واسطه‌ها، تضمین کیفیت و مشاوره تخصصی در قلب یزد.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-emerald-600/20 hover:scale-105 transition-transform">
                مشاهده لیست قیمت امروز
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-colors">
                دریافت مشاوره رایگان
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
              <img src="https://picsum.photos/seed/build/1000/1000" alt="Construction" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-fadeIn">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <i className='bx bx-trending-up text-2xl'></i>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">پروژه‌های تامین شده</span>
                  <span className="text-2xl font-black text-slate-900">+۱۲۰۰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="container mx-auto px-6 -mt-10 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-white shadow-xl rounded-[2.5rem] border border-slate-100">
          {[
            { label: 'سیمان ارسال شده', val: '۲۵ هزار تن', icon: 'bx-package', color: 'text-blue-500' },
            { label: 'سابقه فعالیت', val: '۱۵ سال', icon: 'bx-time-five', color: 'text-emerald-500' },
            { label: 'مشتریان فعال', val: '۴۵۰ انبوه ساز', icon: 'bx-group', color: 'text-orange-500' },
            { label: 'واحد لجستیک', val: '۲۴ ساعته', icon: 'bx-truck', color: 'text-purple-500' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4 p-2">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-slate-50 ${s.color}`}>
                <i className={`bx ${s.icon}`}></i>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-bold">{s.label}</span>
                <span className="text-sm md:text-base font-black text-slate-800">{s.val}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Horizontal Scroll */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
            <button 
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${!activeCategory ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg' : 'bg-white text-slate-600 border-slate-100 hover:border-emerald-200'}`}
            >
              همه کالاها
            </button>
            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <button 
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`shrink-0 flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${activeCategory === key ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg' : 'bg-white text-slate-600 border-slate-100 hover:border-emerald-200'}`}
              >
                <i className={`bx ${cat.icon}`}></i>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area: Products + Side Panel */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <i className='bx bxs-grid text-emerald-600'></i> ویترین محصولات
              </h3>
              <div className="relative">
                <i className='bx bx-search absolute right-3 top-3 text-slate-400'></i>
                <input 
                  type="text" 
                  placeholder="جستجو در انبار..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-white border border-slate-100 rounded-xl pr-10 pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 w-64"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="products">
              {filteredProducts.map(p => (
                <div key={p.id} className="group bg-white rounded-3xl p-4 shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-emerald-600">
                      {CATEGORIES[p.category as keyof typeof CATEGORIES]?.label}
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">{p.name}</h4>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] text-slate-400 block">{p.unit}</span>
                      <span className="text-lg font-black text-emerald-600">
                        {p.isAvailable ? `${p.price.toLocaleString()} تومان` : 'تماس بگیرید'}
                      </span>
                    </div>
                    <button className="bg-slate-50 text-slate-800 p-2.5 rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
                      <i className='bx bx-plus'></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel: Tools & Analytics */}
          <div className="w-full lg:w-80 space-y-8">
            <Calculator />
            <PriceChart />
            
            {/* Quick Contact Card */}
            <div className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <h4 className="text-xl font-bold mb-4 relative z-10">نیاز به تامین عمده دارید؟</h4>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed relative z-10">
                کارشناسان فروش ما آماده عقد قراردادهای بلند مدت با شرکت‌های ساختمانی هستند.
              </p>
              <a href="tel:09135256776" className="block w-full bg-emerald-600 text-center py-3 rounded-xl font-bold hover:bg-emerald-500 transition-colors relative z-10">
                <i className='bx bxs-phone-call ml-2'></i> تماس با واحد فروش
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog/Article Feature */}
      <section className="py-20 bg-slate-50 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-slate-900">دانشنامه ساختمان بارمان</h3>
            <p className="text-slate-500 mt-2">آخرین متدها و متریال‌های روز دنیا در دستان شما</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'مزایای بلوک هبلکس در عایق‌بندی', img: 'https://picsum.photos/seed/blog1/600/400', date: '۱۴۰۲/۱۲/۰۱' },
              { title: 'بررسی استحکام میلگردهای حرارتی', img: 'https://picsum.photos/seed/blog2/600/400', date: '۱۴۰۲/۱۱/۲۸' },
              { title: 'راهنمای انتخاب چسب کاشی پلیمری', img: 'https://picsum.photos/seed/blog3/600/400', date: '۱۴۰۲/۱۱/۱۵' },
            ].map((b, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <div className="h-48 overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] text-emerald-600 font-bold">{b.date}</span>
                  <h5 className="text-lg font-bold text-slate-800 mt-1 mb-4 leading-relaxed">{b.title}</h5>
                  <button className="text-sm font-bold text-slate-400 hover:text-emerald-600 transition-colors flex items-center gap-1">
                    مطالعه مقاله <i className='bx bx-left-arrow-alt'></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
             <div className="flex items-center gap-3">
              <div className="bg-slate-900 p-2 rounded-xl text-white">
                <i className='bx bxs-buildings text-2xl'></i>
              </div>
              <h1 className="font-black text-xl text-slate-900">بارمان مرکب کویر</h1>
            </div>
            <p className="text-slate-500 text-sm leading-7 max-w-md">
              بیش از یک دهه تجربه در تامین مصالح ساختمانی استان یزد. ما بر این باوریم که کیفیت ساخت حق هر شهروند است و در این راه بهترین متریال را با کمترین قیمت ممکن به دست شما می‌رسانیم.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                <i className='bx bxl-instagram text-xl'></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                <i className='bx bxl-whatsapp text-xl'></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                <i className='bx bxl-telegram text-xl'></i>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="font-black text-slate-900 border-r-4 border-emerald-600 pr-3">دسترسی سریع</h6>
            <ul className="space-y-3 text-sm text-slate-500 font-bold">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">لیست قیمت سیمان</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">بلوک هبلکس یزد</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">آهن‌آلات ساختمانی</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">فرصت‌های شغلی</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-black text-slate-900 border-r-4 border-emerald-600 pr-3">تماس با ما</h6>
            <div className="space-y-4 text-sm text-slate-500">
              <div className="flex gap-3">
                <i className='bx bxs-map text-emerald-600 text-lg'></i>
                <p>یزد، بلوار استقلال، میدان کسنویه، خیابان گلشن</p>
              </div>
              <div className="flex gap-3">
                <i className='bx bxs-phone text-emerald-600 text-lg'></i>
                <p dir="ltr">۰۹۱۳ ۲۵۳ ۶۱۵۷</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-50 text-center text-[10px] text-slate-400 font-bold">
          تمامی حقوق مادی و معنوی این وب‌سایت متعلق به گروه بارمان مرکب کویر می‌باشد. ۱۴۰۲ &copy;
        </div>
      </footer>

      {/* AI Assistant Button */}
      <AIConsultant />
    </div>
  );
};

export default App;
