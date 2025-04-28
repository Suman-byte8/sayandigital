import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from "../assets/aboutUs/1200 x 426 info_banner.png";
import deliveryBanner from "../assets/aboutUs/770 x 120 delivery_banner.png";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="content">
        <div className="info_banner w-full h-auto my-8">
          <img src={banner} alt="" />
        </div>

        <div className="info flex flex-col gap-3 my-8">
          <h1 className="text-xl sm:text-2xl font-bold ">
            Welcome to Sayan Digital! We simplify printing and gifting for you.
          </h1>
          <p className="text-md sm:text-lg text-[#969696] font-semibold text-pretty leading-relaxed">
            With over 6 years of experience in the print industry, Sayan Digital
            is your go-to print-on-demand platform based in West Bengal. We
            proudly serve over 10,000 offline customers and offer a wide range
            of printing services. <br />
            While we're still growing, our commitment to delivering high-quality
            prints and personalized gifting solutions remains unmatched. Our
            sole branch in Malda (732103) is ready to help you with your
            printing needs, and we aim to serve even more customers across the
            region with the same dedication and care. <br />
            Let Sayan Digital help bring your creative ideas to life!
          </p>

          <h1 className="text-xl sm:text-2xl font-bold">
            The Story of Sayan Digital: From Humble Beginnings to Big Dreams
          </h1>
          <p className="text-md sm:text-lg text-[#969696] font-semibold text-pretty leading-relaxed">
            In 2015, Sayan Saha had a dream — a vision of creating a business
            that would not just print, but bring ideas to life. With a passion
            for design and a keen eye for detail, Sayan opened the doors of
            Sayan Digital in a small corner of Malda, West Bengal. Armed with a
            few essential printing machines and a dedication to offering
            high-quality services, Sayan began serving the local community.
            <br />
            At first, it was just a tiny store with a big dream. Sayan worked
            and night, building relationships with customers, understanding
            their needs, and ensuring that every print job was done with
            perfection. Word spread quickly, and soon Sayan Digital became known
            for its reliability, precision, and personalized service. With each
            passing year, the store grew, and so did its aspirations. What began
            as a small operation soon began to cater to a wider audience.
            Customers from nearby areas and businesses in need of unique print
            products began walking in, seeking out Sayan Digital for its
            attention to detail and commitment to quality.
            <br />
            By 2018, Sayan Digital’s reputation spread beyond Malda. Though
            still a one-store operation, Sayan envisioned a future where Sayan
            Digital would not only serve the local community but would become a
            go-to destination for printing and gifting services across West
            Bengal. But Sayan wasn’t satisfied with just local success. His big
            vision was always to grow, to expand the reach of Sayan Digital, and
            to make it a name synonymous with quality and innovation. Today,
            with over 10,000 satisfied offline customers and a loyal following,
            Sayan Digital continues to grow, staying true to its roots while
            aiming for bigger horizons.
            <br />
            From that small store in Malda to a future of limitless
            possibilities, Sayan Digital’s journey is a testament to the power
            of hard work, passion, and an unwavering commitment to turning
            creative visions into reality.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold">
            We Can't Wait to Hear From You!
          </h2>
          <p className="text-md sm:text-lg text-[#969696] font-semibold text-pretty leading-relaxed">
            Sayan Digital is a one-stop shop for both print and personalized
            gift services. Whether you're a business owner or an individual,
            we’re here to make your printing experience hassle-free. We
            specialize in everything from business cards, letterheads, and
            packaging to marketing brochures and exhibition banners. Our vast
            library of templates makes it easy to design invitations,
            personalized gifts, and process photo prints—all at unbeatable
            prices.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold">Our Mission</h2>
          <p className="text-md sm:text-lg text-[#969696] font-semibold text-pretty leading-relaxed">
            At Sayan Digital, we have a two-fold mission. First, we aim to put a
            smile on every customer’s face by providing a seamless, easy
            printing experience. Second, we strive to grow with scalability and
            efficiency, ensuring that quality remains at the heart of everything
            we do.
          </p>
        </div>

        <div className="delivery_banner w-full h-auto my-8">
          <img src={deliveryBanner} alt="" className="w-full h-full" />
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
