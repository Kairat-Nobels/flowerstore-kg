import React from 'react';
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem';

const collections = [
    {
        image: "https://i.pinimg.com/1200x/14/18/49/14184974b9c518a0a12f346dd6c01c0c.jpg",
        title: "Өзгөчө күндөр үчүн гүлдөр",
        comment: "Туулган күн, маараке же маанилүү жолугушуу үчүн кооз букет тандаңыз. Ар бир көз ирмемди гүл менен дагы да өзгөчө кылабыз.",
        reverse: false
    },
    {
        image: "https://i.pinimg.com/736x/9f/d9/f5/9fd9f510275a396253ebe265f641f87c.jpg",
        title: "Жөн эле белекке",
        comment: "Кээде гүл берүү үчүн өзгөчө себептин деле кереги жок. Жакыныңызды кубантуу үчүн жөн гана жылуу маанай тартуулаңыз.",
        reverse: true
    },
    {
        image: "https://i.pinimg.com/736x/18/25/a0/1825a0827803739f4f1d6b0e829004c7.jpg",
        title: "Шыктандырган букеттер",
        comment: "Үйгө же жумуш бөлмөсүнө назик гүл композициясын коюп, жагымдуу жана жарашыктуу атмосфера түзүңүз.",
        reverse: false
    }
];

const HomeCollection = () => (
    <div className="home-collection">
        <div className="page-container">
            {collections.map((item, idx) => (
                <HomeCollectionItem
                    key={idx}
                    image={item.image}
                    title={item.title}
                    comment={item.comment}
                    reverse={item.reverse}
                />
            ))}
        </div>
    </div>
);

export default HomeCollection;
