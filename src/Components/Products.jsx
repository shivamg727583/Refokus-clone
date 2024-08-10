import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

function Products() {
    const [products, setProducts] = useState([
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: false,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
        {
            title: "Rainfall",
            description:
                "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true,
        },
    ]);

    const [move, setMove] = useState(0);

    const mouseEnterHandle = (idx) => {
        const h = idx * 23; 
        setMove(h);

      
        setProducts(products.map((product, index) => {
          index === idx ? { ...product, case: true } : product;
         
              
        }      ));



    };

    const mouseLeaveHandle = (idx) => {
        // Revert the product's 'case' property back to its original value (false)
        setProducts(products.map((product, index) => (
            index === idx ? { ...product, case: false } : product
        )));
    };

    return (
        <div className='w-full mt-24 relative'>
            {/* Pass mouseEnterHandle and mouseLeaveHandle to the Product component */}
            <Product
                products={products}
                mouseEnterHandle={mouseEnterHandle}
                mouseLeaveHandle={mouseLeaveHandle}
            />

            <div className="absolute w-full h-full pointer-events-none top-0">
                <motion.div
                    initial={{ y: move, x: "-50%" }}
                    animate={{ y: move + "rem", x: "-50%" }}
                    transition={{ ease: [.76, 0, .24, 1], duration: .4 }}
                    className="w-[400px] h-[23rem]  absolute left-[45%] -translate-x-1/2  overflow-hidden rounded-xl"
                >
                    <motion.div
                        animate={{ y: -move + "rem" }}
                        transition={{ ease: [.76, 0, .24, 1], duration: .3 }}
                        className="window w-full h-full"
                    >
                        <video
                            className="rounded-xl h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            src={arqitel}
                        ></video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -move + "rem" }}
                        transition={{ ease: [.76, 0, .24, 1], duration: .3 }}
                        className="w-full h-full"
                    >
                        <video
                            className="rounded-xl h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            src={ttr}
                        ></video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -move + "rem" }}
                        transition={{ ease: [.76, 0, .24, 1], duration: .3 }}
                        className="window w-full h-full"
                    >
                        <video
                            className="rounded-xl h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            src={yir}
                        ></video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -move + "rem" }}
                        transition={{ ease: [.76, 0, .24, 1], duration: .3 }}
                        className="window w-full h-full"
                    >
                        <video
                            className="rounded-xl h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            src={yahoo}
                        ></video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -move + "rem" }}
                        transition={{ ease: [.76, 0, .24, 1], duration: .3 }}
                        className="window w-full h-full"
                    >
                        <video
                            className="rounded-xl h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            src={rainfall}
                        ></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Products;
