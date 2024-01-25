import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Carousel from './Carousel.jsx';
import Header from './Header.jsx';

import '../styles/Carousel.css';
import '../styles/OverallStyles.css';

import standingMan from "./img/standing_man.png";
import seatingMan from "./img/seating_man.png";
import tariff1Img from "./img/tariff_light.png";
import tariff2Img from "./img/tariff_arrow.png";
import tariff3Img from "./img/tariff_laptop.png";
import greenCheckMark from "./img/green_check_mark.png";
import why_we_img1 from "./img/why_we_clock.png";
import why_we_img2 from "./img/why_we_loupe.png";
import why_we_img3 from "./img/why_we_shield.png";
import why_we_img4 from "./img/why_we_money.png";


function Main() {
    const token = localStorage.getItem('token');
    let isLoggedIn = false;
    const expire = localStorage.getItem('expire');

    if (!!token && !!expire) {
      const expireTime = new Date(Date.parse(expire));
      const timeRemain = expireTime - Date.now();
      isLoggedIn = true ? timeRemain > 0 : false;
      
    }

    return (
      <React.Fragment>
        <nav>
          <Header />
        </nav>
        <section>
          <div className="container">
            <div className="main_search">
              <div>
                <h1>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕЕ ИНН</h1>
                <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                {isLoggedIn && <Link to='request' className="main_search_btn">Запросить данные</Link>}
              </div>
              <div className="main_search_picture">
                <Link to="#"><img src={standingMan} alt="search_man" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className="main_why_we">
              <div className="why_we_card_block">
              <div className="why_we_header">
                <h1>Почему именно мы</h1>
              </div>
              <Carousel show={3}>
              <div className="why_we_card1">
                <img src={why_we_img1} className="card1_img" />
                <div className="card1_text">Высокая и оперативная скорость обработки заявки</div>
              </div>
              <div className="why_we_card2">
                <img src={why_we_img2} className="card2_img" />
                <div className="card2_text">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
              </div>
              <div className="why_we_card2">
                <img src={why_we_img3} className="card3_img" />
                <div className="card3_text">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
              </div>
              <div className="why_we_card2">
                <img src={why_we_img4} className="card4_img" />
                <div className="card3_text">Любой каприз за ваши деньги</div>
              </div>
              <div className="why_we_card2">
                <img src={why_we_img4} className="card4_img" />
                <div className="card3_text">А может и не любой</div>
              </div>
              </Carousel>
            </div>
          </div>
          </div>
        </section>

        <div className="container">
            <div className="main_img">
              <img src={ seatingMan } alt="main picture" />
            </div>
        </div>

        <section>
          <div className="container">
            <div className="main_tariffs">
              <div className="main_tariffs_header">наши тарифы</div>
                <div className="main_tariffs_block">

                  <div className="main_tariffs_block_tariff1">
                    <div className="tariff_details">
                      <div className="tariff_details_header">
                        <div className="tariff_details_header_text">
                          <h1>Beginner</h1>
                          <p>Для небольшого исследования</p>
                        </div>
                        <img src={ tariff1Img } />
                      </div>
                      <div className="tariff_details_body_tariff1">
                      <div className="tariff_current">Текущий тариф</div>
                      <ul className="tariff_prices">
                        <li className="tariff_price1">799 ₽</li>
                        <li className="tariff_price2">1 200 ₽</li>
                      </ul>                                    
                      <div className="tariff_installment">или 150 ₽/мес. при рассрочке на 24 мес.</div>
                      <div className="tariff_conditions">
                        <h3>В тариф входит:</h3>
                        <ul>
                          <li><img src={ greenCheckMark } />Безлимитная история запросов</li>
                          <li><img src={ greenCheckMark } />Безопасная сделка</li>
                          <li><img src={ greenCheckMark } />Поддержка 24/7</li>
                        </ul>
                      </div>
                      <a href="#" className="tariff_btn">Перейти в личный кабинет</a>
                      </div>                            
                    </div>
                  </div>

                  <div className="main_tariffs_block_tariff2">
                    <div className="tariff_details">
                      <div className="tariff_details_header tariff2_details_header">
                        <div className="tariff_details_header_text">
                          <h1>Pro</h1>
                          <p>Для HR и фрилансеров</p>
                        </div>
                        <img src={ tariff2Img } />
                      </div>
                      <div className="tariff_details_body">
                        <ul className="tariff_prices">
                          <li className="tariff_price1">1 299 ₽</li>
                          <li className="tariff_price2">2 600 ₽</li>
                        </ul>                                   
                        <div className="tariff_installment">или 279 ₽/мес. при рассрочке на 24 мес.</div>
                        <div className="tariff_conditions">
                          <h3>В тариф входит:</h3>
                          <ul>
                            <li><img src={ greenCheckMark } />Все пункты тарифа Beginner</li>
                            <li><img src={ greenCheckMark } />Экспорт истории</li>
                            <li><img src={ greenCheckMark } />Рекомендации по приоритетам</li>
                          </ul>
                        </div>
                        <a href="#" className="tariff_inactive_btn">Подробнее</a>
                      </div>
                    </div>
                  </div>
        
                  <div className="main_tariffs_block_tariff3">
                    <div className="tariff_details">
                      <div className="tariff_details_header tariff3_details_header">
                        <div className="tariff3_details_header_text">
                         <h1>Business</h1>
                         <p>Для корпоративных клиентов</p>
                       </div>
                       <img src={ tariff3Img } />
                      </div>
                      <div className="tariff_details_body">
                        <ul className="tariff_prices">
                          <li className="tariff_price1">2 379 ₽</li>
                          <li className="tariff_price2">3 700 ₽</li>
                        </ul>                                    
                        <div className="tariff_conditions conditions_tariff3">
                          <h3>В тариф входит:</h3>
                            <ul>
                              <li><img src={ greenCheckMark } />Все пункты тарифа Pro</li>
                              <li><img src={ greenCheckMark } />Безлимитное количество запросов</li>
                              <li><img src={ greenCheckMark } />Приоритетная поддержка</li>
                            </ul>
                        </div>
                        <a href="#" className="tariff_inactive_btn">Подробнее</a>
                      </div>
                    </div>                     
                  </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

export default Main;
  