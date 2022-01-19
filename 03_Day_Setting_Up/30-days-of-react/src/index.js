import React from 'react'
import ReactDOM from 'react-dom'
import TechsImg from './assets/images/frontend_technologies.png'
import AVATAR from './assets/images/profile_picture.png'

const imgStyle = {maxWidth: 100 + '%'}

const ex1 = (
  <div>
    <img src={TechsImg} alt='frontend technologies' style={imgStyle}/>
  </div>
)

const ex2 = (
  <div className='form__container'>
    <div className='form__content'>
      <h1 className='form__title'>subscribe</h1>
      <p className='form__description'>Sign up with your email address to receive news and updates.</p>
      <div>
        <input className='form__input' type={'text'} placeholder='First name'></input>
        <input className='form__input' type={'text'} placeholder='Last name'></input>
        <input className='form__input' type={'email'} placeholder='Email'></input>
      </div>
      <button className='form__btn'>Subscribe</button>
    </div>
  </div>
)

const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python',
                'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 
                'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']

const ex3 = (
  <div className='profile__container'>
    <div className='profile__content'>
      <div className='profile__infor'>
        <img src={AVATAR} alt='avatar'/>
        <h3 className='profile__title'>Asabeneh Yetayeh</h3>
        <p className='profile__description'>Senior Developer, Finland</p>
      </div>
      <h3 className='profile__title'>Skills</h3>
      <ul className='skills__wrapper'>
        {skills.map((item,  index) => <li className='skills__item' key={index}>{item}</li>)}
      </ul>
    </div>
  </div>
)

const app = (
  <div>
    {ex1}
    {ex2}
    {ex3}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)