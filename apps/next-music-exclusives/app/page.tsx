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
    <div className={'w-full mt-3'}>
      <div className="text-x1 text-me-text bg-me-secondary p-3 rounded-lg">
        <div className="w-2/3">
          <span className="font-semibold tracking-title">
            {process.env.NEXT_PUBLIC_PROJECT_TITLE?.toUpperCase()}
          </span>
          <p className="mt-2 ml-3 text-me-text font-normal">
            Here you can find hot new unreleased music that you can purchase
            exclusively. Snippets are watermarked and shortened just for you to
            preview. If you find one you like, you can initiate a ticket with
            the seller to negotiate a price. All of our sellers are vetted for
            both yours and our sake. Upon payment received, you will be given a
            download link to your snippet.
          </p>
        </div>

        <div className="flex flex-col mt-5 w-full gap-2">
          <span className="">
            Join our Telegram channel to stay in the loop about new snippets and
            site news.
          </span>
          <button className="text-white bg-me-primary w-1/5 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
            Join Telegram!
          </button>
        </div>
      </div>
      <div className="m-3 text-x1 text-me-text font-semibold">
        RECENT SNIPPETS
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 w-full">
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

      <div className="m-3 text-x1 text-me-text font-semibold">
        FEATURED ARTISTS
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
      </div>
    </div>
  );
}
