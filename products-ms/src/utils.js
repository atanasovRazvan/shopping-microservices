const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

const products = [
    {
        productId: "1",
        title: "Nike Revolution 6 Next Nature Men's Road Running Shoes",
        description: loremIpsum,
        imageSource: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-road-running-shoes-JQzLqf.png",
        price: "259 EUR"
    },
    {
        productId: "2",
        title: "Nike Go FlyEase Easy On/Off Shoes",
        description: loremIpsum,
        imageSource: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6362ebb8-ad24-428c-9b2b-293e99410f42/go-flyease-easy-on-off-shoes-84H33P.png",
        price: "119 EUR"
    },
    {
        productId: "3",
        title: "Nike WearAllDay Younger Kids' Shoes",
        description: loremIpsum,
        imageSource: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e6ea66d1-fd36-4436-bcac-72ed14d8308d/wearallday-younger-shoes-5bnMmp.png",
        price: "339 EUR"
    },
    {
        productId: "4",
        title: "Jordan Air 200E Men's Shoes. Nike RO",
        description: loremIpsum,
        imageSource: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9af02a51-93e7-4cda-85fe-d531285fd701/jordan-air-200e-shoes-rvXhLp.png",
        price: "499 EUR"
    },
    {
        productId: "5",
        title: "Nike Sportswear Force 1",
        description: loremIpsum,
        imageSource: "https://img01.ztat.net/article/spp-media-p1/4452722b68423b648edb68540a7e5fdf/239758b3d7f841e9b381b173e29da6ea.jpg?imwidth=1800&filter=packshot",
        price: "139 EUR"
    },
    {
        productId: "6",
        title: "Nike Revolution 6 Next Nature Men's Road Running Shoes",
        description: loremIpsum,
        imageSource: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-road-running-shoes-JQzLqf.png",
        price: "239 EUR"
    },
    {
        productId: "7",
        title: "Adidas Superstar Core Black and White Shoes",
        description: loremIpsum,
        imageSource: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",
        price: "499 EUR"
    },
    {
        productId: "8",
        title: "Adidas Originals FORUM MID J UNISEX",
        description: loremIpsum,
        imageSource: "https://img01.ztat.net/article/spp-media-p1/e6e6074f6cc44f1cb289fa69f9df7e15/a3e6ec86010b425fb9981776a077d4be.jpg?imwidth=762",
        price: "359 EUR"
    },
    {
        productId: "9",
        title: "Adidas Stan Smith J FX7519",
        description: loremIpsum,
        imageSource: "https://img.eobuwie.cloud/eob_product_1800w_1800h(d/1/9/f/d19f034bfbc6c46a37be50debd97f17fc574eb28_0000207770294_01_mf_5.jpg,webp)/pantofi-adidas-stan-smith-j-fx7519-ftwwht-ftwwht-green.webp",
        price: "399 EUR"
    },
    {
        productId: "10",
        title: "Adidas Ownthegame 2.0 H00469",
        description: loremIpsum,
        imageSource: "https://img.eobuwie.cloud/eob_product_1800w_1800h(b/c/e/3/bce38ddf7af03fdb768c0af422b8b9d33a705b26_0000208111645_01_pl.jpg,webp)/pantofi-adidas-ownthegame-2-0-h00469-cwhite-cblack-cwhite.webp",
        price: "219 EUR"
    },
    {
        productId: "11",
        title: "REEBOK CLASSIC LEATHER",
        description: loremIpsum,
        imageSource: "https://sizeer.ro/media/cache/gallery/rc/cmp7n8jz/reebok-classic-leather-barbati-sneakers-alb-gx2257.jpg",
        price: "199 EUR"
    },
    {
        productId: "12",
        title: "Reebok Club C 85 AR0457 White/Navy",
        description: loremIpsum,
        imageSource: "https://img.eobuwie.cloud/eob_product_656w_656h(c/6/1/1/c61160146aa1620301f17927b5dafc7fdb9b9c3b_0000199643613_1_.jpg,jpg)/pantofi-reebok-club-c-85-ar0457-white-navy.jpg",
        price: "159 EUR"
    },
    {
        productId: "13",
        title: "Reebok Club C 85",
        description: loremIpsum,
        imageSource: "https://assets.reebok.com/images/w_600,f_auto,q_auto/0c72b58edfb7466887d3aebc010a5d96_9366/Club_C_85_Men's_Shoes_White_GY7151_01_standard.jpg",
        price: "329 EUR"
    },
    {
        productId: "14",
        title: "Reebok Club C Double Shoes",
        description: loremIpsum,
        imageSource: "https://assets.reebok.com/images/w_600,f_auto,q_auto/6de60dba11f7461f8a94aa9b015a7f19_9366/Club_C_Double_Shoes_White_FV5658_01_standard.jpg",
        price: "449 EUR"
    },
    {
        productId: "15",
        title: "Incaltaminte sport Reebok",
        description: loremIpsum,
        imageSource: "https://ccc.eu/media/cache/gallery/rc/sikfzwyv/images/22/2277723/CCC_5904248210588_07_LR.jpg",
        price: "349 EUR"
    },
]

module.exports = products;
