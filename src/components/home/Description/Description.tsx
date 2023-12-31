"use client"
import Image from "next/image";
import { useState } from "react";
import classNames from 'classnames/bind';
import styles from "./Description.module.sass";

const PLACEHOLDER_IMAGE = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAdEAABAwUBAAAAAAAAAAAAAAAAAQIGBBYhNUFj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAaEQACAgMAAAAAAAAAAAAAAAAAAQIDMTNx/9oADAMBAAIRAxEAPwCep81L6keE2VTz1cACqrXHiB5P/9k=";

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClicked = () => setHasBorder(!hasBorder);

  const cx = classNames.bind(styles);
  const buttonStyle = cx('Description__button', {
    'Description__button--border': hasBorder,
  })

  return (
    <section className={styles.Description}>
      <button onClick={handleClicked} className={buttonStyle}>
        <div className={styles.Desctiption__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            // fill
            width={500}
            height={300}
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow`s Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
