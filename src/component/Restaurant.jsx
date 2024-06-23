import React from 'react';
import Card from './Card';

const restaurantData = [
        {
          id: 1,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6JZC763T6UAUE/hero/82e30dbc97874133b4e48fd6629ca2e4_1712797373373914118.webp",
          alt: "Pasta",
          title: "พาสต้า101 (Pasta101 Saochingcha) - เสาชิงช้า",
          description: "Pasta",
        },
        {
          id: 2,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6NCJ3MHPE6DAA/hero/66fe46cbe9f545a1ac348d9b8a66e57b_1718268655917464617.webp",
          alt: "Rice noodles",
          title: "อาหารตามสั่งหลังวัด - ชนะสงคราม",
          description: "Rice noodles",
        },
        {
          id: 3,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3TCENJ1RVNUUE/hero/9d00babdf9254dcb9db6eb9156cb338f_1661229355793487356.webp",
          alt: "น้ำแข็งไส",
          title: "เช็งซิมอี๊ - เสาชิงช้า",
          description: "น้ำแข็งไส",
        },
        {
          id: 4,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2TWL7NAEKLGC2/hero/7777999515394bb3bb068565d4dcbef3_1622966034570936069.webp",
          alt: "ชา กาแฟ",
          title: "กาแฟชาวดอย - อนุสาวรีย์ประชาธิปไตย",
          description: "ชา กาแฟ",
        },
        {
          id: 5,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C22KGX5BGAXBWA/hero/6ea14004a4074f68964a000f3ab11ebf_1630988621702295480.webp",
          alt: "พิซซ่า",
          title: "Jason Bourn - kitchen",
          description: "พิซซ่า",
        },
        {
          id: 6,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZMTHA3WE4CJG6/hero/ee965b35daa24d79bf15cc6faaa80b3e_3d99eb235aba4d988047c8fb3b45dac0_1717951299053042794.webp",
          alt: "เค้ก, อาหารทะเล, ชา กาแฟ",
          title: "กล่องดินสอ - ถนนดินสอ",
          description: "เค้ก, อาหารทะเล, ชา กาแฟ",
        },
];

function Restaurant() {
  return (
    <div className="flex flex-wrap justify-center">
      {restaurantData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default Restaurant;
