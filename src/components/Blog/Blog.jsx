import React from 'react'
import './Blog.css'
import netlify from '../../assets/netlify.jpg'
import reactjs from '../../assets/reactjs.jpg'
import htmlcss from '../../assets/htmlcss.jpg'
import json from '../../assets/json.jpg'

function Blog() {
  return (
    <section className='blog-page'>
        <div className='blog-card'>
          <img src={netlify} alt="netlify" />
          <div className="blog-card-description">
          <h2>Netlify Basic - Build & Deploy Modern Basic</h2>
          <p>
We take a look at using Netlify to build, deploy and host modern websites. Netlify makes deploying websites a breeze with awesome features like git integration, automatic deployment, builds on the server, easy https, custom domains, contact forms and much more. We deploy four projects; a static site on our local machine, a static site from a GitHub repo, a Vue CLI app, and a React CLI app.
</p>
          <button><a style= {{textDecoration: 'none'}} href="https://www.youtube.com/watch?v=eOKLccIYcBc"> Watch Video </a></button>
          </div>
        </div>


        <div className='blog-card'>
          <img src={reactjs} alt="reactjs" />
          <div className="blog-card-description">
          <h2>ReactJS Basics - #1 What is React?</h2>
          <p> Academind is your source for online education in the areas of web development, frontend web development, backend web development, programming, coding and data science! No matter if you are looking for a tutorial, a course, a crash course, an introduction, an online tutorial or any related video, we try our best to offer you the content you are looking for. </p>
          <button> <a style={{textDecoration: 'none'}} href="https://www.youtube.com/watch?v=JPT3bFIwJYA"> Watch Video </a></button>
          </div>
        </div>


        <div className='blog-card'>
          <img src={htmlcss} alt="htmlcss" />
          <div className="blog-card-description">
          <h2>HTML & CSS for Beginners </h2>
          <p> In this free course, youll learn how to code with modern HTML and CSS, the main building blocks of any website. If you want to become a successful web developer, this is where you need to start! At the end of more than eight hours of learning where we cover everything from basic HTML elements to working with Flexbox and CSS Grid, youll test your new skills by building a complete web page.</p>
          <button> <a style={{textDecoration: 'none'}} href="https://www.youtube.com/watch?v=iG2jotQo9NI"> Watch Video </a></button>
          </div>
        </div>

        <div className='blog-card'>
          <img src={json} alt="json" />
          <div className="blog-card-description">
          <h2>What is Json </h2>
          <p> In this video I will explain you, what JSON (JavaScript Object Notation) is and what it is used for. We will also take a closer look at the syntax of JSON objects and JSON arrays.</p>
          <button> <a style={{textDecoration: 'none'}} href="https://www.youtube.com/watch?v=0IoG-mSvWSo"> Watch Video </a></button>
          </div>
        </div>
    </section>
  )
}

export default Blog