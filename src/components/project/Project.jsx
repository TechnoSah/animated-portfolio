import './project.scss';
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from 'react';

const items = [
    {
        id:1,
        title:"E-Commerce",
        img:"https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quasi cupiditate aut ipsam? Distinctio soluta accusamus, incidunt molestias, tempore optio dicta eum ut magni rem qui voluptatem, aliquam cupiditate ullam.",
        link:"#"
    },
    {
        id:2,
        title:"TO DO App - Vue JS",
        img: "https://img.freepik.com/free-vector/people-making-list-illustration_53876-43029.jpg?t=st=1716303857~exp=1716307457~hmac=8e8c67134879361f6b017f71c29b1f30b7ea1776d043b52e4992f25ff42a1cf2&w=740",
        desc:"TODO List built on Local Storage using Vue JS Technology",
        link:"https://todo-sahil.netlify.app/"
    },
    {
        id:3,
        title:"Ride Sharing App - Vue JS",
        img:"https://img.freepik.com/free-vector/car-sharing-concept-illustration_114360-15011.jpg?size=626&ext=jpg",
        desc:"Ride Sharing Web Application, where user can select profiles as a driver or passenger and share vehicles based on location. Technologies used - VUE JS, Laravel, Tailwind, MySQL, REST APIs, JavaScript Google Maps API etc.",
        link:"https://github.com/TechnoSah/TripShare.git"
    },
    {
        id:4,
        title:"Image Search",
        img:"imgsearch.png",
        desc:"Image Search - Search for any prompt images will be listed. Technologies used - Vite - React, react-bootstrap, Unsplash API",
        link:"https://imgsearch-sahil.netlify.app/"
    },
    {
        id:5,
        title:"Portfolio Website - React JS",
        img:"https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Built an portfolio website using React JS, Sass, framer motion library for animations, mobile responsive.",
        link:"https://portfolio-sahilbhowad.netlify.app/"
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return(
    <section>
        <div className="container">
            <div className="wrapper">
        <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button><a href={item.link}>See Demo</a></button>
            </motion.div>
            </div>
        </div>
    </section>
    );
};

const Project = () => {

    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return(
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Explorations</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item)=>(
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Project;