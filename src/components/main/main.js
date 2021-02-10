import React from 'react';
import './main.css';

const Main = () => {

    return (
        <div className='main__container'>
            <div className='main__block'>
                <h1>Sincere Systems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur delectus distinctio
                    doloremque ea enim est explicabo fuga, fugit illum incidunt iusto magni maxime non officiis
                    porro quaerat repudiandae sequi?</p>
                <div className='main__btn'>
                    <div className="container">
                        <a className="btn btn-1">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Click
                        </a>
                        <a className="btn btn-1">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Click
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;