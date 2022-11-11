import React from "react"
import './About.css'
import ilustrasi from '../../assets/ilustration-satu.png'

function About() {
  return (
    <div className='about-page'>
      <h2> ABOUT ME </h2>
      <p>Perkenalkan saya Meilyana biasa dipanggil meil sama temen temen. Saya lulusan SMA Negeri 10 Kota Tangerang Selatan yang saat ini menempuh belajar System Informasi di Sekolah Tinggi Manajemen Informatika dan Komputer Jakarta STI&K.</p>

      <p>Mempelajari hal baru tentang dunia IT bisa dibilang seru bisa dibilang engga si hehehe. Perkembangan Teknologi yang semakin menjadi jadi sehingga membuat manusia pun harus ikut berinteraksi dengan hal baru dalam Teknologi.</p>

      <p>Kita dapat mencari apapun dari dunia nyata sampai tak nyata pun ada di internet. Berkomunikasi dengan sanak saudara dari jauh semakin mudah. Tinggal bagaimana kita dalam berinisiatif apakah ingin belajar atau hanya stuck di zona nyaman.</p>

      <img src={ilustrasi} alt="ilustrasi" />

      <p>Banyak cara yang dapat dilakukan untuk mempelajari perkembangan technology saat ini. Termasuk yang sedang saya lakukan, mengikuti kegiatan bootcamp. Mengenal proses alur pembuatan website dan mengetahui tools, framework bahasa pemograman yang membantu website menjadi lebih dinamis, dengan tujuan membuat user nyaman dalam berinteraksi dengan website kita.</p>
      </div>
  )
}

export default About