import ArtistCard from 'apps/next-music-exclusives/components/Cards/ArtistCard';
import styles from './page.module.scss';
import Image from 'next/image';
import SongCard from 'apps/next-music-exclusives/components/Cards/SongCard';
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  const imageUrl =
    'https://lastfm.freetls.fastly.net/i/u/ar0/813a26ad9dd9a0199ffe0990e3d9c974.jpg';
  return (
    <div className={'w-full'}>
      {/* <div className="m-3 text-x1 text-me-text font-semibold">
        RECENT SNIPPETS
      </div>
      <div className="w-62 flex justify-center gap-3">
        <ArtistCard
          name="Roddy Ricch"
          imageUrl={
            'https://lastfm.freetls.fastly.net/i/u/ar0/813a26ad9dd9a0199ffe0990e3d9c974.jpg'
          }
          rating={0}
        />
        <ArtistCard
          name="Roddy Ricch"
          imageUrl={
            'https://i.discogs.com/Xn-GOhroE74laSUMZbVWAoGpUUguLdS8TczFKOqMx4E/rs:fit/g:sm/q:90/h:750/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTY4Nzgz/NjktMTU3ODQ5MjMy/MS03MDcyLmpwZWc.jpeg'
          }
          rating={0}
        />
        <ArtistCard
          name="Roddy Ricch"
          imageUrl={
            'https://townsquare.media/site/812/files/2018/11/roddy-ricch.jpg?w=980&q=75'
          }
          rating={0}
        />
        <ArtistCard name="Roddy Ricch" imageUrl={imageUrl} rating={0} />
        <ArtistCard name="Roddy Ricch" imageUrl={imageUrl} rating={0} />
      </div> */}

      <div className="m-3 text-x1 text-me-text font-semibold">
        RECENT SNIPPETS
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4 w-full">
        <SongCard
          title={'Street Code'}
          artist={'Roddy Ricch'}
          imageUrl={
            'https://images.hdqwalls.com/download/roddy-ricch-4k-z2-1920x1080.jpg'
          }
        />
        <SongCard
          title={'Percocet Dreams'}
          artist={'Polo G'}
          imageUrl={
            'https://www.rollingstone.com/wp-content/uploads/2020/10/RS-PUMA-G015c.jpg'
          }
        />
        <SongCard
          title={'Rosetta Stone'}
          artist={'Young Thug'}
          imageUrl={
            'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/PRESS_IMAGE_r5j4oh_k5otyu/young-thug-photo-via-publicist.jpg'
          }
        />
        <SongCard
          title={'Ku Klux'}
          artist={'Roddy Ricch'}
          imageUrl={
            'https://images.hdqwalls.com/download/roddy-ricch-4k-z2-1920x1080.jpg'
          }
        />
      </div>
    </div>
  );
}
