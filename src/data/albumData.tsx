interface Album {
  title: string;
  image: string;
  altText: string;
  description: string;
  albumLinks: {
    href: string;
    linkText: string;
    icon: string;
  }[];
}

export const AlbumData: Album[] = [
  {
    title: 'Noone Lasses',
    image: '/src/assets/noone-lasses-cover.jpg',
    altText: 'Noone Lasses cover art, a painting of two female figures on a hilltop next to a tree',
    description: 'Playing celtic melodies on the guitar that are usually reserved for the flute, fiddle, and bagpipes is no easy feat. But Anton Emery has managed to do so with grace and authenticity on his debut solo guitar album, Noone Lasses. Recorded in California during the spring and fall of 2009, Noone Lasses captures the subtle lilt and rhythm of celtic music, while giving the tunes a fresh voice on solo guitar. Produced by guitarist Steve Baughman and engineered by Acoustic Guitar Contributing Editor Doug Young, Noone Lasses includes arrangements of reels, jigs, and a welsh tune, among others.  It’s just one musician in the studio with his guitar, recorded in pristine sound quality and minimal processing.',
    albumLinks: [
      {
        href: 'https://antonemery.bandcamp.com/album/noone-lasses',
        linkText: 'Bandcamp',
        icon: 'bandcamp',
      },
      {
        href: 'https://music.apple.com/in/album/noone-lasses/358821463',
        linkText: 'Apple Music',
        icon: 'apple',
      },
      {
        href: 'https://open.spotify.com/album/2TRo3fG3ly4b2NnVtD9A7P',
        linkText: 'Spotify',
        icon: 'spotify',
      }
    ]
  },
  {
    title:'The Isolation Waltz',
    image: '/src/assets/isolation-waltz-cover.jpg',
    altText: 'The Isolation Waltz cover art, a photograph of a log lying on the beach during low tide.',
    description: "The Isolation Waltz is Anton's second solo release. Continuing in the style of his first album, Noone Lasses, it centers around celtic tunes arranged for solo guitar. This second album ventures a bit further, including material from Scandinavia, some clawhammer banjo, and a few original compositions.",
    albumLinks: [
      {
        href: 'https://antonemery.bandcamp.com/album/the-isolation-waltz',
        linkText: 'Bandcamp',
        icon: 'bandcamp',
      },
      {
        href: 'https://music.apple.com/us/album/the-isolation-waltz/1557138336',
        linkText: 'Apple Music',
        icon: 'apple',
      },
      {
        href: 'https://open.spotify.com/album/7lvFAkYjMLptHdeZi8vNd0',
        linkText: 'Spotify',
        icon: 'spotify',
      }
    ]
  },
  {
    title:'Heads, Tails, and Heart',
    image: '/src/assets/dram-go-cover.jpg',
    altText: 'Heads, Tails, and Heart cover art, a photo of the three band members, Micah Babinski, Rachel Bowen, and Anton Emery, standing in a field with their instruments.',
    description: 'With their second album, Dram & Go continues to perform their unique, foot-stomping blend of traditional Scottish, Irish, and American music. Featuring Micah Babinski (border pipes), Rachel Bowen (five-string fiddle), and Anton Emery (guitar and banjo), Heads, Tails, and Heart combines traditional material, original compositions, and old-time favorites like “Angeline the Baker.” The album alternates between driving sets featuring the whole band, solo tunes by each of the members, and even a little bit of banjo.',
    albumLinks: [
      {
        href: 'https://dramandgo.bandcamp.com/album/heads-tails-and-heart',
        linkText: 'Bandcamp',
        icon: 'bandcamp',
      },
      {
        href: 'https://music.apple.com/ca/artist/dram-go/1437764374',
        linkText: 'Apple Music',
        icon: 'apple',
      }
    ]
  }
]

