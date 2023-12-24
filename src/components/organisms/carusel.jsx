import React from 'react';
import {StaticImage} from "gatsby-plugin-image"
import {Carousel} from 'antd';
import * as styles from './carousel.module.scss'

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
            <div className={styles.quoteBlock}>
                <p className={styles.quote}>
                    Всегда радуйтесь, непрестанно молитесь, за все
                    благодарите...
                </p>
                <p className={styles.signature}>
                    Первое послание к Фессалоникийцам святого Апостола Павла
                </p>
            </div>
        </div>
        <div>
            <StaticImage
                src="../../images/slider/slide-2.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
            />
            <div className={styles.quoteBlock}>
                <p className={styles.quote}>
                    Царство уготовано для нас еще до создания мира
                </p>
                <p className={styles.signature}>
                    Святитель Иоанн Златоуст
                </p>
            </div>
        </div>
        <div>
            <StaticImage
                src="../../images/slider/slide-3.jpg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
            />
            <div className={styles.quoteBlock}>
                <p className={styles.quote}>
                    Совершенство христианина – в совершенной любви к
                    ближнему
                </p>
                <p className={styles.signature}>
                    Святитель Игнатий (Брянчанинов)
                </p>
            </div>
        </div>
    </Carousel>
);
export default MyCarousel;