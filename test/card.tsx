import React from 'react';

interface CardImage {
  name: string;
  url: string;
}

interface CardsProps {
  cardImages: CardImage[];
}

const Cards: React.FC<CardsProps> = ({ cardImages }) => {
  return (
    <div>
      <h1>Card Images</h1>
      {cardImages.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.name} width={200} height={300} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/repos/Wildric-Auric/YuGiOh-Database/contents/Card%20Images');
  const data = await response.json();

  const cardImages: CardImage[] = data.map((item: any) => ({
    name: item.name,
    url: item.download_url,
  }));

  return {
    props: {
      cardImages,
    },
  };
}

export default Cards;
