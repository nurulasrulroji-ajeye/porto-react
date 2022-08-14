import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import styles from './styles.module.scss'
import photo from './img/photo.png'
import video from './img/video.png'
import editor from './img/editor.png'

const calcX = (y = Number, ly = Number) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x = Number, lx = Number) => (x - lx - window.innerWidth / 2) / 20;


const Media = () => {

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const domTarget = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  )

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api.start({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api.start({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { target: domTarget, eventOptions: { passive: false } }
  )

  return (
    <div className={styles.container}>
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}>
        <section className={styles.contentService}>
          <section className={styles.text}>
            <h3>Whatever you want!</h3>
          </section>
          <section className={styles.content}>
            <section className={styles.card1}>
              <img src={photo} alt="photograph" />
              <h4>Photography</h4>
              <p>Perfect Picture for your moment</p>
              <Link to="/contact" className={styles.btn}>Talk</Link>
            </section>
            <section className={styles.card2}>
              <img src={video} alt="videograph" />
              <h4>Videography</h4>
              <p>Cinematic, Video Content, Event, etc</p>
              <Link to="/contact" className={styles.btn}>Talk</Link>
            </section>
            <section className={styles.card3}>
              <img src={editor} alt="server-side" />
              <h4>Video Editor</h4>
              <p>Cinematic, Video Content, Event, etc</p>
              <Link to="/contact" className={styles.btn}>Talk</Link>
            </section>
          </section>
        </section>
      </animated.div>
    </div>
  )
}

export default Media
