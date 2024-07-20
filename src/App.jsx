import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const SlideInText = () => {
  const sectionRefs = useRef([]);

  const sections = [
    {
      heading: "Disrupt the Paradigm Ecosystem",
      content: "Blue-sky thinking amplifies our synergistic mindshare, leveraging cross-platform ideation to revolutionize the scroll-centric user journey. Prepare for immersive thought leadership.",
      headingFrom: -100,
      contentFrom: 100
    },
    {
      heading: "Blockchain Your Innovation Pipeline",
      content: "Our AI-driven, cloud-native solutions gamify the digital transformation landscape, pivoting seamlessly from holistic methodologies to agile frameworks in the blink of a quarterly review.",
      headingFrom: 100,
      contentFrom: -100
    },
    {
      heading: "Quantum Leap Your Human Capital",
      content: "Cultivating a matrix of bleeding-edge talent incubators, our growth hackers synergize scalable mindfulness with disruptive innovation, creating a vortex of perpetual ideation.",
      headingFrom: -100,
      contentFrom: 100
    },
    {
      heading: "Leverage Unicorn Metrics",
      content: "From conceptualizing our north star KPIs to dockerizing our mission-critical OKRs, we've paradigm-shifted the entire value proposition of data-driven storytelling in the Fourth Industrial Revolution.",
      headingFrom: 100,
      contentFrom: -100
    }
  ];

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      const heading = section.querySelector('h2');
      const content = section.querySelector('p');
      const { headingFrom, contentFrom } = sections[index];
      
      gsap.fromTo(heading,
        { x: headingFrom, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 45%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(content,
        { x: contentFrom, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5, // Delay the paragraph animation
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main>
      <section className="hero">
        <h1>Lizzie Homes Enterprises Inc.</h1>
      </section>
      {sections.map((section, index) => (
        <section key={index} ref={addToRefs} className="content-section">
          <h2>{section.heading}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </main>
  );
};

export default SlideInText;