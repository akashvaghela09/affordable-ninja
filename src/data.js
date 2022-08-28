import dell from "./Assets/dell.png"
import hp from "./Assets/hp.png"
import lenovo from "./Assets/lenovo.png"
import { TbTruckDelivery } from "react-icons/tb"
import { FaMoneyBillAlt, FaRegHandPeace } from "react-icons/fa"
import { GiPriceTag } from "react-icons/gi"
import { MdOutlinePriceChange } from "react-icons/md"
import { GoPackage } from "react-icons/go"

export const data = {
    "brandList" : [
        {
            "name": "Dell",
            "img": dell,
            "to": "/dell"
        },
        {
            "name": "HP",
            "img": hp,
            "to": "/hp"
        },
        {
            "name": "Lenovo",
            "img": lenovo,
            "to": "/lenovo"
        }
    ],
    "howItWorks": [
        {
            "tag": "Check Price",
            "desc": "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect  price for you.",
            "icon": <GiPriceTag />
        },
        {
            "tag": "Pay Amount",
            "desc": "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect  price for you.",
            "icon": <FaMoneyBillAlt />
        },
        {
            "tag": "Schedule Delivery",
            "desc": "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect  price for you.",
            "icon": <TbTruckDelivery />
        },
    ],
    "whyUs": [
        {
            "tag": "Best Prices",
            "desc": "Buy laptop at best market price",
            "icon": <MdOutlinePriceChange />
        },
        {
            "tag": "Simple & Convenient",
            "desc": "Check price, pay amount & schedule delivery",
            "icon": <FaRegHandPeace />
        },
        {
            "tag": "Free Doorstep Delivery",
            "desc": "No fees for delivery across 1500 cities across india",
            "icon": <GoPackage />
        }
    ],
    "faq": [
        {
            "question": "Why I should choose Affordable Ninja?",
            "answer": "Our Main goal is to make people believe that they can buy laptops at affordable price and dont go for second thought, for students we will give laptop without any margin....."
        },
        {
            "question": "When will I get My Laptop?",
            "answer": "5-7 Working days, because we don't expedite things but we can deliver on promised date."
        },
        {
            "question": "What is AffordableNinja, how it works?",
            "answer": "We have started-up only with Trust in you Guys, Hoping Same Trust from you Guys Get your order unbox it and then Pay."
        },
        {
            "question": "How to place Order?",
            "answer": "Visit our website www.affordableninja.in select available laptops and Go for it!!!!"
        },
        {
            "question": "Do I need to make pre-payment for My laptop before getting delievred to me?",
            "answer": "Offcourse Not, but partially beacause We as a startup need some assurance from our customers to avoide false orders."
        },
        {
            "question": "What I can expect?",
            "answer": "AffordableNinja sells refurbished laptops at affordable price, so please No warranty No gauranty.....But it worths your Money"
        },
        {
            "question": "Can I return My Affordable Laptop?",
            "answer": "Yes, only genuine reasons *within 48hrs from date of delivery along with unboxing video*"
        },
        {
            "question": "Can I sell My Laptop with AffordableNinja?",
            "answer": "No, not right now... AffordableNinja will comeup with Selling very soon!!!"
        },
        {
            "question": "How Can I contact AffordableNinja for my Enquiries?",
            "answer": "Multiple ways....Whatsapp, call, SMS, email....... *Calls preferred"
        },
        {
            "question": "How to Track My orders?",
            "answer": "Delivery partner receipt will be shared to you as per your communication mode"
        },
        {
            "question": "When Can I Cancel My order?",
            "answer": "Until My laptop gets packed and out for delivery, I can cancel my order."
        },
        {
            "question": "How My Laptop Looks?",
            "answer": "Product will be in refurbished condition and may have a few visible signs of earlier use."
        }
    ],
    "reviews": [
        {
            "name": "Saranraj",
            "city": "Bangalore",
            "desc": "I must say that i am really impressed with the very good effort by affordable ninja. keep going."
        },
        {
            "name": "John Cena",
            "city": "Goa",
            "desc": "I must say that i am really impressed with the very good effort by affordable ninja. keep going."
        },
        {
            "name": "Osama",
            "city": "Patna",
            "desc": "I must say that i am really impressed with the very good effort by affordable ninja. keep going."
        },
        {
            "name": "MS Dhoni",
            "city": "Jammu",
            "desc": "I must say that i am really impressed with the very good effort by affordable ninja. keep going."
        },
        {
            "name": "Ronaldo",
            "city": "Surat",
            "desc": "I must say that i am really impressed with the very good effort by affordable ninja. keep going."
        },
        {
            "name": "Shakti Kapoor",
            "city": "Delhi",
            "desc": "I must say that i am really impressed with the very good effort by affordable ninja. keep going."
        },

    ],
    "stock": [
        {
            "id": "fssd324",
            "company":"Dell",
            "model": "Latitude",
            "modelNumber": "E 7480",
            "launchPrice": "60000",
            "price": "21000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 30,
            "specs": {
                "backlight": true,
                "processor": "Core i5",
                "processorGen": "7th",
                "ram": "8 GB",
                "ramType": "DDR4",
                "storage": "256 GB",
                "storageType": "SSD",
                "touchscreen": true
            }
        },
        {
            "id": "sfdsdf2423",
            "company":"Dell",
            "model": "Latitude",
            "modelNumber": "E 7450",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 10,
            "specs": {
                "backlight": true,
                "processor": "Core i7",
                "processorGen": "5th",
                "ram": "8 GB",
                "ramType": "DDR4",
                "storage": "256 GB",
                "storageType": "SSD",
                "touchscreen": true
            }
        },
        {
            "id": "sdf24324213",
            "company":"Dell",
            "model": "Latitude",
            "modelNumber": "7440",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 10,
            "specs": {
                "backlight": false,
                "processor": "Core i7",
                "processorGen": "4th",
                "ram": "4 GB",
                "ramType": "DDR3",
                "storage": "500 GB",
                "storageType": "HDD",
                "touchscreen": true
            }
        },
        {
            "id": "sfrw424342",
            "company":"Dell",
            "model": "Latitude",
            "modelNumber": "5450",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 10,
            "specs": {
                "backlight": false,
                "processor": "Core i5",
                "processorGen": "5th",
                "ram": "8 GB",
                "ramType": "DDR3",
                "storage": "256 GB",
                "storageType": "SSD",
                "touchscreen": true
            }
        },
        {
            "id": "sdfsdr43524",
            "company":"HP",
            "model": "Elitebook",
            "modelNumber": "840 G3",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 20,
            "specs": {
                "backlight": true,
                "processor": "Core i7",
                "processorGen": "6th",
                "ram": "8 GB",
                "ramType": "DDR4",
                "storage": "256 GB",
                "storageType": "SSD",
                "touchscreen": false
            }
        },
        {
            "id": "dfdss4353452",
            "company":"HP",
            "model": "Elitebook",
            "modelNumber": "840 G3",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 20,
            "specs": {
                "backlight": true,
                "processor": "Core i5",
                "processorGen": "6th",
                "ram": "8 GB",
                "ramType": "DDR3",
                "storage": "256 GB",
                "storageType": "SSD",
                "touchscreen": false
            }
        },
        {
            "id": "dsf435435",
            "company":"HP",
            "model": "Elitebook",
            "modelNumber": "840 G1",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 20,
            "specs": {
                "backlight": false,
                "processor": "Core i5",
                "processorGen": "4th",
                "ram": "4 GB",
                "ramType": "DDR4",
                "storage": "500 GB",
                "storageType": "HDD",
                "touchscreen": false
            }
        },
        {
            "id": "bd56757jj",
            "company":"Lenovo",
            "model": "Thinkpad",
            "modelNumber": "T 460",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 20,
            "specs": {
                "backlight": true,
                "processor": "Core i5",
                "processorGen": "6th",
                "ram": "8 GB",
                "ramType": "DDR3",
                "storage": "256 GB",
                "storageType": "SSD",
                "touchscreen": false
            }
        },
        {
            "id": "sdfsf4654565h",
            "company":"Lenovo",
            "model": "Thinkpad",
            "modelNumber": "T 440",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 20,
            "specs": {
                "backlight": false,
                "processor": "Core i5",
                "processorGen": "4th",
                "ram": "4 GB",
                "ramType": "DDR3",
                "storage": "256 GB",
                "storageType": "HDD",
                "touchscreen": false
            }
        },
        {
            "id": "xvdfgr46",
            "company":"Lenovo",
            "model": "Thinkpad",
            "modelNumber": "T 440",
            "launchPrice": "60000",
            "price": "20000",
            "cover": "",
            "images": [],
            "infoUrl": "",
            "total": 20,
            "specs": {
                "backlight": false,
                "processor": "Core i7",
                "processorGen": "5th",
                "ram": "8 GB",
                "ramType": "DDR3",
                "storage": "256 GB",
                "storageType": "SSD",
                "touchscreen": false
            }
        },
    ],
    "users": [
        {
            "username": "saran",
            "password": "123"
        }
    ]
}