import React from 'react';
import {StaticImage} from "gatsby-plugin-image"
import {Carousel} from 'antd';
import * as styles from './carousel.module.css'

const contentStyle = {
    // height: '160px',
    color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
};
const MyCarousel = () => (
    <Carousel id={"home"} autoplay={true} autoplaySpeed={5000}>
        <div>
            <StaticImage
                src="../../images/slider/slide-1.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
            />
            <p className={styles.text}>
                Всегда радуйтесь, непрестанно молитесь, за все
                благодарите...<br />
                Первое послание к Фессалоникийцам святого Апостола Павла
            </p>
        </div>
        <div>
            <StaticImage
                src="../../images/slider/slide-2.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
            />
            <p className={styles.text}>
                Царство уготовано для нас еще до создания мира<br />
                Святитель Иоанн Златоуст
            </p>
        </div>
        <div>
            <StaticImage
                src="../../images/slider/slide-3.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
            />
            <p className={styles.text}>
                Совершенство христианина – в совершенной любви к ближнему<br />
                Святитель Игнатий (Брянчанинов)
            </p>
        </div>
    </Carousel>
);
export default MyCarousel;