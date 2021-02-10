import React from 'react';
import './news.css';
import logo from './logo.jpg'
import img from './image.jpg'

const News = () => {
    return (
        <div className='news'>
            <h1>Новости <span>SincereSystems</span></h1>
            <div className='news__container'>
                <div className='post'>
                    <img src={img} alt='img'/>
                    <div className='post__info'>
                        <h2>Презентация компании Sincere Systems</h2>
                        <div>
                            <p>Приглашаем Вас на офлайн презентацию компании Sincere Systems.</p>
                            <p> Уже 14.02.2020 в 15:00 состоится презентация компании в Казахстане, г. Темиртау, Мира
                                71/2, Сити Центр</p>
                        </div>

                        <hr/>
                        <div className='post__footer'>
                            <img src={logo} alt='logo'/>
                            <div>
                                <h6>SincereSystems</h6>
                                <span>2020-02-13</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='post'>
                    <img src={img} alt='img'/>
                    <div className='post__info'>
                        <h2>Приглашаем Вас на офлайн презентацию компании Sincere Systems</h2>
                        <div>
                            <p>Anim occaecat incididunt sint velit officia reprehenderit ad elit elit consectetur culpa
                                incididunt. Ex incididunt pariatur fugiat ex anim ullamco ea. Non quis aliquip irure
                                excepteur Lorem veniam fugiat fugiat ut do et eiusmod. Est Lorem eu dolor ea mollit
                                velit
                                sint.</p>
                            <p>Adipisicing tempor occaecat nostrud ex fugiat et commodo incididunt id amet commodo
                                aliqua
                                ea. Ea elit reprehenderit eiusmod cupidatat magna exercitation sunt. Sint eiusmod
                                est nulla
                                velit esse. <span className='link'>Link View</span> mollit aliqua elit laborum nulla
                                irure.</p>
                            <p>Nisi irure ullamco eiusmod irure reprehenderit ea dolor qui voluptate
                                officia.</p>
                        </div>
                        <hr/>
                        <div className='post__footer'>
                            <img src={logo} alt='logo'/>
                            <div>
                                <h6>SincereSystems</h6>
                                <span>2020-02-13</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News;