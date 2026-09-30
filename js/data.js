const products = [
    {
        id: 1,
        name: "برگر مخصوص",
        price: "۲۵۰۰۰۰",
        category: "برگر",
        image: "../assets/image/makhsos.jfif",
        description: "برگری لذیذ با گوشت گریل‌شده، پنیر، سبزیجات تازه و سس مخصوص که هر لقمه‌اش پر از طعم و مزه است."
    },
    {
        id: 2,
        name: "چیز برگر",
        price: "۲۲۰۰۰۰",
        category: "برگر",
        image: "../assets/image/chiz.jfif",
        description: "برگری خوش‌طعم با گوشت گریل‌شده، پنیر چدار، نان نرم و سس مخصوص؛ انتخابی کلاسیک برای طرفداران طعم اصیل برگر."
    },
    {
        id: 3,
        name: "برگر قارچ و پنیر",
        price: "۲۷۰۰۰۰",
        category: "برگر",
        image: "../assets/image/panir.jfif",
        description: "ترکیبی وسوسه‌انگیز از گوشت گریل‌شده، قارچ تفت‌داده‌شده، پنیر آب‌شده و سس مخصوص، برای عاشقان طعم قارچ و پنیر"
    },
    {
        id: 4,
        name: "برگر دوبل",
        price: "۳۲۰۰۰۰",
        category: "برگر",
        image: "../assets/image/dobl.webp",
        description: "دو لایه گوشت گریل‌شده در کنار پنیر آب‌شده و سس مخصوص، ترکیبی خوشمزه برای تجربه یک برگر متفاوت و دلچسب."
    },
    {
        id: 5,
        name: "پیتزا مخصوص",
        price: "۳۵۰۰۰۰",
        category: "پیتزا",
        image: "../assets/image/pizza.1.jfif",
        description: "پیتزا مخصوص با سس ویژه, پنیر موزارلا, ژامبون, قارچ, فلفل دلمه ای و زیتون.یک انتخاب عالی برای عاشقان پیتزا"
    },
    {
        id: 6,
        name: "پیتزا پپرونی",
        price: "۳۳۰۰۰۰",
        category: "پیتزا",
        image: "../assets/image/peperoni.webp",
        description: "پیتزایی خوشمزه با پپرونی‌های لذیذ، پنیر موزارلای کش‌دار و سس مخصوص که ترکیبی جذاب از طعم پنیر و ادویه‌های دلپذیر را ارائه می‌دهد."
    },
    {
        id: 7,
        name: "پیتزا مرغ",
        price: "۳۲۰۰۰۰",
        category: "پیتزا",
        image: "../assets/image/morg.webp",
        description: "ترکیبی لذیذ از مرغ مزه‌دارشده، قارچ تازه، پنیر کش‌دار و سس مخصوص روی خمیر پیتزای خوش‌طعم."
    },
    {
        id: 8,
        name: "پیتزا گوشت ",
        price: "۳۴۰۰۰۰",
        category: "پیتزا",
        image: "../assets/image/gosht.webp",
        description: "گوشت طعم‌دار، قارچ تازه و پنیر موزارلا در کنار سس مخصوص، ترکیبی خوشمزه برای عاشقان پیتزا."
    },
    {
        id: 9,
        name: "فیله سوخاری",
        price: "۲۸۰۰۰۰",
        category: "سرخ شده",
        image: "../assets/image/file.webp",
        description: "ترکیبی هیجان‌انگیز از بال‌های خوش‌طعم و فیله‌های ترد مرغ، مناسب برای یک وعده لذیذ."
    },
    {
        id: 10,
        name: "بال سوخاری",
        price: "۲۶۰۰۰۰",
        category: "سرخ شده",
        image: "../assets/image/pizza.1.jfif",
        description: "ترکیبی هیجان‌انگیز از بال‌های خوش‌طعم و فیله‌های ترد مرغ، مناسب برای یک وعده لذیذ."
    },
    {
        id: 11,
        name: "مرغ سوخاری",
        price: "۲۹۰۰۰۰",
        category: "سرخ شده",
        image: "../assets/image/",
        description: "تکه‌های مرغ مزه‌دارشده با پوششی طلایی و ترد، همراه با عطر ادویه‌های مخصوص و طعمی به‌یادماندنی."
    },
    {
        id: 12,
        name: "پاستا الفردو",
        price: "۲۹۹۰۰۰",
        category: "پاستا",
        image: "../assets/image/alferdo.webp",
        description: "پاستای خوش‌عطر با سس آلفردوی خامه‌ای، پنیر و ترکیبی دلپذیر از طعم‌های غنی و دلچسب."
    },
    {
        id: 13,
        name: "پاستا گوشت",
        price: "۳۰۰۰۰۰",
        category: "پاستا",
        image: "../assets/image/pizza.1.jfif",
        description: "پاستای لذیذ با گوشت طعم‌دار و سس مخصوص، ترکیبی خوشمزه برای دوست‌داران غذاهای ایتالیای"
    },
    {
        id: 14,
        name: "سیب زمینی ویژه ",
        price: "۱۸۰۰۰۰",
        category: "پیش غذا",
        image: "../assets/image/sib.webp",
        description: "سیب‌زمینی‌های طلایی و ترد با ترکیبی خوشمزه از پنیر و سس مخصوص؛ یک پیش‌غذای وسوسه‌انگیز"
    },
    {
        id: 15,
        name: "قارچ سوخاری",
        price: "۱۷۰۰۰۰",
        category: "پیش غذا",
        image: "../assets/image/garch.jfif",
        description: "قارچ‌های تازه با روکشی طلایی و ترد، میان‌وعده‌ای خوشمزه با بافتی لطیف و طعمی دلچسب"
    },
    {
        id: 16,
        name: "سالاد سزار",
        price: "۱۹۰۰۰۰",
        category: "سالاد",
        image: "../assets/image/sezar.jfif",
        description: "ترکیبی تازه از کاهو، مرغ گریل‌شده، نان کروتان، پنیر پارمزان و سس مخصوص سزار."
    },
    {
        id: 17,
        name: "سالاد فصل",
        price: "۱۴۰۰۰۰",
        category: "سالاد",
        image: "../assets/image/fasl.webp",
        description: "ترکیبی رنگارنگ از سبزیجات تازه و ترد، انتخابی سبک و باطراوت برای همراهی با غذای اصلی."
    },
    {
        id: 18,
        name: "نوشابه",
        price: "۴۵۰۰۰",
        category: "نوشیدنی",
        image: "../assets/image/noshabe.webp",
        description: "نوشیدنی گازدار و خنک برای تکمیل وعده غذایی و لذت بردن از طعم غذاهای موردعلاقه‌ات."
    },
    {
        id: 19,
        name: "موهیتو",
        price: "۱۲۰۰۰۰",
        category: "نوشیدنی",
        image: "../assets/image/mohito.jfif",
        description: "ترکیبی خنک و باطراوت از نعناع و لیموترش با طعمی ترش‌وشیرین؛ انتخابی دلچسب برای روزهای گرم."
    }
];

export default products;

