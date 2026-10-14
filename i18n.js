/*
 * Gourmet Sabzi – page translations.
 *
 * Hebrew is the page itself (index.html). This file adds English (US) and Farsi.
 * To translate something new: give the element data-i18n="key" (its inner HTML is replaced),
 * or data-i18n-attr="attribute:key;attribute:key" for attributes, then add the key to BOTH
 * STRINGS.en and STRINGS.fa below. Prices (.price) and other numbers (.num) switch to
 * Persian digits automatically in Farsi.
 */
(function () {
  'use strict';

  const LANGS = {
    he: { dir: 'rtl', label: 'עב' },
    en: { dir: 'ltr', label: 'EN' },
    fa: { dir: 'rtl', label: 'فا' },
  };
  const STORAGE_KEY = 'gs-lang';

  // Strings that only scripts use, so Hebrew can't be read from the page
  const HE_DYNAMIC = { 'status.open': 'פתוח עכשיו', 'status.shut': 'סגור כעת', video: 'וידאו' };

  const STRINGS = {
    en: {
      'meta.title': 'Gourmet Sabzi | Persian Restaurant in Tel Aviv',
      'meta.desc': 'Gourmet Sabzi: Persian home cooking at 47 Levinski St, Tel Aviv. Ghormeh sabzi, gondi, charcoal-grilled kabab and more, with delivery across Tel Aviv, Herzliya and nearby.',
      'status.open': 'Open now',
      'status.shut': 'Closed now',
      video: 'Video',
      'link.wolt': 'https://wolt.com/en/isr/tel-aviv/restaurant/gourmet-sabzi',

      // Accessibility labels
      'a.logo': 'Gourmet Sabzi – back to top',
      'a.toggle': 'Open navigation menu',
      'a.heroBg': 'A Persian table spread: grilled kababs, saffron rice with barberries, stews and salads',
      'a.friday': 'Friday dishes',
      'a.veg': 'Vegetarian',
      'a.tabs': 'Menu categories',
      'a.close': 'Close video',
      'a.map': 'Map – Gourmet Sabzi, 47 Levinski St, Tel Aviv',
      'a.email': 'Email',

      // Header
      'nav.about': 'Our Story',
      'nav.dishes': 'Our Dishes',
      'nav.menu': 'Menu',
      'nav.press': 'Press',
      'nav.visit': 'Hours & Location',
      'nav.order': 'Order on Wolt',

      // Hero
      'hero.eyebrow': 'Persian home cooking · Tel Aviv',
      'hero.title': 'The taste of a<br><span>Persian</span> home',
      'hero.lead': 'Slow-simmered ghormeh sabzi, tender gondi in chicken broth, charcoal-grilled kabab and fragrant Persian rice. Family recipes, made just the way they always were.',
      'hero.order': 'Order Delivery',
      'hero.menu': 'See the Full Menu',
      'hero.m1v': '9.2',
      'hero.m1l': 'Customer rating on Wolt',
      'hero.m2v': '35–45',
      'hero.m2l': 'Minute delivery',
      'hero.m3v': 'Since 2016',
      'hero.m3l': 'In Levinski Market',
      'seen.label': 'As seen on:',
      'seen.kan': 'Kan 11',
      'seen.c13': 'Channel 13',
      'seen.knesset': 'Knesset Channel',

      // Our story
      'about.eyebrow': 'Our Story',
      'about.title': 'A home kitchen<br>in the heart of Levinski Market',
      'about.p1': '“Sabzi” means greens in Persian, and greens are the heart of our kitchen. Every pot starts with a big bunch of fresh herbs: chopped, slowly sautéed and given all the time they need.',
      'about.p2': 'Since 2016, Bijan Barhordary has been cooking the Persian food he grew up on, right in Levinski Market, with a few Israeli touches: dried Persian lemons, beef simmered for hours, tender gondi in chicken broth and rice made exactly right. Some of our ingredients and cookware come from Iran, to keep the flavors true. Every dish comes with fresh Persian herbs, pita and house salads, like a family lunch.',
      'alt.kebabMix': 'Kabab and chicken skewers with herbed rice, charred tomatoes, pita and salads',
      'alt.rice': 'Colorful Persian rice',
      'alt.owner': 'Bijan Barhordary, owner of Gourmet Sabzi',
      'owner.name': 'Bijan Barhordary',
      'owner.role': 'Owner and the heart of the kitchen',
      'owner.video': 'Watch Bijan’s story on Kan 11',
      'vt.owner': 'Not a Word About Soleimani: The Persian Scene Is Thriving in Israel (Kan News)',
      'pillar.t1': 'Fresh greens',
      'pillar.d1': 'Fresh herbs in every pot',
      'pillar.t2': 'Slow cooking',
      'pillar.d2': 'Stews that simmer for hours',
      'pillar.t3': 'Family recipes',
      'pillar.d3': 'The flavors we grew up on',

      // Signature dishes
      'sig.eyebrow': 'Our Dishes',
      'sig.title': 'The Persian Classics',
      'sig.lead': 'Stews and grilled dishes, served with a hot side, fresh Persian herbs, pita and house salads.',
      'dish.tagHouse': 'House favorite',
      'dish.tagGrill': 'From the grill',
      'dish.tagVeg': 'Vegetarian option',
      'dish.sabzi': 'Ghormeh Sabzi',
      'dish.gondi': 'Gondi',
      'dish.kabab': 'Charcoal Kabab',
      'dish.mosama': 'Khoresh Mosama',
      'dish.bamia': 'Khoresh Bamieh',
      'dish.chicken': 'Cinnamon Chicken',
      'sub.sabzi': 'قورمه‌سبزی',
      'sub.gondi': 'گوندی',
      'sub.kabab': 'کباب',
      'sub.mosama': 'خورش مسما',
      'sub.bamia': 'خورش بامیه',
      'sub.chicken': 'مرغ دارچینی',
      'dish.sabziD': 'Seven kinds of greens, dried Persian lemon and slow-simmered beef. Persia’s national dish.',
      'dish.gondiD': 'A dumpling of chicken breast and ground roasted chickpeas, simmered in chicken broth. The Shabbat dish of Persian Jews.',
      'dish.kababD': 'Juicy kabab grilled over charcoal, served with a side, sauce, fresh Persian herbs, pita and house salads.',
      'dish.mosamaD': 'Green beans, potato wedges, fresh crushed tomatoes and beef.',
      'dish.bamiaD': 'Fresh, tender okra, crushed tomatoes and dried Persian lemon. Vegetarian or with beef.',
      'dish.chickenD': 'Chicken marinated in cinnamon and roasted until tender, served with a side, sauce and house salads.',
      'alt.sabzi': 'Ghormeh sabzi with beef',
      'alt.gondi': 'Gondi',
      'alt.kabab': 'Charcoal-grilled kabab',
      'alt.mosama': 'Khoresh mosama with beef',
      'alt.bamia': 'Vegetarian khoresh bamieh',
      'alt.chicken': 'Cinnamon-marinated chicken',
      'served.title': 'Every main course comes with<small>* Herbs, pita and salads are included subject to availability</small>',
      'served.side': 'A hot side of your choice',
      'served.herbs': 'Fresh Persian herbs',
      'served.pita': 'Pita',
      'served.salads': 'House salads',

      // Friday specials
      'fri.eyebrow': 'Fridays only',
      'fri.title': 'Fridays at Gourmet Sabzi',
      'fri.lead': 'For the weekend, the big pots come out: Persian soups, stuffed vegetables and holiday dishes. The selection changes and depends on availability, so give us a call and ask what’s cooking today.',
      'fri.call': 'What’s cooking today?',
      'fri.anar': 'Ash-e Anar',
      'fri.reshte': 'Ash-e Reshteh',
      'fri.shifteh': 'Shifteh Berenji',
      'fri.dolma': 'Stuffed Grape Leaves',
      'fri.pepper': 'Stuffed Pepper',
      'fri.cabbage': 'Stuffed Cabbage',
      'fri.fish': 'Fish Fillet Meal',
      'sub.anar': 'آش انار',
      'sub.reshte': 'آش رشته',
      'sub.shifteh': 'شفته برنجی',
      'sub.dolma': 'دلمه برگ مو',
      'sub.pepper': 'دلمه فلفل',
      'sub.cabbage': 'دلمه کلم',
      'sub.fish': 'فیله ماهی',
      'fri.anarD': 'Pomegranate soup with tender meatballs, tamarind and rice. Sweet, tangy and comforting.',
      'fri.reshteD': 'Persian noodle soup with herbs, chickpeas and lentils, topped with fried onions.',
      'fri.shiftehD': 'A rice and beef dumpling simmered in a rich, tangy tomato sauce.',
      'fri.dolmaD': 'Grape leaves stuffed with fragrant rice, in a tangy beet sauce.',
      'fri.pepperD': 'A bell pepper stuffed with seasoned rice and vegetables, baked in tomato sauce.',
      'fri.cabbageD': 'Tender cabbage leaves stuffed with seasoned rice and vegetables, in tomato sauce.',
      'fri.fishD': 'Fish fillet with our house rice, salads and fresh pita.',
      'alt.anar': 'Ash-e anar, pomegranate soup',
      'alt.reshte': 'Ash-e reshteh, Persian noodle soup',
      'alt.shifteh': 'Shifteh berenji',
      'alt.dolma': 'Dolmeh, stuffed grape leaves',
      'alt.pepper': 'Stuffed pepper',
      'alt.cabbage': 'Stuffed cabbage',
      'alt.fish': 'Fish fillet with rice and salads',

      // Menu
      'menu.eyebrow': 'The Menu',
      'menu.title': 'Full Menu',
      'menu.lead': 'Stews, grilled dishes, food by weight to take home, and a family pack.',
      'tab.stews': 'Persian Stews',
      'tab.grill': 'Grill & Oven',
      'tab.weight': 'By Weight',
      'tab.family': 'Family Pack',
      'tab.drinks': 'Drinks',
      'note.stews': 'All stews are served with a hot side, fresh Persian herbs, pita and house salads',
      'note.grill': 'Served with a side, sauce, fresh Persian herbs, pita and house salads',
      'note.weight': 'For home, for Shabbat or for guests. Prices are per piece or for the base weight, and you can choose the weight when you order.',
      'm.sabziMeat': 'Ghormeh Sabzi with Beef',
      'm.sabziVeg': 'Vegetarian Ghormeh Sabzi',
      'm.mosamaMeat': 'Khoresh Mosama with Beef',
      'm.mosamaVeg': 'Vegetarian Khoresh Mosama',
      'm.bamiaMeat': 'Khoresh Bamieh with Beef',
      'm.bamiaVeg': 'Vegetarian Khoresh Bamieh',
      'm.lapehMeat': 'Khoresh Lapeh with Beef',
      'm.lapehVeg': 'Vegetarian Khoresh Lapeh',
      'm.kabab': 'Kabab',
      'm.pargit': 'Chicken Thigh',
      'm.riceColor': 'Colorful Persian Rice (varies)',
      'm.riceWhite': 'White Rice',
      'm.potato': 'Oven-Baked Potatoes',
      'm.kababGrill': 'Charcoal-Grilled Kabab',
      'm.pargitGrill': 'Charcoal-Grilled Chicken Thigh',
      'm.chickenOven': 'Oven-Roasted Cinnamon Chicken',
      'm.sabziMeatD': 'Seven kinds of greens, dried Persian lemon and beef',
      'm.sabziVegD': 'Seven kinds of greens and dried Persian lemon',
      'm.mosamaMeatD': 'Green beans, potato wedges, fresh crushed tomatoes and beef',
      'm.mosamaVegD': 'Green beans, potato wedges and fresh crushed tomatoes',
      'm.bamiaMeatD': 'Fresh, tender okra, fresh crushed tomatoes, dried Persian lemon and beef',
      'm.bamiaVegD': 'Fresh, tender okra, fresh crushed tomatoes and dried Persian lemon',
      'm.gondiD': 'Chicken breast and ground roasted chickpea dumpling, simmered in chicken broth',
      'm.kababD': 'Juicy kabab grilled over charcoal',
      'm.pargitD': 'Marinated boneless chicken thigh, grilled over charcoal',
      'm.chickenD': 'Tender chicken in a cinnamon marinade, roasted in the oven',
      'm.byWeight': 'By weight',
      'm.halfLiter': 'Half liter',
      'm.perPiece': 'Per piece',
      'price.sigNote': '* Prices are our Wolt delivery prices as of October 2026.',
      'price.menuNote': 'Prices shown are our Wolt delivery prices as of October 2026. Prices may change; the current price is always shown on Wolt.',
      'alt.family': 'A Persian family meal',
      'fam.eyebrow': 'For the whole family',
      'fam.desc': 'Two stews, one kilo each, plus two sides of your choice, half a kilo each. Served with salads on the side.',
      'fam.order': 'Order the Family Pack',
      'd.coke': 'Coca-Cola / Coke Zero (glass bottle)',
      'd.sprite': 'Sprite / Sprite Zero (glass bottle)',
      'd.cans': 'Coca-Cola / Coke Zero / Fanta (can)',
      'd.prigat': 'Prigat Orange / Lemon-Mint (glass bottle)',
      'd.grape': 'Prigat Grape',
      'd.fuze': 'Fuze Tea Peach',
      'd.flavored': 'Flavored Water (peach / grape / apple)',
      'd.water': 'Neviot Mineral Water',
      'd.soda': 'Kinley Soda',
      'd.malt': 'Malty Black Beer (non-alcoholic)',
      'd.330': '330 ml',
      'd.b500': '500 ml bottle',
      'd.500': '500 ml',
      'd.250': '250 ml',

      // Press
      'press.eyebrow': 'In the Press',
      'press.title': 'What They’re Saying',
      'press.lead': 'Food critics, chefs and TV crews have visited our kitchen in Levinski Market.',
      'press.quote': 'You know, with all due respect to the Moroccans and everyone else, this really is one of the richest and tastiest cuisines there is.',
      'press.quoteBy': '<b>Chef Israel Aharoni</b>, visiting Gourmet Sabzi. The next day, he ordered delivery.',
      'press.quoteLink': 'ynet · A culinary tour of Levinski Market →',
      'award.text': 'Four years in a row, we’ve received the “Recommended” award from Restaurant&nbsp;Guru, an international restaurant rating site.',
      'press.kan': 'Kan News',
      'press.c13': 'Channel 13 News · Ayala Hasson',
      'press.niv': 'Niv Gilboa · Restaurant Critic',
      'press.reshet': 'Reshet 13 · Paz Robinzon',
      'press.mako': 'mako · Channel 2 News',
      'press.t1': 'Not a word about Soleimani: the Persian scene is thriving in Israel',
      'press.t2': 'Ayala Hasson’s report on Gourmet Sabzi',
      'press.t3': 'A surprise review of Levinski Market’s restaurants',
      'press.t4': 'The secret of our gondi, behind the scenes in the kitchen',
      'press.t5': 'How products from Iran make it to a Tel Aviv kitchen',
      'press.t6': 'Bijan presents our dishes on “Mishkan Laila”',
      'press.t7': 'From the Persian kitchen with love: three Persian gems, and we’re one of them',
      'press.t8': 'The perfect rice: young chefs judged, and our rice stood out',
      'vt.niv': 'Niv Gilboa: a surprise review in Levinski Market',
      'vt.knesset': 'Mishkan Laila with Hani Zubida (Knesset Channel)',

      // Delivery
      'cta.eyebrow': 'Delivery & Pickup',
      'cta.title': 'A Persian meal, delivered',
      'cta.lead': 'Delivery across Tel Aviv, Herzliya and nearby through Wolt, or pick up from the restaurant on Levinski Street.',
      'cta.fact1': 'Delivery in 35–45 min',
      'cta.fact2': 'Pickup in 10–15 min',
      'cta.fact3': 'Rated 9.2 on Wolt',

      // Hours & location
      'visit.eyebrow': 'Come Visit',
      'visit.title': 'Hours & Location',
      'visit.hours': 'Opening Hours',
      'visit.address': 'Address',
      'visit.phone': 'Phone',
      'visit.email': 'Email & Social',
      'visit.addr': '47 Levinski St, Levinski Market, Tel Aviv-Yafo',
      'visit.seating': 'Dine-in seating subject to availability',
      'day.0': 'Sunday',
      'day.1': 'Monday',
      'day.2': 'Tuesday',
      'day.3': 'Wednesday',
      'day.4': 'Thursday',
      'day.5': 'Friday',
      'day.6': 'Saturday',
      'hours.weekday': '11:00 AM – 4:30 PM',
      'hours.friday': '10:00 AM – 5:00 PM',
      'hours.closed': 'Closed',

      // Footer
      'footer.addr': 'Gourmet Sabzi · 47 Levinski St, Tel Aviv',
      'footer.credit': 'Design & development:',
      'footer.name': 'Eyal Barhordary',
      'mobile.call': 'Call',
    },

    fa: {
      'meta.title': 'گورمه سبزی | رستوران ایرانی در تل‌آویو',
      'meta.desc': 'گورمه سبزی: آشپزی خانگی ایرانی در خیابان لوینسکی ۴۷، تل‌آویو. قورمه‌سبزی، گوندی، کباب روی زغال و غذاهای دیگر، با ارسال به تل‌آویو، هرتزلیا و حومه.',
      'status.open': 'الان باز است',
      'status.shut': 'الان بسته است',
      video: 'ویدیو',
      'link.wolt': 'https://wolt.com/he/isr/tel-aviv/restaurant/gourmet-sabzi',

      // Accessibility labels
      'a.logo': 'گورمه سبزی – بازگشت به بالای صفحه',
      'a.toggle': 'باز کردن منوی سایت',
      'a.heroBg': 'سفرهٔ ایرانی: کباب، پلوی زعفرانی با زرشک، خورش‌ها و سالادها',
      'a.friday': 'غذاهای جمعه',
      'a.veg': 'گیاهی',
      'a.tabs': 'دسته‌بندی‌های منو',
      'a.close': 'بستن ویدیو',
      'a.map': 'نقشه – گورمه سبزی، خیابان لوینسکی ۴۷، تل‌آویو',
      'a.email': 'ایمیل',

      // Header
      'nav.about': 'داستان ما',
      'nav.dishes': 'غذاهای ما',
      'nav.menu': 'منو',
      'nav.press': 'در رسانه‌ها',
      'nav.visit': 'ساعات و آدرس',
      'nav.order': 'سفارش از وولت',

      // Hero
      'hero.eyebrow': 'آشپزی خانگی ایرانی · تل‌آویو',
      'hero.title': 'طعم خانهٔ<br><span>ایرانی</span>',
      'hero.lead': 'قورمه‌سبزی‌ای که آرام‌آرام جا می‌افتد، گوندی نرم در آب‌مرغ، کباب روی زغال و پلوی خوش‌عطر ایرانی. دستورپخت‌های خانوادگی، درست مثل قدیم.',
      'hero.order': 'سفارش آنلاین',
      'hero.menu': 'منوی کامل',
      'hero.m1v': '۹٫۲',
      'hero.m1l': 'امتیاز مشتریان در وولت',
      'hero.m2v': '۳۵ تا ۴۵',
      'hero.m2l': 'دقیقه زمان ارسال',
      'hero.m3v': 'از ۲۰۱۶',
      'hero.m3l': 'در بازار لوینسکی',
      'seen.label': 'ما را دیده‌اید در:',
      'seen.kan': 'کان ۱۱',
      'seen.c13': 'شبکهٔ ۱۳',
      'seen.knesset': 'شبکهٔ کنست',

      // Our story
      'about.eyebrow': 'داستان ما',
      'about.title': 'آشپزخانه‌ای خانگی<br>در دل بازار لوینسکی',
      'about.p1': 'سبزی، دل آشپزخانهٔ ماست. هر قابلمه با یک دستهٔ بزرگ سبزی تازه شروع می‌شود؛ خردش می‌کنیم، آرام‌آرام تفتش می‌دهیم و می‌گذاریم زمان کار خودش را بکند.',
      'about.p2': 'از سال ۲۰۱۶، بیژن برخورداری در بازار لوینسکی همان غذاهای ایرانی‌ای را می‌پزد که با آن‌ها بزرگ شده، با کمی چاشنی اسرائیلی: لیموعمانی، گوشت گوساله‌ای که ساعت‌ها جا می‌افتد، گوندی نرم در آب‌مرغ و برنجی که درست همان‌طور که باید دم می‌کشد. بخشی از مواد اولیه و ظروف از ایران می‌آید تا طعم‌ها اصیل بمانند. هر غذا با سبزی‌خوردن، نان پیتا و سالادهای خانگی سرو می‌شود، درست مثل یک ناهار خانوادگی.',
      'alt.kebabMix': 'سینی کباب و جوجه با پلوی سبز، گوجهٔ کبابی، نان پیتا و سالاد',
      'alt.rice': 'پلوی رنگی ایرانی',
      'alt.owner': 'بیژن برخورداری، صاحب گورمه سبزی',
      'owner.name': 'بیژن برخورداری',
      'owner.role': 'صاحب رستوران و قلب آشپزخانه',
      'owner.video': 'داستان بیژن را در کان ۱۱ ببینید',
      'vt.owner': 'حتی یک کلمه دربارهٔ سلیمانی نه: صحنهٔ ایرانی در اسرائیل شکوفا شده است (اخبار کان)',
      'pillar.t1': 'سبزی تازه',
      'pillar.d1': 'سبزی معطر تازه در هر قابلمه',
      'pillar.t2': 'پخت آرام',
      'pillar.d2': 'خورش‌هایی که ساعت‌ها جا می‌افتند',
      'pillar.t3': 'دستورپخت خانوادگی',
      'pillar.d3': 'طعم‌هایی که با آن‌ها بزرگ شدیم',

      // Signature dishes
      'sig.eyebrow': 'غذاهای ما',
      'sig.title': 'غذاهای اصیل ایرانی',
      'sig.lead': 'خورش‌ها و کباب‌هایی که با دورچین گرم، سبزی‌خوردن، نان پیتا و سالادهای خانگی سر سفره می‌آیند.',
      'dish.tagHouse': 'غذای ویژهٔ ما',
      'dish.tagGrill': 'از روی منقل',
      'dish.tagVeg': 'نسخهٔ گیاهی هم داریم',
      'dish.sabzi': 'قورمه‌سبزی',
      'dish.gondi': 'گوندی',
      'dish.kabab': 'کباب',
      'dish.mosama': 'خورش مسما',
      'dish.bamia': 'خورش بامیه',
      'dish.chicken': 'مرغ دارچینی',
      'sub.sabzi': "חורש'ט סבזי",
      'sub.gondi': 'גונדי',
      'sub.kabab': 'קבב',
      'sub.mosama': "חורש'ט מוסמא",
      'sub.bamia': "חורש'ט במיה",
      'sub.chicken': 'עוף בקינמון',
      'dish.sabziD': 'هفت نوع سبزی، لیموعمانی و گوشت گوساله‌ای که آرام جا می‌افتد. غذای ملی ایران.',
      'dish.gondiD': 'کوفته‌ای از سینهٔ مرغ و نخودچی آسیاب‌شده که در آب‌مرغ پخته می‌شود. غذای شبات یهودیان ایران.',
      'dish.kababD': 'کباب آبدار روی زغال، همراه با دورچین، سس، سبزی‌خوردن، نان پیتا و سالادهای خانگی.',
      'dish.mosamaD': 'لوبیا سبز، سیب‌زمینی قاچ‌شده، گوجه‌فرنگی تازهٔ له‌شده و گوشت گوساله.',
      'dish.bamiaD': 'بامیهٔ تازه و نرم، گوجه‌فرنگی له‌شده و لیموعمانی. گیاهی یا با گوشت.',
      'dish.chickenD': 'مرغی که با دارچین مزه‌دار شده و در فر پخته می‌شود تا نرم شود، همراه با دورچین، سس و سالادهای خانگی.',
      'alt.sabzi': 'قورمه‌سبزی با گوشت',
      'alt.gondi': 'گوندی',
      'alt.kabab': 'کباب روی زغال',
      'alt.mosama': 'خورش مسما با گوشت',
      'alt.bamia': 'خورش بامیهٔ گیاهی',
      'alt.chicken': 'مرغ مزه‌دارشده با دارچین',
      'served.title': 'هر غذای اصلی همراه است با<small>* سبزی، نان و سالاد بسته به موجودی ارسال می‌شود</small>',
      'served.side': 'دورچین گرم به انتخاب شما',
      'served.herbs': 'سبزی‌خوردن تازه',
      'served.pita': 'نان پیتا',
      'served.salads': 'سالادهای خانگی',

      // Friday specials
      'fri.eyebrow': 'فقط جمعه‌ها',
      'fri.title': 'جمعه‌ها در گورمه سبزی',
      'fri.lead': 'برای آخر هفته دیگ‌های بزرگ بار گذاشته می‌شوند: آش‌های ایرانی، دلمه‌ها و غذاهای مجلسی. غذاها هر هفته فرق می‌کنند و به موجودی بستگی دارند، پس زنگ بزنید و بپرسید امروز چه بار گذاشته‌ایم.',
      'fri.call': 'امروز چه بار گذاشته‌ایم؟',
      'fri.anar': 'آش انار',
      'fri.reshte': 'آش رشته',
      'fri.shifteh': 'شفته برنجی',
      'fri.dolma': 'دلمهٔ برگ مو',
      'fri.pepper': 'دلمهٔ فلفل',
      'fri.cabbage': 'دلمهٔ کلم',
      'fri.fish': 'پرس فیلهٔ ماهی',
      'sub.anar': 'אש אנאר',
      'sub.reshte': 'אש רשתה',
      'sub.shifteh': "שפטה ברנג'י",
      'sub.dolma': 'עלי גפן ממולאים',
      'sub.pepper': 'פלפל ממולא',
      'sub.cabbage': 'כרוב ממולא',
      'sub.fish': 'עסקית פילה דג',
      'fri.anarD': 'آش انار با کوفته‌ریزه‌های نرم، تمر هندی و برنج. ملس و دلچسب.',
      'fri.reshteD': 'آش رشته با سبزی، نخود و عدس، و پیاز داغ رویش.',
      'fri.shiftehD': 'کوفتهٔ برنج و گوشت که در سس گوجه‌فرنگی ملس و غلیظ پخته می‌شود.',
      'fri.dolmaD': 'برگ مو پر شده با برنج معطر، در سس ملس چغندر.',
      'fri.pepperD': 'فلفل دلمه‌ای پر شده با برنج ادویه‌دار و سبزیجات، پخته در سس گوجه‌فرنگی.',
      'fri.cabbageD': 'برگ‌های نرم کلم پر شده با برنج ادویه‌دار و سبزیجات، در سس گوجه‌فرنگی.',
      'fri.fishD': 'فیلهٔ ماهی با برنج مخصوص ما، سالاد و نان پیتای تازه.',
      'alt.anar': 'آش انار',
      'alt.reshte': 'آش رشته',
      'alt.shifteh': 'شفته برنجی',
      'alt.dolma': 'دلمهٔ برگ مو',
      'alt.pepper': 'دلمهٔ فلفل',
      'alt.cabbage': 'دلمهٔ کلم',
      'alt.fish': 'فیلهٔ ماهی با برنج و سالاد',

      // Menu
      'menu.eyebrow': 'منو',
      'menu.title': 'منوی کامل',
      'menu.lead': 'خورش‌ها، کباب‌ها، غذای وزنی برای خانه و پک خانوادگی.',
      'tab.stews': 'خورش‌های ایرانی',
      'tab.grill': 'کباب و فر',
      'tab.weight': 'وزنی',
      'tab.family': 'پک خانوادگی',
      'tab.drinks': 'نوشیدنی‌ها',
      'note.stews': 'همهٔ خورش‌ها با دورچین گرم، سبزی‌خوردن، نان پیتا و سالادهای خانگی سرو می‌شوند',
      'note.grill': 'همراه با دورچین، سس، سبزی‌خوردن، نان پیتا و سالادهای خانگی',
      'note.weight': 'برای خانه، شبات یا مهمانی. قیمت‌ها برای هر عدد یا برای وزن پایه است و هنگام سفارش می‌توانید وزن را انتخاب کنید.',
      'm.sabziMeat': 'قورمه‌سبزی با گوشت',
      'm.sabziVeg': 'قورمه‌سبزی گیاهی',
      'm.mosamaMeat': 'خورش مسما با گوشت',
      'm.mosamaVeg': 'خورش مسمای گیاهی',
      'm.bamiaMeat': 'خورش بامیه با گوشت',
      'm.bamiaVeg': 'خورش بامیهٔ گیاهی',
      'm.lapehMeat': 'خورش لپه با گوشت',
      'm.lapehVeg': 'خورش لپهٔ گیاهی',
      'm.kabab': 'کباب',
      'm.pargit': 'ران مرغ',
      'm.riceColor': 'پلوی رنگی ایرانی (متغیر)',
      'm.riceWhite': 'چلو (برنج سفید)',
      'm.potato': 'سیب‌زمینی تنوری',
      'm.kababGrill': 'کباب روی زغال',
      'm.pargitGrill': 'جوجه‌کباب ران روی زغال',
      'm.chickenOven': 'مرغ دارچینی در فر',
      'm.sabziMeatD': 'هفت نوع سبزی، لیموعمانی و گوشت گوساله',
      'm.sabziVegD': 'هفت نوع سبزی و لیموعمانی',
      'm.mosamaMeatD': 'لوبیا سبز، سیب‌زمینی قاچ‌شده، گوجه‌فرنگی تازهٔ له‌شده و گوشت گوساله',
      'm.mosamaVegD': 'لوبیا سبز، سیب‌زمینی قاچ‌شده و گوجه‌فرنگی تازهٔ له‌شده',
      'm.bamiaMeatD': 'بامیهٔ تازه و نرم، گوجه‌فرنگی تازهٔ له‌شده، لیموعمانی و گوشت گوساله',
      'm.bamiaVegD': 'بامیهٔ تازه و نرم، گوجه‌فرنگی تازهٔ له‌شده و لیموعمانی',
      'm.gondiD': 'کوفتهٔ سینهٔ مرغ و نخودچی آسیاب‌شده، پخته در آب‌مرغ',
      'm.kababD': 'کباب آبدار که روی زغال کباب می‌شود',
      'm.pargitD': 'ران مرغ بی‌استخوان مزه‌دارشده، کبابی روی زغال',
      'm.chickenD': 'مرغ نرم مزه‌دارشده با دارچین، پخته در فر',
      'm.byWeight': 'وزنی',
      'm.halfLiter': 'نیم لیتر',
      'm.perPiece': 'هر عدد',
      'price.sigNote': '* قیمت‌ها بر اساس منوی ارسال در وولت، اکتبر ۲۰۲۶.',
      'price.menuNote': 'قیمت‌های این منو همان قیمت‌های سفارش در وولت (اکتبر ۲۰۲۶) است. قیمت‌ها ممکن است تغییر کنند و قیمت به‌روز همیشه در وولت نمایش داده می‌شود.',
      'alt.family': 'یک وعدهٔ خانوادگی ایرانی',
      'fam.eyebrow': 'برای همهٔ خانواده',
      'fam.desc': 'دو خورش، هر کدام یک کیلو، و دو دورچین به انتخاب شما، هر کدام نیم کیلو. همراه با سالاد.',
      'fam.order': 'سفارش پک خانوادگی',
      'd.coke': 'کوکاکولا / کوکاکولا زیرو (بطری شیشه‌ای)',
      'd.sprite': 'اسپرایت / اسپرایت زیرو (بطری شیشه‌ای)',
      'd.cans': 'قوطی کوکاکولا / کوکاکولا زیرو / فانتا',
      'd.prigat': 'آبمیوهٔ پریگات پرتقال / لیمو و نعناع (بطری شیشه‌ای)',
      'd.grape': 'آبمیوهٔ پریگات انگور',
      'd.fuze': 'فیوز تی هلو',
      'd.flavored': 'آب طعم‌دار (هلو / انگور / سیب)',
      'd.water': 'آب معدنی نویعوت',
      'd.soda': 'سودای کینلی',
      'd.malt': 'ماءالشعیر مالتی',
      'd.330': '۳۳۰ میلی‌لیتر',
      'd.b500': 'بطری ۵۰۰ میلی‌لیتری',
      'd.500': '۵۰۰ میلی‌لیتر',
      'd.250': '۲۵۰ میلی‌لیتر',

      // Press
      'press.eyebrow': 'در رسانه‌ها',
      'press.title': 'دربارهٔ ما چه می‌گویند',
      'press.lead': 'منتقدان غذا، سرآشپزها و گزارشگران تلویزیون به آشپزخانهٔ ما در بازار لوینسکی سر زده‌اند.',
      'press.quote': 'می‌دانی، با همهٔ احترامی که برای مراکشی‌ها و بقیه قائلم، این واقعاً یکی از غنی‌ترین و خوشمزه‌ترین آشپزی‌هایی است که وجود دارد.',
      'press.quoteBy': '<b>سرآشپز اسرائیل اهرونی</b>، هنگام بازدید از گورمه سبزی. فردای آن روز خودش سفارش ارسال داد.',
      'press.quoteLink': 'ynet · گشتی خوراکی در بازار لوینسکی ←',
      'award.text': 'چهار سال پیاپی نشان «توصیه‌شده» را از Restaurant&nbsp;Guru، سایت بین‌المللی رتبه‌بندی رستوران‌ها، دریافت کرده‌ایم.',
      'press.kan': 'اخبار کان',
      'press.c13': 'شبکهٔ ۱۳ · آیالا حسون',
      'press.niv': 'نیو گیلبوآ · منتقد رستوران',
      'press.reshet': 'رشت ۱۳ · پاز روبینزون',
      'press.mako': 'mako · اخبار شبکهٔ ۲',
      'press.t1': 'حتی یک کلمه دربارهٔ سلیمانی نه: صحنهٔ ایرانی در اسرائیل شکوفا شده است',
      'press.t2': 'گزارش آیالا حسون دربارهٔ گورمه سبزی',
      'press.t3': 'نقد غافلگیرانهٔ رستوران‌های بازار لوینسکی',
      'press.t4': 'راز گوندی ما، پشت صحنهٔ آشپزخانه',
      'press.t5': 'محصولات ایرانی چطور به آشپزخانه‌ای در تل‌آویو می‌رسند',
      'press.t6': 'بیژن غذاهای ما را در برنامهٔ «میشکان لایلا» معرفی می‌کند',
      'press.t7': 'از آشپزخانهٔ ایرانی با عشق: سه گوهر ایرانی، و ما یکی از آن‌هاییم',
      'press.t8': 'برنج بی‌نقص: سرآشپزهای جوان داوری کردند و برنج ما درخشید',
      'vt.niv': 'نیو گیلبوآ: نقد غافلگیرانه در بازار لوینسکی',
      'vt.knesset': 'میشکان لایلا با هانی زوبیدا (شبکهٔ کنست)',

      // Delivery
      'cta.eyebrow': 'ارسال و تحویل حضوری',
      'cta.title': 'غذای ایرانی، تا در خانه',
      'cta.lead': 'ارسال به تل‌آویو، هرتزلیا و حومه از طریق وولت، یا تحویل حضوری از رستوران در خیابان لوینسکی.',
      'cta.fact1': 'ارسال در ۳۵ تا ۴۵ دقیقه',
      'cta.fact2': 'تحویل حضوری در ۱۰ تا ۱۵ دقیقه',
      'cta.fact3': 'امتیاز ۹٫۲ در وولت',

      // Hours & location
      'visit.eyebrow': 'به ما سر بزنید',
      'visit.title': 'ساعات کاری و آدرس',
      'visit.hours': 'ساعات کاری',
      'visit.address': 'آدرس',
      'visit.phone': 'تلفن',
      'visit.email': 'ایمیل و شبکه‌های اجتماعی',
      'visit.addr': 'خیابان لوینسکی ۴۷، بازار لوینسکی، تل‌آویو-یافا',
      'visit.seating': 'امکان نشستن در رستوران، بسته به جای خالی',
      'day.0': 'یکشنبه',
      'day.1': 'دوشنبه',
      'day.2': 'سه‌شنبه',
      'day.3': 'چهارشنبه',
      'day.4': 'پنجشنبه',
      'day.5': 'جمعه',
      'day.6': 'شنبه',
      'hours.weekday': '۱۱:۰۰ تا ۱۶:۳۰',
      'hours.friday': '۱۰:۰۰ تا ۱۷:۰۰',
      'hours.closed': 'تعطیل',

      // Footer
      'footer.addr': 'گورمه سبزی · لوینسکی ۴۷، تل‌آویو',
      'footer.credit': 'طراحی و توسعه:',
      'footer.name': 'ایال برخورداری',
      'mobile.call': 'تماس',
    },
  };

  const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
  const toFaDigits = s => String(s).replace(/\d/g, d => FA_DIGITS[d]).replace(/([۰-۹])\.(?=[۰-۹])/g, '$1٫');

  const originals = new Map(); // element -> { html, attrs, text }
  const listeners = [];
  let current = 'he';
  let head = { title: '', desc: '' };
  let meta = null;
  let map = null;
  let mapSrc = '';

  const attrPairs = el => el.getAttribute('data-i18n-attr').split(';')
    .map(pair => pair.split(':').map(x => x.trim()))
    .filter(pair => pair.length === 2 && pair[0] && pair[1]);

  function remember(el, data) {
    originals.set(el, Object.assign(originals.get(el) || {}, data));
  }

  function capture() {
    document.querySelectorAll('[data-i18n]').forEach(el => remember(el, { html: el.innerHTML }));
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrs = {};
      attrPairs(el).forEach(([name]) => { attrs[name] = el.getAttribute(name); });
      remember(el, { attrs });
    });
    document.querySelectorAll('.price, .num').forEach(el => remember(el, { text: el.textContent }));
    meta = document.querySelector('meta[name="description"]');
    head = { title: document.title, desc: meta ? meta.content : '' };
    map = document.querySelector('.map iframe');
    mapSrc = map ? map.getAttribute('src') : '';
  }

  function lookup(lang, key) {
    if (lang === 'he') return null;
    const dict = STRINGS[lang];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    console.warn('[i18n] missing ' + lang + ' translation: ' + key);
    return null;
  }

  // Prices read "₪79" in Hebrew and English, "۷۹ ₪" in Farsi
  function numberText(el, text, lang) {
    if (lang !== 'fa') return text;
    if (el.classList.contains('price')) return toFaDigits(text.replace(/[^\d.]/g, '')) + ' ₪';
    return toFaDigits(text);
  }

  function apply(lang, persist) {
    if (!LANGS[lang]) lang = 'he';
    current = lang;
    const root = document.documentElement;
    root.lang = lang;
    root.dir = LANGS[lang].dir;

    originals.forEach((o, el) => {
      if (o.html !== undefined) {
        const v = lookup(lang, el.getAttribute('data-i18n'));
        el.innerHTML = v === null ? o.html : v;
      }
      if (o.attrs) {
        attrPairs(el).forEach(([name, key]) => {
          const v = lookup(lang, key);
          el.setAttribute(name, v === null ? o.attrs[name] : v);
        });
      }
      if (o.text !== undefined) el.textContent = numberText(el, o.text, lang);
    });

    document.title = lookup(lang, 'meta.title') || head.title;
    if (meta) meta.content = lookup(lang, 'meta.desc') || head.desc;
    if (map) {
      const src = mapSrc.replace(/([?&])hl=[^&]*/, '$1hl=' + lang);
      if (map.getAttribute('src') !== src) map.setAttribute('src', src);
    }

    const label = document.getElementById('langCurrent');
    if (label) label.textContent = LANGS[lang].label;
    document.querySelectorAll('#langMenu [data-lang]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.lang === lang)));

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
      try {
        const url = new URL(location.href);
        if (lang === 'he') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
        history.replaceState(history.state, '', url);
      } catch (e) { /* file:// pages can't rewrite the URL */ }
    }

    listeners.forEach(fn => fn(lang));
    root.classList.remove('i18n-pending');
  }

  function wireSwitcher() {
    const wrap = document.getElementById('lang');
    if (!wrap) return;
    const btn = document.getElementById('langBtn');
    const menu = document.getElementById('langMenu');
    const items = Array.from(menu.querySelectorAll('[data-lang]'));

    const open = () => {
      menu.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      (items.find(i => i.dataset.lang === current) || items[0]).focus();
    };
    const close = refocus => {
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      if (refocus) btn.focus();
    };

    btn.addEventListener('click', () => (menu.hidden ? open() : close(false)));
    items.forEach((item, i) => {
      item.addEventListener('click', () => { apply(item.dataset.lang, true); close(true); });
      item.addEventListener('keydown', e => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        e.preventDefault();
        items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length].focus();
      });
    });
    document.addEventListener('click', e => { if (!menu.hidden && !wrap.contains(e.target)) close(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) close(true); });
    wrap.addEventListener('focusout', e => { if (!menu.hidden && e.relatedTarget && !wrap.contains(e.relatedTarget)) close(false); });
  }

  function init() {
    capture();
    wireSwitcher();
    let lang = 'he';
    try { lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem(STORAGE_KEY) || 'he'; } catch (e) { /* ignore */ }
    apply(LANGS[lang] ? lang : 'he', false);
  }

  window.I18n = {
    init,
    apply: lang => apply(lang, true),
    t: key => (current !== 'he' && STRINGS[current][key]) || HE_DYNAMIC[key] || key,
    onChange: fn => listeners.push(fn),
    get lang() { return current; },
    strings: STRINGS,
  };
})();
