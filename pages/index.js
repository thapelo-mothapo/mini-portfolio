import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thapelo&apos;s Portfolio</title>
        <meta name="description" content="Thapelo&apos;s mini portfolio for Sovtech Grads Assesment" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/sovtech_favicon.png" />
      </Head>


      <main className={styles.main}>

        <section className={styles.intro}>
            <img title="Thapelo " src="/profile-img.jpg" alt="Picture of Thapelo" className={styles.profile}/>

            <div className={styles.icontent}>
              <h1>Hi <a href="https://www.sovtech.co.za/" target="_blank" rel="noreferrer" className={styles.brand}>SovTech</a> team</h1>
              <h2>I am Thapelo.</h2>
              <p>I enjoy playing the piano, but I am still learning though :)</p>
            </div>

        </section>

        <section className={styles.mybackground}>

            <div className={styles.section}>
              <p >I am a 21-year-old pioneer in software development, especially client-side development. I find that interacting with users of the system I am designing and developing for, very fulfilling when I see amazement written on their face.</p>
              <img title="Amazed" src="https://i1.wp.com/media4.giphy.com/media/26BkNyQ3ovYKrJTcQ/giphy.gif" alt="A person with an amazed facial expression"/>
            </div>
         

            <div className={styles.section}>
              <img title="working late" src="https://cdn.prod.openfit.com/uploads/2017/01/How-to-Lose-Weight-if-You-Work-the-Night-Shift.jpg" alt="Person pulling an all nighter"/>

              <p >The need for designing and developing accessible, beautiful, interactive, and efficient systems is what keeps me at night researching and learning better ways to lift the limitations on how users access the content and products we provide.</p>
            </div>
           
        </section>

        <section className={styles.aboutcontent}>
          <h2>I need to work @ <a href="https://www.sovtech.co.za/" rel="noreferrer" target="_blank" className={styles.brand}>SovTech</a> because:</h2> 
          <p>Honestly speaking, I am attracted and sold the most by Sovtech&apos;s motto of developing custom solutions. I support and believe in the idea of giving organizations of different sizes a unique identity online as it does make a difference in allowing them to better connect and communicate with their users. This is a motto I can stand behind and help fulfill it.</p>

          <p>Looking at the Sovtech clients&apos; section there are a lot of familiar brands, most I use daily. This brings a lot of curiosity and excitement when I think about being part of a team that designs and develops systems that help these brands serve us better as consumers of content and products.</p>

          <p>With the above said, I believe being part of the Sovtech team will allow me to grow as a designer/developer, in the process changing my overall world view on designing and developing systems that serve clients and their users better.</p>

       
        </section>

    
        
      </main>

      <footer className={styles.footer}>
          <small><p>Designed by <a href="/">Thapelo</a></p></small>
      </footer>
    </div>
  )
}
