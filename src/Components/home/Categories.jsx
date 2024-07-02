import React from 'react';

function Categories() {
    const data = [
        {
          cateImg: "./images/cat1.png",
          cateName: "women",
        },
        {
          cateImg: "./images/cat7.png",
          cateName: "makeup",
        },
        {
          cateImg: "./images/kids.png",
          cateName: "kids",
        },
        {
            cateImg: "./images/men.png",
            cateName: "men",
        },
    ];
    const scrollToTarget = (offset) => {
        window.scrollTo({ top: offset, behavior: 'smooth' });
    };
    return (
        <div className='category' style={{  left: 0 }}>
            {data.map((value, index) => (
                <div className='box f_flex' key={index} style={{ marginLeft: '20px' }}>
                    <img src={value.cateImg} alt='' /> 
                    <span onClick={() => scrollToTarget(650 + index * 480)}>{value.cateName}</span>
                </div>
            ))}
        </div>
    );
}

export default Categories;
